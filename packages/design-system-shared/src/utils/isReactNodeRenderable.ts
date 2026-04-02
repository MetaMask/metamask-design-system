import type { ReactNode } from 'react';

/**
 * Returns whether a React child value should be treated as renderable content for
 * conditional slots (for example `children`, optional `title`).
 *
 * `null`, `undefined`, and booleans are treated as non-renderable so patterns like
 * `{condition && <Component />}` and `{condition && 'Label'}` do not leave a boolean
 * or spurious layout when the condition is false. React does not render `true` or
 * `false` as visible output.
 *
 * @param node - A React child value (for example `children` or an optional slot prop).
 * @returns `true` when the value should be treated as renderable; otherwise `false`.
 */
export function isReactNodeRenderable(node: ReactNode): boolean {
  return node !== null && node !== undefined && typeof node !== 'boolean';
}
