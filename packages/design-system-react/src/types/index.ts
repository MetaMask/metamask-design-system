export {
  AvatarBaseSize,
  AvatarBaseShape,
} from '@metamask/design-system-shared';
/**
 * TODO: Remove the following exports and update imports in components to import directly from `@metamask/design-system-shared` once all components have been migrated to React Native.
 */
export { IconColor, IconName, IconSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarGroupSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarIconSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarNetworkSize } from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarSize } from '@metamask/design-system-shared';

/**
 * AvatarIcon - severity
 */
export enum AvatarIconSeverity {
  Neutral = 'neutral',
  Info = 'info',
  Success = 'success',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Error = 'error',
  Warning = 'warning',
}

/**
 * AvatarGroup - variant
 */
export enum AvatarGroupVariant {
  Account = 'account',
  Favicon = 'favicon',
  Network = 'network',
  Token = 'token',
}

/**
 * ButtonBase - size
 */
export enum ButtonBaseSize {
  /**
   * Represents a small button size (32px).
   */
  Sm = 'sm',
  /**
   * Represents a medium button size (40px).
   */
  Md = 'md',
  /**
   * Represents a large button size (48px).
   */
  Lg = 'lg',
}
export { ButtonBaseSize as ButtonPrimarySize };
export { ButtonBaseSize as ButtonSecondarySize };
export { ButtonBaseSize as ButtonTertiarySize };
export { ButtonBaseSize as ButtonHeroSize };
export { ButtonBaseSize as ButtonSize };

/**
 * Button - variant
 */
export enum ButtonVariant {
  /**
   * Primary button variant - used for primary actions
   */
  Primary = 'primary',
  /**
   * Secondary button variant - used for secondary actions
   */
  Secondary = 'secondary',
  /**
   * Tertiary button variant - used for tertiary-like actions
   */
  Tertiary = 'tertiary',
}

/**
 * ButtonIcon - size
 */
export enum ButtonIconSize {
  /**
   * Represents a small button size (24px).
   */
  Sm = 'sm',
  /**
   * Represents a medium button size (32px).
   */
  Md = 'md',
  /**
   * Represents a large button size (40px).
   */
  Lg = 'lg',
}

/**
 * ButtonIcon - variant
 */
export enum ButtonIconVariant {
  Default = 'default',
  Filled = 'filled',
  Floating = 'floating',
}

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
