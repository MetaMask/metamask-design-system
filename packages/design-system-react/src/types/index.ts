export {
  AvatarBaseSize,
  AvatarBaseShape,
} from '@metamask/design-system-shared';
export { AvatarBaseSize as AvatarFaviconSize } from '@metamask/design-system-shared';
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
 * Box - all spacing-related props
 */
export type BoxSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Box - border width values (only valid Tailwind CSS border width utilities)
 */
export type BoxBorderWidth = 0 | 1 | 2 | 4 | 8;

/**
 * Box - flexDirection
 */
export enum BoxFlexDirection {
  Row = 'flex-row',
  RowReverse = 'flex-row-reverse',
  Column = 'flex-col',
  ColumnReverse = 'flex-col-reverse',
}

/**
 * Box - flexWrap
 */
export enum BoxFlexWrap {
  NoWrap = 'flex-nowrap',
  Wrap = 'flex-wrap',
  WrapReverse = 'flex-wrap-reverse',
}

/**
 * Box - alignItems
 */
export enum BoxAlignItems {
  Start = 'items-start',
  Center = 'items-center',
  End = 'items-end',
  Stretch = 'items-stretch',
  Baseline = 'items-baseline',
}

/**
 * Box - justifyContent
 */
export enum BoxJustifyContent {
  Start = 'justify-start',
  Center = 'justify-center',
  End = 'justify-end',
  Between = 'justify-between',
  Around = 'justify-around',
  Evenly = 'justify-evenly',
}

/**
 * Box - backgroundColor
 */
export enum BoxBackgroundColor {
  /** Default background color */
  BackgroundDefault = 'bg-default',
  /** Alternative background color */
  BackgroundAlternative = 'bg-alternative',
  /** Section background color */
  BackgroundSection = 'bg-section',
  /** Subsection background color */
  BackgroundSubsection = 'bg-subsection',
  /** Muted background color */
  BackgroundMuted = 'bg-muted',
  /** Primary default background color */
  PrimaryDefault = 'bg-primary-default',
  /** Primary alternative background color */
  PrimaryAlternative = 'bg-primary-alternative',
  /** Primary muted background color */
  PrimaryMuted = 'bg-primary-muted',
  /** Primary inverse background color */
  PrimaryInverse = 'bg-primary-inverse',
  /** Error default background color */
  ErrorDefault = 'bg-error-default',
  /** Error alternative background color */
  ErrorAlternative = 'bg-error-alternative',
  /** Error muted background color */
  ErrorMuted = 'bg-error-muted',
  /** Error inverse background color */
  ErrorInverse = 'bg-error-inverse',
  /** Warning default background color */
  WarningDefault = 'bg-warning-default',
  /** Warning alternative background color */
  WarningAlternative = 'bg-warning-alternative',
  /** Warning muted background color */
  WarningMuted = 'bg-warning-muted',
  /** Warning inverse background color */
  WarningInverse = 'bg-warning-inverse',
  /** Success default background color */
  SuccessDefault = 'bg-success-default',
  /** Success alternative background color */
  SuccessAlternative = 'bg-success-alternative',
  /** Success muted background color */
  SuccessMuted = 'bg-success-muted',
  /** Success inverse background color */
  SuccessInverse = 'bg-success-inverse',
  /** Info default background color */
  InfoDefault = 'bg-info-default',
  /** Info muted background color */
  InfoMuted = 'bg-info-muted',
  /** Info inverse background color */
  InfoInverse = 'bg-info-inverse',
  /** Flask default background color */
  FlaskDefault = 'bg-flask-default',
  /** Flask inverse background color */
  FlaskInverse = 'bg-flask-inverse',
  /** Overlay alternative background color */
  OverlayAlternative = 'bg-overlay-alternative',
  /** Overlay default background color */
  OverlayDefault = 'bg-overlay-default',
  /** Overlay inverse background color */
  OverlayInverse = 'bg-overlay-inverse',
  /** Transparent background color */
  Transparent = 'bg-transparent',
}

/**
 * Box - borderColor
 */
export enum BoxBorderColor {
  /** Background default for cut out effect */
  BackgroundDefault = 'border-background-default',
  /** Default border color */
  BorderDefault = 'border-default',
  /** Muted border color */
  BorderMuted = 'border-muted',
  /** Primary default border color */
  PrimaryDefault = 'border-primary-default',
  /** Primary alternative border color */
  PrimaryAlternative = 'border-primary-alternative',
  /** Primary muted border color */
  PrimaryMuted = 'border-primary-muted',
  /** Primary inverse border color */
  PrimaryInverse = 'border-primary-inverse',
  /** Error default border color */
  ErrorDefault = 'border-error-default',
  /** Error alternative border color */
  ErrorAlternative = 'border-error-alternative',
  /** Error muted border color */
  ErrorMuted = 'border-error-muted',
  /** Error inverse border color */
  ErrorInverse = 'border-error-inverse',
  /** Warning default border color */
  WarningDefault = 'border-warning-default',
  /** Warning alternative border color */
  WarningAlternative = 'border-warning-alternative',
  /** Warning muted border color */
  WarningMuted = 'border-warning-muted',
  /** Warning inverse border color */
  WarningInverse = 'border-warning-inverse',
  /** Success default border color */
  SuccessDefault = 'border-success-default',
  /** Success alternative border color */
  SuccessAlternative = 'border-success-alternative',
  /** Success muted border color */
  SuccessMuted = 'border-success-muted',
  /** Success inverse border color */
  SuccessInverse = 'border-success-inverse',
  /** Info default border color */
  InfoDefault = 'border-info-default',
  /** Info alternative border color */
  InfoAlternative = 'border-info-alternative',
  /** Info muted border color */
  InfoMuted = 'border-info-muted',
  /** Info inverse border color */
  InfoInverse = 'border-info-inverse',
  /** Flask default border color */
  FlaskDefault = 'border-flask-default',
  /** Flask inverse border color */
  FlaskInverse = 'border-flask-inverse',
  /** Overlay alternative border color */
  OverlayAlternative = 'border-overlay-alternative',
  /** Overlay default border color */
  OverlayDefault = 'border-overlay-default',
  /** Overlay inverse border color */
  OverlayInverse = 'border-overlay-inverse',
  /** Transparent border color */
  Transparent = 'border-transparent',
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

export { IconColor, IconName, IconSize } from '@metamask/design-system-shared';
