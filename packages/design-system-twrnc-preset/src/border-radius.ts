import { borderRadius } from '@metamask/design-tokens';

/**
 * Numeric aliases for Tailwind's radius scale, for twrnc.
 *
 * No new values are introduced: `rounded-8` and `rounded-lg` are both 8px.
 * The aliases exist because a numeric name states its own value and means the
 * same thing across Tailwind versions, whereas `rounded-sm` is 2px in v3 and
 * 4px in v4.
 *
 * `rounded-none` and `rounded-full` are deliberately absent — Tailwind already
 * spells those well, so they stay as they are.
 */
export const borderRadiusTailwindConfig = Object.fromEntries(
  Object.entries(borderRadius)
    .filter(([token]) => !Number.isNaN(Number(token)))
    .map(([token, value]) => [token, `${value}px`]),
);
