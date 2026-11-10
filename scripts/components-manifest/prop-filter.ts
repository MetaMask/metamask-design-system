/**
 * Prop names that must survive filtering even when their declaration lives in
 * React, React Native, or another dependency (`className` on HTMLAttributes,
 * `style` / `children` on host components, `testID` on React Native).
 */
const PRESERVED_PROP_NAMES = new Set([
  'className',
  'style',
  'children',
  'testID',
]);

/**
 * Source files that define this design system's own props, including types
 * imported from `@metamask/design-system-shared`. Workspace packages resolve
 * either to `packages/...` or through `node_modules/@metamask/...`.
 */
const DESIGN_SYSTEM_FILE =
  /(?:@metamask\/design-system-(?:react|react-native|shared)|packages\/design-system-(?:react|react-native|shared))\//u;

type PropOrigin = {
  fileName?: string;
};

export type FilterableProp = {
  name: string;
  parent?: PropOrigin;
  declarations?: PropOrigin[];
};

/**
 * Keep design-system and shared props, plus className, style, children, and
 * testID. Drop other inherited HTML and React Native host props.
 *
 * A filter that rejects every `node_modules` parent also drops those four
 * names, and drops shared props when TypeScript resolves the workspace
 * package through `node_modules`.
 *
 * @param prop - Prop extracted by react-docgen-typescript.
 * @returns Whether the prop belongs in the manifest.
 */
export function includeDesignSystemProp(prop: FilterableProp): boolean {
  if (PRESERVED_PROP_NAMES.has(prop.name)) {
    return true;
  }

  const files = [
    prop.parent?.fileName,
    ...(prop.declarations ?? []).map((declaration) => declaration.fileName),
  ].filter((fileName): fileName is string => Boolean(fileName));

  if (files.length === 0) {
    return true;
  }

  const normalized = files.map((fileName) => fileName.replaceAll('\\', '/'));
  if (normalized.some((fileName) => DESIGN_SYSTEM_FILE.test(fileName))) {
    return true;
  }

  return !normalized.every((fileName) => fileName.includes('node_modules'));
}
