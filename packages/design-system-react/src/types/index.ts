export {
  AvatarBaseSize,
  AvatarBaseShape,
} from '@metamask/design-system-shared';
/**
 * TODO: Remove the following exports and update imports in components to import directly from `@metamask/design-system-shared` once all components have been migrated to React Native.
 */
export { IconColor, IconName, IconSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarNetworkSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarSize } from '@metamask/design-system-shared';

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

/**
 * TextButton - size
 */
export enum TextButtonSize {
  BodyLg = 'body-lg',
  BodyMd = 'body-md',
  BodySm = 'body-sm',
  BodyXs = 'body-xs',
}
