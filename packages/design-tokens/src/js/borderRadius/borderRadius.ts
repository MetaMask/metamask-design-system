/**
 * Corner radius tokens in pixels.
 *
 * These are the values Tailwind already ships — MetaMask adds no new steps.
 * What it adds is a naming convention: each step is named after its value, so
 * `rounded-8` is 8px. That matters because Tailwind's own names are not stable
 * across versions (`rounded-sm` is 2px in v3 and 4px in v4), while a numeric
 * name means the same thing everywhere.
 *
 * `none` and `full` keep Tailwind's names, because those say something the
 * numbers cannot and are already the established spelling.
 */
export const borderRadius = {
  none: 0,
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  12: 12,
  16: 16,
  24: 24,
  full: 9999,
} as const;

export type BorderRadiusToken = keyof typeof borderRadius;
