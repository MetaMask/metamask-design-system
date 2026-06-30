export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const deepMerge = <T extends Record<string, unknown>>(
  base: T,
  overrides: DeepPartial<T>,
): T => {
  const result = { ...base };

  for (const key of Object.keys(overrides) as (keyof T)[]) {
    const overrideValue = overrides[key];
    const baseValue = base[key];

    if (overrideValue === undefined) {
      continue;
    }

    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(
        baseValue,
        overrideValue as DeepPartial<Record<string, unknown>>,
      ) as T[keyof T];
      continue;
    }

    result[key] = overrideValue as T[keyof T];
  }

  return result;
};
