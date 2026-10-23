import fs from 'fs';
import path from 'path';
import * as ts from 'typescript';

/**
 * Versioned docs manifest shipped inside an MMDS package (`dist/docs-manifest.json`).
 *
 * Consumers (agents, review gates, CI) read this file from `node_modules` so the
 * documentation they cite matches the package version they actually installed,
 * instead of the published Storybook, which tracks `main`.
 */
export const DOCS_MANIFEST_SCHEMA = 'mmds-docs-manifest/v1';
export const DOCS_MANIFEST_FILENAME = 'docs-manifest.json';

export type ManifestProp = {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue: string | null;
  deprecated: string | null;
};

export type ManifestStory = {
  id: string;
  name: string;
  exportName: string;
};

export type ManifestComponent = {
  docId: string;
  name: string;
  importPath: string;
  importStatement: string;
  sourcePath: string;
  description: string;
  descriptionSource: 'jsdoc' | 'readme' | null;
  deprecated: { message: string } | null;
  propsType: string | null;
  props: ManifestProp[];
  inheritedPropCount: number;
  inheritedProps: string[];
  readme: { path: string; content: string } | null;
  stories: ManifestStory[];
};

export type DocsManifest = {
  schema: typeof DOCS_MANIFEST_SCHEMA;
  package: { name: string; version: string };
  storybook: { idScheme: 'storybook-csf'; note: string };
  components: ManifestComponent[];
};

export type CsfStory = { id: string; name: string; exportName: string };
export type CsfFileInfo = { component: string | null; stories: CsfStory[] };

/**
 * Parses a CSF story file into its component name and story ids.
 * Injected so the generator uses Storybook's own CSF indexer in production
 * and a stub in tests.
 */
export type CsfLoader = (code: string, fileName: string) => CsfFileInfo;

export type BuildOptions = {
  packageDir: string;
  loadCsf: CsfLoader;
  entry?: string;
  tsconfig?: string;
};

const README_NAMES = ['README.md', 'README.mdx'];
const STORY_FILE = /\.stories\.(?:js|jsx|ts|tsx)$/u;

/**
 * Tests a TypeScript symbol flag.
 *
 * @param flags - The symbol's flags.
 * @param flag - The flag to test.
 * @returns Whether the flag is set.
 */
function hasFlag(flags: ts.SymbolFlags, flag: ts.SymbolFlags): boolean {
  // eslint-disable-next-line no-bitwise
  return (flags & flag) !== 0;
}

/**
 * Returns the doc comment text of a symbol.
 *
 * @param symbol - The TypeScript symbol.
 * @param checker - The type checker.
 * @returns The comment text, trimmed.
 */
function docText(symbol: ts.Symbol, checker: ts.TypeChecker): string {
  return ts
    .displayPartsToString(symbol.getDocumentationComment(checker))
    .trim();
}

/**
 * Returns the text of a JSDoc tag on a symbol, or null when absent.
 *
 * @param symbol - The TypeScript symbol.
 * @param checker - The type checker.
 * @param tagName - The tag to look for, without `@`.
 * @returns The tag text ('' when the tag has no text) or null.
 */
function tagText(
  symbol: ts.Symbol,
  checker: ts.TypeChecker,
  tagName: string,
): string | null {
  const tag = symbol
    .getJsDocTags(checker)
    .find((candidate) => candidate.name === tagName);
  if (!tag) {
    return null;
  }
  return ts.displayPartsToString(tag.text ?? []).trim();
}

/**
 * Returns the first prose paragraph after the H1 of a README.
 *
 * @param content - README markdown.
 * @returns The paragraph, or '' when none.
 */
export function readmeIntro(content: string): string {
  const lines = content.split('\n');
  const paragraph: string[] = [];
  let seenHeading = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!seenHeading) {
      seenHeading = trimmed.startsWith('# ');
      continue;
    }
    const isProse =
      trimmed !== '' &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('import ') &&
      !trimmed.startsWith('<') &&
      !trimmed.startsWith('```');
    if (isProse) {
      paragraph.push(trimmed);
    } else if (paragraph.length > 0) {
      break;
    }
  }
  return paragraph.join(' ');
}

/**
 * Lists story files under a directory, sorted for deterministic output.
 *
 * @param dir - Directory to search.
 * @returns Absolute story file paths.
 */
function listStoryFiles(dir: string): string[] {
  const found: string[] = [];
  const walk = (current: string): void => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (STORY_FILE.test(entry.name)) {
        found.push(full);
      }
    }
  };
  walk(dir);
  return found.sort();
}

/**
 * Builds the docs manifest for one MMDS package.
 *
 * Components are value exports of the entry point that have a matching
 * `<Name>Props` type export. Props come from the TypeScript checker; only
 * props declared inside the monorepo are documented; props inherited from
 * React Native or React types are listed by name only.
 *
 * @param options - Build options.
 * @returns The manifest.
 */
export function buildDocsManifest(options: BuildOptions): DocsManifest {
  const packageDir = path.resolve(options.packageDir);
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(packageDir, 'package.json'), 'utf8'),
  ) as { name: string; version: string };
  const entry = path.join(packageDir, options.entry ?? 'src/index.ts');
  const tsconfigPath = path.join(
    packageDir,
    options.tsconfig ?? 'tsconfig.json',
  );
  const repoRoot = path.resolve(packageDir, '..', '..');

  const config = ts.getParsedCommandLineOfConfigFile(
    tsconfigPath,
    {},
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
        throw new Error(
          ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
        );
      },
    },
  );
  if (!config) {
    throw new Error(`Cannot read ${tsconfigPath}`);
  }
  const program = ts.createProgram({
    rootNames: [entry],
    options: { ...config.options, noEmit: true, composite: false },
  });
  const checker = program.getTypeChecker();
  const entrySource = program.getSourceFile(entry);
  if (!entrySource) {
    throw new Error(`Cannot load ${entry}`);
  }
  const moduleSymbol = checker.getSymbolAtLocation(entrySource);
  if (!moduleSymbol) {
    throw new Error(`${entry} has no exports`);
  }
  const exportedSymbols = checker.getExportsOfModule(moduleSymbol);
  const byName = new Map(
    exportedSymbols.map((symbol) => [symbol.getName(), symbol]),
  );

  const csfByComponent = new Map<string, CsfStory[]>();
  for (const file of listStoryFiles(path.join(packageDir, 'src'))) {
    const info = options.loadCsf(fs.readFileSync(file, 'utf8'), file);
    if (info.component) {
      const list = csfByComponent.get(info.component) ?? [];
      list.push(...info.stories);
      csfByComponent.set(info.component, list);
    }
  }

  const components: ManifestComponent[] = [];
  for (const exported of exportedSymbols) {
    const name = exported.getName();
    const propsSymbol = byName.get(`${name}Props`);
    if (!/^[A-Z]/u.test(name) || !propsSymbol) {
      continue;
    }
    const target = hasFlag(exported.flags, ts.SymbolFlags.Alias)
      ? checker.getAliasedSymbol(exported)
      : exported;
    if (!hasFlag(target.flags, ts.SymbolFlags.Value)) {
      continue;
    }
    const declaration = target.declarations?.[0];
    const sourceFile = declaration?.getSourceFile().fileName ?? '';
    const componentDir = path.dirname(sourceFile);

    const propsTarget = hasFlag(propsSymbol.flags, ts.SymbolFlags.Alias)
      ? checker.getAliasedSymbol(propsSymbol)
      : propsSymbol;
    const propsType = checker.getDeclaredTypeOfSymbol(propsTarget);
    const props: ManifestProp[] = [];
    const inheritedProps: string[] = [];
    for (const prop of checker.getPropertiesOfType(propsType)) {
      const propDeclaration = prop.declarations?.[0];
      const declaredIn = propDeclaration?.getSourceFile().fileName ?? '';
      const isOwn =
        declaredIn.startsWith(repoRoot) && !declaredIn.includes('node_modules');
      if (!isOwn || !propDeclaration) {
        inheritedProps.push(prop.getName());
        continue;
      }
      const propType = checker.getTypeOfSymbolAtLocation(prop, propDeclaration);
      props.push({
        name: prop.getName(),
        type: checker.typeToString(
          propType,
          undefined,
          ts.TypeFormatFlags.NoTruncation,
        ),
        required: !hasFlag(prop.flags, ts.SymbolFlags.Optional),
        description: docText(prop, checker),
        defaultValue: tagText(prop, checker, 'default'),
        deprecated: tagText(prop, checker, 'deprecated'),
      });
    }
    props.sort((a, b) => a.name.localeCompare(b.name));
    inheritedProps.sort((a, b) => a.localeCompare(b));

    const readmeName = README_NAMES.find((candidate) =>
      fs.existsSync(path.join(componentDir, candidate)),
    );
    const readme = readmeName
      ? {
          path: path
            .relative(packageDir, path.join(componentDir, readmeName))
            .split(path.sep)
            .join('/'),
          content: fs.readFileSync(path.join(componentDir, readmeName), 'utf8'),
        }
      : null;

    const jsdoc = docText(target, checker);
    const intro = readme ? readmeIntro(readme.content) : '';
    let descriptionSource: ManifestComponent['descriptionSource'] = null;
    if (jsdoc) {
      descriptionSource = 'jsdoc';
    } else if (intro) {
      descriptionSource = 'readme';
    }
    const deprecatedMessage = tagText(target, checker, 'deprecated');
    const stories = [...(csfByComponent.get(name) ?? [])].sort((a, b) =>
      a.id.localeCompare(b.id),
    );

    components.push({
      docId: `${packageJson.name}#${name}`,
      name,
      importPath: packageJson.name,
      importStatement: `import { ${name} } from '${packageJson.name}';`,
      sourcePath: path
        .relative(packageDir, sourceFile)
        .split(path.sep)
        .join('/'),
      description: jsdoc || intro,
      descriptionSource,
      deprecated:
        deprecatedMessage === null ? null : { message: deprecatedMessage },
      propsType: `${name}Props`,
      props,
      inheritedPropCount: inheritedProps.length,
      inheritedProps,
      readme,
      stories,
    });
  }
  components.sort((a, b) => a.name.localeCompare(b.name));

  return {
    schema: DOCS_MANIFEST_SCHEMA,
    package: { name: packageJson.name, version: packageJson.version },
    storybook: {
      idScheme: 'storybook-csf',
      note: 'Story ids match the Storybook index for this source. The published Storybook tracks main and can be ahead of this package version.',
    },
    components,
  };
}

/**
 * Serialises a manifest deterministically.
 *
 * @param manifest - The manifest.
 * @returns JSON text with a trailing newline.
 */
export function serializeDocsManifest(manifest: DocsManifest): string {
  return `${JSON.stringify(manifest, null, 2)}\n`;
}

export type CoverageGap = {
  component: string;
  missing: ('description' | 'props' | 'readme' | 'story')[];
  undocumentedProps: string[];
};

/**
 * Finds documentation gaps for each component.
 *
 * A component needs a description (component JSDoc or README intro), at
 * least one own prop with every own prop described, a README, and at least
 * one story.
 *
 * @param manifest - The manifest to check.
 * @returns One entry per component with gaps, sorted by name.
 */
export function findCoverageGaps(manifest: DocsManifest): CoverageGap[] {
  const gaps: CoverageGap[] = [];
  for (const component of manifest.components) {
    const missing: CoverageGap['missing'] = [];
    const undocumentedProps = component.props
      .filter((prop) => prop.description === '')
      .map((prop) => prop.name);
    if (!component.description) {
      missing.push('description');
    }
    if (component.props.length === 0 || undocumentedProps.length > 0) {
      missing.push('props');
    }
    if (!component.readme) {
      missing.push('readme');
    }
    if (component.stories.length === 0) {
      missing.push('story');
    }
    if (missing.length > 0) {
      gaps.push({ component: component.name, missing, undocumentedProps });
    }
  }
  return gaps;
}

export type Baseline = Record<string, string[]>;

/**
 * Compares gaps with a baseline of known gaps so only new gaps fail.
 *
 * @param gaps - Current gaps.
 * @param baseline - Known gaps by component name.
 * @returns New gaps and baseline entries that are now fixed.
 */
export function compareWithBaseline(
  gaps: CoverageGap[],
  baseline: Baseline,
): { newGaps: CoverageGap[]; fixed: string[] } {
  const newGaps: CoverageGap[] = [];
  const current = new Map(gaps.map((gap) => [gap.component, gap]));
  for (const gap of gaps) {
    const known = new Set(baseline[gap.component] ?? []);
    const unexpected = gap.missing.filter((item) => !known.has(item));
    if (unexpected.length > 0) {
      newGaps.push({ ...gap, missing: unexpected });
    }
  }
  const fixed: string[] = [];
  for (const [component, items] of Object.entries(baseline)) {
    const gap = current.get(component);
    for (const item of items) {
      if (!gap?.missing.includes(item as CoverageGap['missing'][number])) {
        fixed.push(`${component}:${item}`);
      }
    }
  }
  return { newGaps, fixed: fixed.sort() };
}

/**
 * Serialises a baseline in the layout Prettier expects (one component per line).
 *
 * @param baseline - Known gaps by component name.
 * @returns JSON text with a trailing newline.
 */
export function serializeBaseline(baseline: Baseline): string {
  const entries = Object.keys(baseline)
    .sort()
    .map(
      (name) =>
        `  ${JSON.stringify(name)}: [${(baseline[name] ?? [])
          .map((item) => JSON.stringify(item))
          .join(', ')}]`,
    );
  return entries.length === 0 ? '{}\n' : `{\n${entries.join(',\n')}\n}\n`;
}
