/**
 * TODO: Align react native and react types and move to shared types package
 */
/**
 * Text - textAlign
 */
export const TextAlign = {
  Left: 'text-left',
  Center: 'text-center',
  Right: 'text-right',
  Justify: 'text-justify',
} as const;
export type TextAlign = (typeof TextAlign)[keyof typeof TextAlign];

/**
 * Text - overflowWrap
 */
export const OverflowWrap = {
  BreakWord: 'break-words',
  Anywhere: 'break-all',
  Normal: 'break-normal',
} as const;
export type OverflowWrap = (typeof OverflowWrap)[keyof typeof OverflowWrap];

/**
 * Text - textTransform
 */
export const TextTransform = {
  Uppercase: 'uppercase',
  Lowercase: 'lowercase',
  Capitalize: 'capitalize',
  Normal: 'normal-case',
} as const;
export type TextTransform = (typeof TextTransform)[keyof typeof TextTransform];
