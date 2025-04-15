/**
 * AvatarBase - size
 */
export enum AvatarBaseSize {
  /**
   * Represents an extra small avatar size (16px).
   */
  Xs = 'xs',
  /**
   * Represents a small avatar size (24px).
   */
  Sm = 'sm',
  /**
   * Represents a medium avatar size (32px).
   */
  Md = 'md',
  /**
   * Represents a large avatar size (40px).
   */
  Lg = 'lg',
  /**
   * Represents an extra large avatar size (48px).
   */
  Xl = 'xl',
}
export { AvatarBaseSize as AvatarAccountSize };
export { AvatarBaseSize as AvatarFaviconSize };
export { AvatarBaseSize as AvatarGroupSize };
export { AvatarBaseSize as AvatarIconSize };
export { AvatarBaseSize as AvatarNetworkSize };
export { AvatarBaseSize as AvatarTokenSize };
export { AvatarBaseSize as AvatarSize };

/**
 * Avatar - shape
 */
export enum AvatarShape {
  /**
   * Represents a circular Avatar.
   */
  Circle = 'circle',
  /**
   * Represents a squared Avatar
   */
  Square = 'square',
}
export { AvatarShape as AvatarBaseShape };

/**
 * AvatarAccount - variant
 */
export enum AvatarAccountVariant {
  Jazzicon = 'jazzicon',
  Blockies = 'blockies',
}

/**
 * AvatarIcon - severity
 */
export enum AvatarIconSeverity {
  Default = 'default',
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

/**
 * BadgeCount - size
 */
export enum BadgeCountSize {
  /**
   * Represents a medium badge count (14px height).
   */
  Md = 'md',
  /**
   * Represents a large badge count (20px height).
   */
  Lg = 'lg',
}

/**
 * BadgeStatus - status
 */
export enum BadgeStatusStatus {
  Active = 'active',
  PartiallyActive = 'partiallyactive',
  Inactive = 'inactive',
  New = 'new',
  Attention = 'attention',
}
/**
 * BadgeStatus - size
 */
export enum BadgeStatusSize {
  /**
   * Represents a medium badge status size (8px).
   */
  Md = 'md',
  /**
   * Represents a large avatar size (10px).
   */
  Lg = 'lg',
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
 * Text - variant
 */
export enum TextVariant {
  // Display Sizes
  DisplayLg = 'display-lg',
  DisplayMd = 'display-md',

  // Heading Sizes
  HeadingLg = 'heading-lg',
  HeadingMd = 'heading-md',
  HeadingSm = 'heading-sm',

  // Font Sizes
  BodyLg = 'body-lg',
  BodyMd = 'body-md',
  BodySm = 'body-sm',
  BodyXs = 'body-xs',
}

/**
 * Text - color
 */
export enum TextColor {
  /** For default neutral text. */
  TextDefault = 'text-default',
  /** For softer contrast neutral text */
  TextAlternative = 'text-alternative',
  /** For the softest contrast neutral text (not accessible) */
  TextMuted = 'text-muted',
  /** For elements used on top of overlay/alternative. Used for text, icon or border */
  OverlayInverse = 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. Used for text, background, icon or border */
  PrimaryDefault = 'text-primary-default',
  /** For elements used on top of primary/default. Used for text, icon or border */
  PrimaryInverse = 'text-primary-inverse',
  /** For the critical alert semantic elements. Used for text, background, icon or border */
  ErrorDefault = 'text-error-default',
  /** For the stronger contrast error semantic elements. */
  ErrorAlternative = 'text-error-alternative',
  /** For elements used on top of error/default. Used for text, icon or border */
  ErrorInverse = 'text-error-inverse',
  /** For the positive semantic elements. Used for text, background, icon or border */
  SuccessDefault = 'text-success-default',
  /** For elements used on top of success/default. Used for text, icon or border */
  SuccessInverse = 'text-success-inverse',
  /** For the caution alert semantic elements. Used for text, background, icon or border */
  WarningDefault = 'text-warning-default',
  /** For elements used on top of warning/default. Used for text, icon or border */
  WarningInverse = 'text-warning-inverse',
  /** For informational read-only elements. Used for text, background, icon or border */
  InfoDefault = 'text-info-default',
  /** For elements used on top of info/default. Used for text, icon or border */
  InfoInverse = 'text-info-inverse',
  /** Inherit the color of the parent element */
  Inherit = 'text-inherit',
  /** Make the text color transparent */
  Transparent = 'text-transparent',
}

/**
 * Text - textAlign
 */
export enum TextAlign {
  Left = 'text-left',
  Center = 'text-center',
  Right = 'text-right',
  Justify = 'text-justify',
}

/**
 * Text - fontWeight
 */
export enum FontWeight {
  /**
   * Weight - 700
   */
  Bold = 'font-bold',
  /**
   * Weight - 500
   */
  Medium = 'font-medium',
  /**
   * Weight - 400
   */
  Regular = 'font-regular',
}

/**
 * Text - overflowWrap
 */
export enum OverflowWrap {
  BreakWord = 'break-words',
  Anywhere = 'break-all',
  Normal = 'break-normal',
}

/**
 * Text - fontStyle
 */
export enum FontStyle {
  Italic = 'italic',
  Normal = 'not-italic',
}

/**
 * Text - textTransform
 */
export enum TextTransform {
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
  Capitalize = 'capitalize',
  Normal = 'normal-case',
}

/**
 * Text - fontFamily
 */
export enum FontFamily {
  Default = 'font-default',
  Accent = 'font-accent',
  Hero = 'font-hero',
}
