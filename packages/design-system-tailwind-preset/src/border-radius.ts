/**
 * Numeric aliases for Tailwind's radius scale.
 *
 * No new values are introduced: `rounded-8` and `rounded-lg` are both 8px.
 * The aliases exist because a numeric name states its own value and means the
 * same thing across Tailwind versions, whereas `rounded-sm` is 2px in v3 and
 * 4px in v4.
 *
 * `rounded-none` and `rounded-full` are deliberately absent — Tailwind already
 * spells those well, so they stay as they are.
 */
export const borderRadius = {
  2: 'var(--radius-2)',
  4: 'var(--radius-4)',
  6: 'var(--radius-6)',
  8: 'var(--radius-8)',
  12: 'var(--radius-12)',
  16: 'var(--radius-16)',
  24: 'var(--radius-24)',
};
