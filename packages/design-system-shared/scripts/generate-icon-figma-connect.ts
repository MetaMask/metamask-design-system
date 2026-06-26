import * as fs from 'fs/promises';
import * as path from 'path';

/* eslint-disable n/no-process-env -- CLI script reads FIGMA_ACCESS_TOKEN from the environment */

const REPO_ROOT = path.join(__dirname, '../../..');
const FIGMA_FILE_KEY = '1D6tnzXqWgnUC3spaAOELN';
const FIGMA_FILE_URL = `https://www.figma.com/design/${FIGMA_FILE_KEY}/%F0%9F%A6%8A-MMDS-Components`;
const SHARED_TYPES_FILE = path.join(
  __dirname,
  '../src/types/Icon/Icon.types.ts',
);
const SHARED_ICONS_DIR = path.join(__dirname, '../src/assets/icons');

const OUTPUT_PATHS = [
  path.join(
    REPO_ROOT,
    'packages/design-system-react/src/components/Icon/IconGlyphs.figma.batch.json',
  ),
  path.join(
    REPO_ROOT,
    'packages/design-system-react-native/src/components/Icon/IconGlyphs.figma.batch.json',
  ),
];

type FigmaComponentMeta = {
  name: string;
  node_id: string;
};

type BatchComponentEntry = {
  url: string;
  iconNameKey: string;
  id: string;
  source?: string;
};

function toPascalCase(figmaName: string): string {
  return figmaName
    .split('-')
    .map((part) => `${part[0]?.toUpperCase() ?? ''}${part.slice(1)}`)
    .join('');
}

function toBatchId(figmaName: string): string {
  return `mmds-icon-${figmaName}`;
}

function readIconNameKeys(typesSource: string): Set<string> {
  const keys = new Set<string>();
  let inBlock = false;

  for (const line of typesSource.split('\n')) {
    if (line.includes('export const IconName')) {
      inBlock = true;
      continue;
    }
    if (!inBlock) {
      continue;
    }
    if (line.trim().startsWith('} as const')) {
      break;
    }
    const match = line.match(/^\s+(\w+):/u);
    if (match) {
      keys.add(match[1]);
    }
  }

  return keys;
}

function nodeIdToQueryParam(nodeId: string): string {
  return nodeId.replace(':', '-');
}

async function fetchFigmaComponents(): Promise<FigmaComponentMeta[]> {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      'FIGMA_ACCESS_TOKEN is required. Add it to .env at the repo root.',
    );
  }

  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
    {
      headers: {
        'X-Figma-Token': token,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Figma API error ${response.status}: ${await response.text()}`,
    );
  }

  const data = (await response.json()) as {
    meta?: { components?: FigmaComponentMeta[] };
  };

  return data.meta?.components ?? [];
}

function isIconGlyphName(name: string): boolean {
  return /^[a-z0-9-]+$/u.test(name);
}

function buildBatchJson(components: BatchComponentEntry[]): string {
  const payload = {
    templateFile: './IconGlyphs.figma.batch.ts',
    components,
  };

  return `${JSON.stringify(payload, null, 2)}\n`;
}

async function main(): Promise<void> {
  const typesSource = await fs.readFile(SHARED_TYPES_FILE, 'utf8');
  const iconNameKeys = readIconNameKeys(typesSource);
  const figmaComponents = await fetchFigmaComponents();

  const mapped: BatchComponentEntry[] = [];
  const unmapped: string[] = [];

  for (const component of figmaComponents) {
    if (!isIconGlyphName(component.name)) {
      continue;
    }

    const iconNameKey = toPascalCase(component.name);
    if (!iconNameKeys.has(iconNameKey)) {
      unmapped.push(component.name);
      continue;
    }

    const svgPath = path.join(SHARED_ICONS_DIR, `${component.name}.svg`);
    let source: string | undefined;
    try {
      await fs.access(svgPath);
      source = path.relative(REPO_ROOT, svgPath);
    } catch {
      source = undefined;
    }

    mapped.push({
      url: `${FIGMA_FILE_URL}?node-id=${nodeIdToQueryParam(component.node_id)}`,
      iconNameKey,
      id: toBatchId(component.name),
      ...(source ? { source } : {}),
    });
  }

  mapped.sort((a, b) => a.id.localeCompare(b.id));

  const output = buildBatchJson(mapped);

  for (const outputPath of OUTPUT_PATHS) {
    await fs.writeFile(outputPath, output, 'utf8');
  }

  console.log(
    `Generated ${mapped.length} icon glyph batch entries (${unmapped.length} Figma glyphs skipped — no IconName match).`,
  );

  if (unmapped.length > 0) {
    console.log('Unmapped Figma glyphs:', unmapped.sort().join(', '));
  }
}

if (require.main === module) {
  main().catch((error: unknown) => {
    console.error(error);
    throw error;
  });
}
