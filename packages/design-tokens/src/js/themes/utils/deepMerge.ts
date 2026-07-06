/**
 * Recursively makes all properties of T optional, including nested objects.
 * Used to type theme override objects that only specify a subset of tokens.
 *
 * @example
 * type Full = { background: { default: string; muted: string } };
 * type Partial = DeepPartial<Full>;
 * { background?: { default?: string; muted?: string } }
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Returns true only for plain `{}` objects — not arrays, null, class instances,
 * or primitives. Used to decide whether to recurse rather than overwrite.
 *
 * @param value - The value to check.
 * @returns True if the value is a plain object.
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Recursively merges `overrides` into `base`, returning a new object.
 * Neither `base` nor `overrides` is mutated.
 *
 * Rules:
 * - Keys present only in `base` are kept as-is.
 * - Keys in `overrides` with value `undefined` are skipped (base value is kept).
 * - When both the base and override values are plain objects, the function
 *   recurses so only the specified leaf tokens are replaced.
 * - For all other value types (strings, numbers, arrays), the override
 *   replaces the base value outright.
 *
 * @param base - The complete base object (e.g. darkTheme.colors).
 * @param overrides - A partial object containing only the values to override.
 * @returns A new object with overrides deeply merged into base.
 *
 * @example
 * const theme = deepMerge(darkTheme.colors, { background: { default: '#000' } });
 * Returns a new ThemeColors where only background.default is overridden.
 *
 * @remarks
 * Designed for shallow theme override objects like pureBlackDarkTheme and any
 * future theme variants. The theme color tree is two levels deep with string
 * leaf values, so this implementation covers all real cases without extra
 * dependencies. If requirements grow to need array merging, prototype-safe
 * handling, or lodash is already a runtime dependency of this package,
 * replace this with _.merge from lodash instead.
 */
export const deepMerge = <T extends Record<string, unknown>>(
  base: T,
  overrides: DeepPartial<T>,
): T => {
  // Shallow-clone base so the original is never mutated
  const result = { ...base };

  for (const key of Object.keys(overrides) as (keyof T)[]) {
    const overrideValue = overrides[key];
    const baseValue = base[key];

    // DeepPartial makes every key optional; skip absent keys so base wins
    if (overrideValue === undefined) {
      continue;
    }

    // Both sides are nested objects — recurse instead of overwriting the
    // whole subtree, so sibling keys in base are preserved
    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(
        baseValue,
        overrideValue as DeepPartial<Record<string, unknown>>,
      ) as T[keyof T];
      continue;
    }

    // Leaf value (string, number, etc.) — override replaces base outright
    result[key] = overrideValue as T[keyof T];
  }

  return result;
};
