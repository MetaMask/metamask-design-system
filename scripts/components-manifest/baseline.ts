import fs from 'fs';
import path from 'path';

export const BASELINE_PATH = path.resolve(
  __dirname,
  'components-manifest-baseline.json',
);

export const DEFAULT_MANIFEST_PATHS = {
  react: 'apps/storybook-react/storybook-static/manifests/components.json',
  'react-native':
    'apps/storybook-react-native/storybook-static/manifests/components.json',
} as const;

export type PackageName = keyof typeof DEFAULT_MANIFEST_PATHS;

export type AllowRule = {
  description?: string;
  id?: string;
  idPattern?: string;
  pathPattern?: string;
};

export type BaselineComponent = {
  name: string;
  props: string[];
};

export type ManifestBaseline = {
  description: string;
  allowlist: AllowRule[];
  packages: Record<PackageName, Record<string, BaselineComponent>>;
};

export type ManifestComponent = {
  id?: string;
  name?: string;
  path?: string;
  error?: { name?: string; message?: string };
  reactDocgen?: { props?: Record<string, unknown> };
  reactDocgenTypescript?: { props?: Record<string, unknown> };
  reactComponentMeta?: { props?: Record<string, unknown> };
};

export type ComponentsManifest = {
  components?: Record<string, ManifestComponent>;
};

export type ManifestFailure = {
  packageName: PackageName;
  id: string;
  message: string;
};

export const DEFAULT_ALLOWLIST: AllowRule[] = [
  {
    description:
      'Pattern stories (Marketing Moments, Wallet Home, Backgrounds) are compositions, not design-system components.',
    idPattern: '^patterns-',
  },
  {
    description:
      'Design-token stories document tokens. They are not components in the React or React Native packages.',
    idPattern: '^design-tokens-',
  },
  {
    description: 'Docs-only entries such as introduction pages.',
    idPattern: '^docs-',
  },
];

const BASELINE_DESCRIPTION =
  'Minimum prop names for each hosted Storybook component. The check fails when a component is missing, has no props, loses a listed prop, or reports a docgen error. Pattern, token, and docs entries that match allowlist are skipped. Refresh this file with yarn components-manifest:update after an intentional API change.';

/**
 * Prop names extracted by whichever docgen engine produced the entry.
 *
 * @param component - One manifest entry.
 * @returns Sorted prop names.
 */
export function propNamesOf(
  component: ManifestComponent | undefined,
): string[] {
  const props =
    component?.reactDocgenTypescript?.props ??
    component?.reactComponentMeta?.props ??
    component?.reactDocgen?.props ??
    {};
  return Object.keys(props).sort();
}

export function isAllowlisted(
  component: { id: string; path?: string },
  allowlist: AllowRule[],
): boolean {
  return allowlist.some((rule) => {
    if (rule.id !== undefined && rule.id === component.id) {
      return true;
    }
    if (
      rule.idPattern !== undefined &&
      new RegExp(rule.idPattern, 'u').test(component.id)
    ) {
      return true;
    }
    return (
      rule.pathPattern !== undefined &&
      component.path !== undefined &&
      new RegExp(rule.pathPattern, 'u').test(component.path)
    );
  });
}

/**
 * @param packageName - react or react-native.
 * @param manifest - Generated components.json.
 * @param baseline - Committed minimum prop sets.
 * @returns Failures for this package. An empty list means the manifest holds the baseline.
 */
export function comparePackage(
  packageName: PackageName,
  manifest: ComponentsManifest,
  baseline: ManifestBaseline,
): ManifestFailure[] {
  const failures: ManifestFailure[] = [];
  const components = manifest.components ?? {};
  const expected = baseline.packages[packageName] ?? {};
  const seen = new Set<string>();

  for (const [id, component] of Object.entries(components)) {
    const entry = component ?? {};
    const resolvedId = entry.id ?? id;
    if (
      isAllowlisted({ id: resolvedId, path: entry.path }, baseline.allowlist)
    ) {
      continue;
    }
    seen.add(resolvedId);
    const name = entry.name ?? resolvedId;
    if (entry.error) {
      failures.push({
        packageName,
        id: resolvedId,
        message: `${name} docgen error: ${entry.error.name ?? 'Error'}${entry.error.message ? ` — ${entry.error.message.split('\n')[0]}` : ''}`,
      });
    }
    const actual = propNamesOf(entry);
    if (actual.length === 0) {
      failures.push({
        packageName,
        id: resolvedId,
        message: `${name} has 0 props`,
      });
    }
    const committed = expected[resolvedId];
    if (!committed) {
      failures.push({
        packageName,
        id: resolvedId,
        message: `${name} is not in the baseline. Run yarn components-manifest:update after confirming its props.`,
      });
      continue;
    }
    const missing = committed.props.filter((prop) => !actual.includes(prop));
    if (missing.length > 0) {
      failures.push({
        packageName,
        id: resolvedId,
        message: `${name} lost ${missing.length} prop(s): ${missing.join(', ')}`,
      });
    }
  }

  for (const [id, committed] of Object.entries(expected)) {
    if (!seen.has(id)) {
      failures.push({
        packageName,
        id,
        message: `${committed.name} (${id}) is in the baseline but missing from the manifest`,
      });
    }
  }

  return failures;
}

/**
 * @param manifests - Generated manifests keyed by package.
 * @param allowlist - Skip rules to store with the baseline.
 * @returns Baseline snapshot of current prop names.
 */
export function baselineFromManifests(
  manifests: Record<PackageName, ComponentsManifest>,
  allowlist: AllowRule[] = DEFAULT_ALLOWLIST,
): ManifestBaseline {
  const packages = {} as ManifestBaseline['packages'];
  for (const packageName of Object.keys(
    DEFAULT_MANIFEST_PATHS,
  ) as PackageName[]) {
    const components = manifests[packageName].components ?? {};
    const recorded: Record<string, BaselineComponent> = {};
    for (const [id, component] of Object.entries(components).sort(
      ([left], [right]) => left.localeCompare(right),
    )) {
      const entry = component ?? {};
      const resolvedId = entry.id ?? id;
      if (isAllowlisted({ id: resolvedId, path: entry.path }, allowlist)) {
        continue;
      }
      recorded[resolvedId] = {
        name: entry.name ?? resolvedId,
        props: propNamesOf(entry),
      };
    }
    packages[packageName] = recorded;
  }
  return {
    description: BASELINE_DESCRIPTION,
    allowlist,
    packages,
  };
}

/**
 * @param filePath - Baseline JSON path.
 * @returns Parsed baseline.
 */
export function readBaseline(
  filePath: string = BASELINE_PATH,
): ManifestBaseline {
  const parsed = JSON.parse(
    fs.readFileSync(filePath, 'utf8'),
  ) as ManifestBaseline;
  return parsed;
}

/**
 * @param filePath - components.json path.
 * @returns Parsed manifest.
 */
export function readManifest(filePath: string): ComponentsManifest {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as ComponentsManifest;
}

/**
 * @param baseline - Baseline to write.
 * @param filePath - Destination JSON path.
 */
export function writeBaseline(
  baseline: ManifestBaseline,
  filePath: string = BASELINE_PATH,
): void {
  fs.writeFileSync(filePath, `${JSON.stringify(baseline, null, 2)}\n`);
}
