import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';

const PACKAGE_NAME = '@metamask/design-system-react-native';

/**
 * Maps public export names to their component directory under `src/components/`.
 * Parsed from `components/index.ts` so the rewrite stays in sync with the package barrel.
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

/** Split a barrel import into one import statement per component subpath. */
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
 * Example stories intentionally use production-style imports:
 * `import { Box } from '@metamask/design-system-react-native'`
 *
 * When Vite resolves those through `src/index.ts` → `src/components/index.ts`, Rolldown
 * creates a shared "orchestrator" chunk that runs before per-component inits and eagerly
 * loads unrelated modules (Avatar, Badge, Jazzicon, etc.). On cold CDN loads, ~45 parallel
 * preloads make init order non-deterministic and a component binding can still be `undefined`
 * at render time → React error #130 ("Element type is invalid").
 *
 * Rewriting to `@metamask/design-system-react-native/components/<Component>` at build time
 * preserves the documented import style in source while matching the init order of direct
 * component imports (which do not hit this race).
 */
export function designSystemBarrelImportsPlugin(
  componentsIndexPath: string,
): Plugin {
  const exportMap = buildExportMap(componentsIndexPath);

  return {
    name: 'design-system-barrel-imports',
    // Run before other transforms so downstream plugins see resolved subpath imports.
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
