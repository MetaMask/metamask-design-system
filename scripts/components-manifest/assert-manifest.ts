import fs from 'fs';

/**
 * Component ids that belong in docs.json or the Storybook sidebar, not in
 * components.json. Stories opt out with `tags: ['!manifest']`.
 *
 * @see https://storybook.js.org/docs/ai/manifests
 */
const EXCLUDED_ID = /^(?:design-tokens|patterns)-/u;

type ManifestComponent = {
  reactDocgenTypescript?: {
    props?: Record<string, unknown>;
  };
};

type ComponentsManifest = {
  components?: Record<string, ManifestComponent>;
};

type ExpectedComponent = {
  id: string;
  props: string[];
};

const EXPECTED: ExpectedComponent[][] = [
  [
    {
      id: 'react-components-button',
      props: ['variant', 'size', 'className', 'style', 'children'],
    },
    {
      id: 'react-components-box',
      props: ['flexDirection', 'className', 'style', 'children'],
    },
  ],
  [
    {
      id: 'components-button',
      props: ['variant', 'size', 'style', 'children', 'testID'],
    },
    {
      id: 'components-box',
      props: ['flexDirection', 'style', 'children', 'testID'],
    },
  ],
];

/**
 * Failures for one generated components.json.
 *
 * @param manifestPath - Path passed on the command line.
 * @param expected - Critical component ids and prop names for that Storybook.
 * @returns Human-readable failures. Empty means the manifest is acceptable.
 */
export function assertManifest(
  manifestPath: string,
  expected: ExpectedComponent[],
): string[] {
  if (!fs.existsSync(manifestPath)) {
    return [`${manifestPath} does not exist`];
  }

  let manifest: ComponentsManifest;
  try {
    manifest = JSON.parse(
      fs.readFileSync(manifestPath, 'utf8'),
    ) as ComponentsManifest;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return [`${manifestPath} is not valid JSON: ${message}`];
  }

  const { components } = manifest;
  if (components === undefined) {
    return [`${manifestPath} has no components object`];
  }

  const failures: string[] = [];
  for (const id of Object.keys(components)) {
    if (EXCLUDED_ID.test(id)) {
      failures.push(`${id} is still in the manifest`);
    }
  }

  for (const { id, props } of expected) {
    const component = components[id];
    if (component === undefined) {
      failures.push(`${id} is missing`);
      continue;
    }
    const propNames = new Set(
      Object.keys(component.reactDocgenTypescript?.props ?? {}),
    );
    for (const propName of props) {
      if (!propNames.has(propName)) {
        failures.push(`${id} is missing prop ${propName}`);
      }
    }
  }

  return failures;
}

/**
 * Check the React manifest, then the React Native manifest.
 */
function main(): void {
  const [reactPath, reactNativePath] = process.argv.slice(2);
  if (reactPath === undefined || reactNativePath === undefined) {
    console.error(
      'Usage: tsx scripts/components-manifest/assert-manifest.ts <react-components.json> <react-native-components.json>',
    );
    process.exitCode = 1;
    return;
  }

  const started = Date.now();
  const failures = [
    ...assertManifest(reactPath, EXPECTED[0]).map(
      (failure) => `[react] ${failure}`,
    ),
    ...assertManifest(reactNativePath, EXPECTED[1]).map(
      (failure) => `[react-native] ${failure}`,
    ),
  ];
  const elapsedMs = Date.now() - started;
  if (failures.length === 0) {
    console.log(`Component manifest check passed in ${elapsedMs}ms.`);
    return;
  }

  console.error(
    `Component manifest check failed (${failures.length} issue(s), ${elapsedMs}ms):`,
  );
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exitCode = 1;
}

main();
