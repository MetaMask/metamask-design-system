import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';

const PACKAGE_NAME = '@metamask/design-system-react-native';

/**
 * Maps public export names to their component directory under `src/components/`.
 * Built from `packages/design-system-react-native/src/components/index.ts`.
 */
function buildExportMap(componentsIndexPath: string): Map<string, string> {
  const content = fs.readFileSync(componentsIndexPath, 'utf8');
  const exportMap = new Map<string, string>();

  const exportFromPattern =
    /export\s+\{\s*([^}]+)\s*\}\s+from\s+['"]\.\/([^'"]+)['"]/g;

  for (const match of content.matchAll(exportFromPattern)) {
    const [, symbolsBlock, modulePath] = match;
    const symbols = symbolsBlock
      .split(',')
      .map((symbol) => symbol.trim())
      .filter((symbol) => symbol.length > 0 && !symbol.startsWith('type '));

    for (const symbol of symbols) {
      const exportName = symbol
        .replace(/^type\s+/, '')
        .split(/\s+as\s+/)[0]
        ?.trim();

      if (exportName) {
        exportMap.set(exportName, modulePath);
      }
    }
  }

  return exportMap;
}

const BARREL_IMPORT_PATTERN =
  /import\s+(type\s+)?\{([^}]+)\}\s+from\s+['"]@metamask\/design-system-react-native['"]\s*;?/g;

function rewriteBarrelImports(
  code: string,
  exportMap: Map<string, string>,
  filePath: string,
): string {
  return code.replace(
    BARREL_IMPORT_PATTERN,
    (fullMatch, typeKeyword: string | undefined, namedImports: string) => {
      const isTypeOnly = Boolean(typeKeyword);
      const names = namedImports
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);

      const groups = new Map<string, string[]>();

      for (const name of names) {
        const [importedName] = name.replace(/^type\s+/, '').split(/\s+as\s+/);
        const modulePath = exportMap.get(importedName);

        if (!modulePath) {
          throw new Error(
            `Unable to resolve "${importedName}" from ${PACKAGE_NAME} in ${filePath}`,
          );
        }

        const existing = groups.get(modulePath) ?? [];
        existing.push(name);
        groups.set(modulePath, existing);
      }

      return [...groups.entries()]
        .map(([modulePath, symbols]) => {
          const importPath = `${PACKAGE_NAME}/components/${modulePath}`;
          return `import ${isTypeOnly ? 'type ' : ''}{ ${symbols.join(', ')} } from '${importPath}';`;
        })
        .join('\n');
    },
  );
}

/**
 * Rewrites package-root barrel imports to direct component subpath imports.
 *
 * Source files keep production-style `import { Box } from '@metamask/design-system-react-native'`,
 * but the Storybook static build avoids Rolldown's shared barrel orchestrator chunk that
 * eagerly initializes unrelated components and races on cold CDN loads (React error #130).
 */
export function designSystemBarrelImportsPlugin(
  componentsIndexPath: string,
): Plugin {
  const exportMap = buildExportMap(componentsIndexPath);

  return {
    name: 'design-system-barrel-imports',
    enforce: 'pre',
    transform(code, id) {
      if (!/\.(?:[cm]?[jt]sx?)$/.test(id)) {
        return null;
      }

      if (!BARREL_IMPORT_PATTERN.test(code)) {
        return null;
      }

      BARREL_IMPORT_PATTERN.lastIndex = 0;

      return {
        code: rewriteBarrelImports(code, exportMap, id),
        map: null,
      };
    },
  };
}
