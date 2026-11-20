/**
 * Appends optional Tailwind classes to a component-owned base class string.
 *
 * When `extra` is absent or empty, returns `base` without trailing whitespace.
 *
 * @param base - Required component-owned classes (defaults, layout, state styling)
 * @param extra - Optional classes to append (consumer `twClassName`, slot props, or variant styling)
 * @returns The merged class string
 *
 * @example
 * mergeTwClassName('bg-background-muted', twClassName)
 * Returns: 'bg-background-muted rounded-lg' when `twClassName` is `'rounded-lg'`
 *
 * @example
 * mergeTwClassName('px-2', undefined)
 * Returns: 'px-2'
 */
export const mergeTwClassName = (base: string, extra?: string): string =>
  extra ? `${base} ${extra}` : base;

/**
 * Joins component classes with the consumer's classes in a fixed order:
 * base, then the deprecated `twClassName`, then `className`. Later classes
 * win, so `className` overrides both.
 *
 * @param base - Component-owned classes
 * @param twClassName - Deprecated consumer classes
 * @param className - Consumer classes, applied last
 * @returns The merged class string
 */
export function resolveClassName(
  base: string,
  twClassName?: string,
  className?: string,
): string {
  return [base, twClassName, className].filter(Boolean).join(' ');
}
