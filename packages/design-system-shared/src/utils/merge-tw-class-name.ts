/**
 * Appends optional consumer Tailwind classes to a base class string.
 *
 * When `extra` is absent or empty, returns `base` without trailing whitespace.
 *
 * @param base - The default Tailwind class string
 * @param extra - Optional consumer-provided classes to append
 * @returns The merged class string
 *
 * @example
 * mergeTwClassName('bg-background-muted', 'rounded-lg')
 * Returns: 'bg-background-muted rounded-lg'
 *
 * @example
 * mergeTwClassName('px-2', undefined)
 * Returns: 'px-2'
 */
export const mergeTwClassName = (base: string, extra?: string): string =>
  extra ? `${base} ${extra}` : base;
