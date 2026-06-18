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
