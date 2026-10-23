import fs from 'fs';
import os from 'os';
import path from 'path';

import { parseArgs } from './cli';
import type { CsfLoader, DocsManifest } from './docs-manifest';
import {
  DOCS_MANIFEST_SCHEMA,
  buildDocsManifest,
  compareWithBaseline,
  findCoverageGaps,
  readmeIntro,
  serializeBaseline,
  serializeDocsManifest,
} from './docs-manifest';

const files: Record<string, string> = {
  'package.json': JSON.stringify({
    name: '@metamask/fixture',
    version: '1.2.3',
  }),
  'tsconfig.json': JSON.stringify({
    compilerOptions: {
      strict: true,
      jsx: 'preserve',
      module: 'ES2020',
      moduleResolution: 'bundler',
      skipLibCheck: true,
      noEmit: true,
    },
    include: ['src'],
  }),
  'src/index.ts': "export * from './components';\n",
  'src/components/index.ts': [
    "export { Good } from './Good';",
    "export type { GoodProps } from './Good';",
    "export { Bad } from './Bad';",
    "export type { BadProps } from './Bad';",
    "export { goodHelper } from './Good';",
    '',
  ].join('\n'),
  'src/components/Good/index.ts':
    "export { Good, goodHelper } from './Good';\nexport type { GoodProps } from './Good';\n",
  'src/components/Good/Good.tsx': [
    'export type GoodProps = {',
    '  /** Text shown in the row. */',
    '  label: string;',
    '  /**',
    '   * Disables the row.',
    '   *',
    '   * @default false',
    '   */',
    '  isDisabled?: boolean;',
    '  /**',
    '   * Old size prop.',
    '   *',
    '   * @deprecated Use `variant` instead.',
    '   */',
    '  size?: string;',
    '};',
    '',
    '/** Good renders a labelled row. */',
    'export const Good = (props: GoodProps) => props.label;',
    'export const goodHelper = () => 1;',
    '',
  ].join('\n'),
  'src/components/Good/README.md':
    "# Good\n\nGood renders a labelled row.\n\n```tsx\nimport { Good } from '@metamask/fixture';\n```\n",
  'src/components/Good/Good.stories.tsx':
    "export default { title: 'Components/Good', component: Good };\nexport const Default = {};\n",
  'src/components/Bad/index.ts':
    "export { Bad } from './Bad';\nexport type { BadProps } from './Bad';\n",
  'src/components/Bad/Bad.tsx': [
    'export type BadProps = { tone?: string };',
    '/**',
    ' * @deprecated Use `Good` instead.',
    ' */',
    'export const Bad = (props: BadProps) => props.tone;',
    '',
  ].join('\n'),
};

const stubCsf: CsfLoader = (code) => {
  const component = /component:\s*(\w+)/u.exec(code)?.[1] ?? null;
  const title = /title:\s*'([^']+)'/u.exec(code)?.[1] ?? '';
  const storyExports = [...code.matchAll(/export const (\w+)/gu)].map(
    (match) => match[1] ?? '',
  );
  return {
    component,
    stories: storyExports.map((exportName) => ({
      id: `${title.toLowerCase().replace(/\//gu, '-')}--${exportName.toLowerCase()}`,
      name: exportName,
      exportName,
    })),
  };
};

describe('docs manifest', () => {
  let root: string;
  let packageDir: string;
  let manifest: DocsManifest;

  beforeAll(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'docs-manifest-'));
    packageDir = path.join(root, 'packages', 'fixture');
    for (const [file, content] of Object.entries(files)) {
      const full = path.join(packageDir, file);
      fs.mkdirSync(path.dirname(full), { recursive: true });
      fs.writeFileSync(full, content);
    }
    manifest = buildDocsManifest({ packageDir, loadCsf: stubCsf });
  });

  afterAll(() => {
    fs.rmSync(root, { recursive: true, force: true });
  });

  it('records the schema and package version', () => {
    expect(manifest.schema).toBe(DOCS_MANIFEST_SCHEMA);
    expect(manifest.package).toStrictEqual({
      name: '@metamask/fixture',
      version: '1.2.3',
    });
  });

  it('lists only exports with a matching Props type, sorted by name', () => {
    expect(
      manifest.components.map((component) => component.name),
    ).toStrictEqual(['Bad', 'Good']);
  });

  it('captures description, import path, props, README and stories', () => {
    const good = manifest.components.find(
      (component) => component.name === 'Good',
    );
    expect(good).toMatchObject({
      docId: '@metamask/fixture#Good',
      importStatement: "import { Good } from '@metamask/fixture';",
      sourcePath: 'src/components/Good/Good.tsx',
      description: 'Good renders a labelled row.',
      descriptionSource: 'jsdoc',
      deprecated: null,
      inheritedPropCount: 0,
      inheritedProps: [],
      readme: { path: 'src/components/Good/README.md' },
      stories: [
        {
          id: 'components-good--default',
          name: 'Default',
          exportName: 'Default',
        },
      ],
    });
    expect(good?.props).toStrictEqual([
      {
        name: 'isDisabled',
        type: 'boolean | undefined',
        required: false,
        description: 'Disables the row.',
        defaultValue: 'false',
        deprecated: null,
      },
      {
        name: 'label',
        type: 'string',
        required: true,
        description: 'Text shown in the row.',
        defaultValue: null,
        deprecated: null,
      },
      {
        name: 'size',
        type: 'string | undefined',
        required: false,
        description: 'Old size prop.',
        defaultValue: null,
        deprecated: 'Use `variant` instead.',
      },
    ]);
  });

  it('records deprecation and missing docs', () => {
    const bad = manifest.components.find(
      (component) => component.name === 'Bad',
    );
    expect(bad).toMatchObject({
      description: '',
      descriptionSource: null,
      deprecated: { message: 'Use `Good` instead.' },
      readme: null,
      stories: [],
    });
  });

  it('is deterministic', () => {
    const again = buildDocsManifest({ packageDir, loadCsf: stubCsf });
    expect(serializeDocsManifest(again)).toBe(serializeDocsManifest(manifest));
    expect(serializeDocsManifest(manifest).endsWith('}\n')).toBe(true);
  });

  it('finds coverage gaps', () => {
    expect(findCoverageGaps(manifest)).toStrictEqual([
      {
        component: 'Bad',
        missing: ['description', 'props', 'readme', 'story'],
        undocumentedProps: ['tone'],
      },
    ]);
  });

  it('fails only on gaps not in the baseline and reports fixed entries', () => {
    const gaps = findCoverageGaps(manifest);
    expect(
      compareWithBaseline(gaps, {
        Bad: ['description', 'props', 'readme', 'story'],
      }),
    ).toStrictEqual({ newGaps: [], fixed: [] });
    expect(
      compareWithBaseline(gaps, { Bad: ['readme'] }).newGaps,
    ).toStrictEqual([
      {
        component: 'Bad',
        missing: ['description', 'props', 'story'],
        undocumentedProps: ['tone'],
      },
    ]);
    expect(
      compareWithBaseline(gaps, {
        Bad: ['description', 'props', 'readme', 'story'],
        Good: ['story'],
      }).fixed,
    ).toStrictEqual(['Good:story']);
  });

  it('throws for a missing entry point', () => {
    expect(() =>
      buildDocsManifest({
        packageDir,
        loadCsf: stubCsf,
        entry: 'src/missing.ts',
      }),
    ).toThrow('Cannot load');
  });
});

describe('readmeIntro', () => {
  it('returns the first paragraph after the title', () => {
    expect(
      readmeIntro(
        '# Name\n\nimport x from "y";\n\nFirst line\nsecond line.\n\nMore.',
      ),
    ).toBe('First line second line.');
  });

  it('returns an empty string without a title or paragraph', () => {
    expect(readmeIntro('No title')).toBe('');
    expect(readmeIntro('# Title\n\n## Usage\n')).toBe('');
  });
});

describe('parseArgs', () => {
  it('reads flags and values', () => {
    const args = parseArgs([
      'stray',
      '--package',
      'pkg',
      '--update-baseline',
      '--out',
    ]);
    expect(args.get('package')).toBe('pkg');
    expect(args.get('update-baseline')).toBe(true);
    expect(args.get('out')).toBe(true);
  });
});

describe('serializeBaseline', () => {
  it('writes one sorted component per line', () => {
    expect(
      serializeBaseline({ Toast: ['props'], Card: ['props', 'story'] }),
    ).toBe('{\n  "Card": ["props", "story"],\n  "Toast": ["props"]\n}\n');
    expect(serializeBaseline({})).toBe('{}\n');
  });
});
