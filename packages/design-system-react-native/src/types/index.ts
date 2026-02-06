/**
 * AvatarBase - size
 */
export type AvatarBaseSize = '16' | '24' | '32' | '40' | '48';
export const AvatarBaseSize = {
  /**
   * Represents an extra small avatar size (16px).
   */
  Xs: '16',
  /**
   * Represents a small avatar size (24px).
   */
  Sm: '24',
  /**
   * Represents a medium avatar size (32px).
   */
  Md: '32',
  /**
   * Represents a large avatar size (40px).
   */
  Lg: '40',
  /**
   * Represents an extra large avatar size (48px).
   */
  Xl: '48',
} as const;
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
export type AvatarShape = 'circle' | 'square';
export const AvatarShape = {
  /**
   * Represents a circular Avatar.
   */
  Circle: 'circle',
  /**
   * Represents a squared Avatar
   */
  Square: 'square',
} as const;
export { AvatarShape as AvatarBaseShape };

/**
 * AvatarAccount - variant
 */
export type AvatarAccountVariant = 'blockies' | 'jazzicon' | 'maskicon';
export const AvatarAccountVariant = {
  Blockies: 'blockies',
  Jazzicon: 'jazzicon',
  Maskicon: 'maskicon',
} as const;

/**
 * AvatarGroup - variant
 */
export type AvatarGroupVariant = 'Account' | 'Favicon' | 'Network' | 'Token';
export const AvatarGroupVariant = {
  Account: 'Account',
  Favicon: 'Favicon',
  Network: 'Network',
  Token: 'Token',
} as const;

/**
 * AvatarIcon - severity
 */
export type AvatarIconSeverity =
  | 'neutral'
  | 'info'
  | 'success'
  | 'error'
  | 'warning';
export const AvatarIconSeverity = {
  Neutral: 'neutral',
  Info: 'info',
  Success: 'success',

  Error: 'error',
  Warning: 'warning',
} as const;

/**
 * BadgeCount - size
 */
export type BadgeCountSize = 'Md' | 'Lg';
export const BadgeCountSize = {
  /**
   * Represents a medium badge count (14px height).
   */
  Md: 'Md',
  /**
   * Represents a large badge count (20px height).
   */
  Lg: 'Lg',
} as const;

/**
 * BadgeStatus - status
 */
export type BadgeStatusStatus =
  | 'active'
  | 'inactive'
  | 'disconnected'
  | 'new'
  | 'attention';
export const BadgeStatusStatus = {
  Active: 'active', // Connected
  Inactive: 'inactive', // Connected
  Disconnected: 'disconnected',
  New: 'new',
  Attention: 'attention',
} as const;
/**
 * BadgeStatus - size
 */
export type BadgeStatusSize = 'Md' | 'Lg';
export const BadgeStatusSize = {
  /**
   * Represents a medium badge status size (8px).
   */
  Md: 'Md',
  /**
   * Represents a large avatar size (10px).
   */
  Lg: 'Lg',
} as const;

/**
 * BadgeWrapper - positionAnchorShape
 */
export type BadgeWrapperPositionAnchorShape = 'Rectangular' | 'Circular';
export const BadgeWrapperPositionAnchorShape = {
  Rectangular: 'Rectangular',
  Circular: 'Circular',
} as const;

/**
 * BadgeWrapper - position.
 */
export type BadgeWrapperPosition =
  | 'TopRight'
  | 'BottomRight'
  | 'BottomLeft'
  | 'TopLeft';
export const BadgeWrapperPosition = {
  TopRight: 'TopRight',
  BottomRight: 'BottomRight',
  BottomLeft: 'BottomLeft',
  TopLeft: 'TopLeft',
} as const;

/**
 * BadgeWrapper - customPosition
 */
export type BadgeWrapperCustomPosition = {
  top?: number | string | undefined;
  right?: number | string | undefined;
  bottom?: number | string | undefined;
  left?: number | string | undefined;
};

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
export type BoxFlexDirection =
  | 'flex-row'
  | 'flex-row-reverse'
  | 'flex-col'
  | 'flex-col-reverse';
export const BoxFlexDirection = {
  Row: 'flex-row',
  RowReverse: 'flex-row-reverse',
  Column: 'flex-col',
  ColumnReverse: 'flex-col-reverse',
} as const;

/**
 * Box - flexWrap
 */
export type BoxFlexWrap = 'flex-nowrap' | 'flex-wrap' | 'flex-wrap-reverse';
export const BoxFlexWrap = {
  NoWrap: 'flex-nowrap',
  Wrap: 'flex-wrap',
  WrapReverse: 'flex-wrap-reverse',
} as const;

/**
 * Box - alignItems
 */
export type BoxAlignItems =
  | 'items-start'
  | 'items-center'
  | 'items-end'
  | 'items-stretch'
  | 'items-baseline';
export const BoxAlignItems = {
  Start: 'items-start',
  Center: 'items-center',
  End: 'items-end',
  Stretch: 'items-stretch',
  Baseline: 'items-baseline',
} as const;

/**
 * Box - justifyContent
 */
export type BoxJustifyContent =
  | 'justify-start'
  | 'justify-center'
  | 'justify-end'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly';
export const BoxJustifyContent = {
  Start: 'justify-start',
  Center: 'justify-center',
  End: 'justify-end',
  Between: 'justify-between',
  Around: 'justify-around',
  Evenly: 'justify-evenly',
} as const;

/**
 * Box - backgroundColor
 */
export type BoxBackgroundColor =
  | 'bg-default'
  | 'bg-alternative'
  | 'bg-section'
  | 'bg-subsection'
  | 'bg-muted'
  | 'bg-primary-default'
  | 'bg-primary-alternative'
  | 'bg-primary-muted'
  | 'bg-primary-inverse'
  | 'bg-error-default'
  | 'bg-error-alternative'
  | 'bg-error-muted'
  | 'bg-error-inverse'
  | 'bg-warning-default'
  | 'bg-warning-alternative'
  | 'bg-warning-muted'
  | 'bg-warning-inverse'
  | 'bg-success-default'
  | 'bg-success-alternative'
  | 'bg-success-muted'
  | 'bg-success-inverse'
  | 'bg-info-default'
  | 'bg-info-muted'
  | 'bg-info-inverse'
  | 'bg-flask-default'
  | 'bg-flask-inverse'
  | 'bg-overlay-alternative'
  | 'bg-overlay-default'
  | 'bg-overlay-inverse'
  | 'bg-transparent';
export const BoxBackgroundColor = {
  /** Default background color */
  BackgroundDefault: 'bg-default',
  /** Alternative background color */
  BackgroundAlternative: 'bg-alternative',
  /** Section background color */
  BackgroundSection: 'bg-section',
  /** Subsection background color */
  BackgroundSubsection: 'bg-subsection',
  /** Muted background color */
  BackgroundMuted: 'bg-muted',
  /** Primary default background color */
  PrimaryDefault: 'bg-primary-default',
  /** Primary alternative background color */
  PrimaryAlternative: 'bg-primary-alternative',
  /** Primary muted background color */
  PrimaryMuted: 'bg-primary-muted',
  /** Primary inverse background color */
  PrimaryInverse: 'bg-primary-inverse',
  /** Error default background color */
  ErrorDefault: 'bg-error-default',
  /** Error alternative background color */
  ErrorAlternative: 'bg-error-alternative',
  /** Error muted background color */
  ErrorMuted: 'bg-error-muted',
  /** Error inverse background color */
  ErrorInverse: 'bg-error-inverse',
  /** Warning default background color */
  WarningDefault: 'bg-warning-default',
  /** Warning alternative background color */
  WarningAlternative: 'bg-warning-alternative',
  /** Warning muted background color */
  WarningMuted: 'bg-warning-muted',
  /** Warning inverse background color */
  WarningInverse: 'bg-warning-inverse',
  /** Success default background color */
  SuccessDefault: 'bg-success-default',
  /** Success alternative background color */
  SuccessAlternative: 'bg-success-alternative',
  /** Success muted background color */
  SuccessMuted: 'bg-success-muted',
  /** Success inverse background color */
  SuccessInverse: 'bg-success-inverse',
  /** Info default background color */
  InfoDefault: 'bg-info-default',
  /** Info muted background color */
  InfoMuted: 'bg-info-muted',
  /** Info inverse background color */
  InfoInverse: 'bg-info-inverse',
  /** Flask default background color */
  FlaskDefault: 'bg-flask-default',
  /** Flask inverse background color */
  FlaskInverse: 'bg-flask-inverse',
  /** Overlay alternative background color */
  OverlayAlternative: 'bg-overlay-alternative',
  /** Overlay default background color */
  OverlayDefault: 'bg-overlay-default',
  /** Overlay inverse background color */
  OverlayInverse: 'bg-overlay-inverse',
  /** Transparent background color */
  Transparent: 'bg-transparent',
} as const;

/**
 * Box - borderColor
 */
export type BoxBorderColor =
  | 'border-background-default'
  | 'border-default'
  | 'border-muted'
  | 'border-primary-default'
  | 'border-primary-alternative'
  | 'border-primary-muted'
  | 'border-primary-inverse'
  | 'border-error-default'
  | 'border-error-alternative'
  | 'border-error-muted'
  | 'border-error-inverse'
  | 'border-warning-default'
  | 'border-warning-alternative'
  | 'border-warning-muted'
  | 'border-warning-inverse'
  | 'border-success-default'
  | 'border-success-alternative'
  | 'border-success-muted'
  | 'border-success-inverse'
  | 'border-info-default'
  | 'border-info-alternative'
  | 'border-info-muted'
  | 'border-info-inverse'
  | 'border-flask-default'
  | 'border-flask-inverse'
  | 'border-overlay-alternative'
  | 'border-overlay-default'
  | 'border-overlay-inverse'
  | 'border-transparent';
export const BoxBorderColor = {
  /** Background default for cut out effect*/
  BackgroundDefault: 'border-background-default',
  /** Default border color */
  BorderDefault: 'border-default',
  /** Muted border color */
  BorderMuted: 'border-muted',
  /** Primary default border color */
  PrimaryDefault: 'border-primary-default',
  /** Primary alternative border color */
  PrimaryAlternative: 'border-primary-alternative',
  /** Primary muted border color */
  PrimaryMuted: 'border-primary-muted',
  /** Primary inverse border color */
  PrimaryInverse: 'border-primary-inverse',
  /** Error default border color */
  ErrorDefault: 'border-error-default',
  /** Error alternative border color */
  ErrorAlternative: 'border-error-alternative',
  /** Error muted border color */
  ErrorMuted: 'border-error-muted',
  /** Error inverse border color */
  ErrorInverse: 'border-error-inverse',
  /** Warning default border color */
  WarningDefault: 'border-warning-default',
  /** Warning alternative border color */
  WarningAlternative: 'border-warning-alternative',
  /** Warning muted border color */
  WarningMuted: 'border-warning-muted',
  /** Warning inverse border color */
  WarningInverse: 'border-warning-inverse',
  /** Success default border color */
  SuccessDefault: 'border-success-default',
  /** Success alternative border color */
  SuccessAlternative: 'border-success-alternative',
  /** Success muted border color */
  SuccessMuted: 'border-success-muted',
  /** Success inverse border color */
  SuccessInverse: 'border-success-inverse',
  /** Info default border color */
  InfoDefault: 'border-info-default',
  /** Info alternative border color */
  InfoAlternative: 'border-info-alternative',
  /** Info muted border color */
  InfoMuted: 'border-info-muted',
  /** Info inverse border color */
  InfoInverse: 'border-info-inverse',
  /** Flask default border color */
  FlaskDefault: 'border-flask-default',
  /** Flask inverse border color */
  FlaskInverse: 'border-flask-inverse',
  /** Overlay alternative border color */
  OverlayAlternative: 'border-overlay-alternative',
  /** Overlay default border color */
  OverlayDefault: 'border-overlay-default',
  /** Overlay inverse border color */
  OverlayInverse: 'border-overlay-inverse',
  /** Transparent border color */
  Transparent: 'border-transparent',
} as const;

/**
 * ButtonBase - size
 */
export type ButtonBaseSize = 'sm' | 'md' | 'lg';
export const ButtonBaseSize = {
  /**
   * Represents a small button size (32px).
   */
  Sm: 'sm',
  /**
   * Represents a medium button size (40px).
   */
  Md: 'md',
  /**
   * Represents a large button size (48px).
   */
  Lg: 'lg',
} as const;
export { ButtonBaseSize as ButtonSize };
export { ButtonBaseSize as ButtonPrimarySize };
export { ButtonBaseSize as ButtonSecondarySize };
export { ButtonBaseSize as ButtonTertiarySize };

/**
 * Button - variant
 */
export type ButtonVariant = 'Primary' | 'Secondary' | 'Tertiary';
export const ButtonVariant = {
  Primary: 'Primary',
  Secondary: 'Secondary',
  Tertiary: 'Tertiary',
} as const;

/**
 * ButtonIcon - size
 */
export type ButtonIconSize = 'sm' | 'md' | 'lg';
export const ButtonIconSize = {
  /**
   * Represents a small button size (24px).
   */
  Sm: 'sm',
  /**
   * Represents a medium button size (32px).
   */
  Md: 'md',
  /**
   * Represents a large button size (40px).
   */
  Lg: 'lg',
} as const;

/**
 * Text - variant
 */
export type TextVariant =
  | 'display-lg'
  | 'display-md'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs'
  | 'page-heading'
  | 'section-heading'
  | 'button-label-md'
  | 'button-label-lg'
  | 'amount-display-lg';
export const TextVariant = {
  // Display Sizes
  DisplayLg: 'display-lg',
  DisplayMd: 'display-md',

  // Heading Sizes
  HeadingLg: 'heading-lg',
  HeadingMd: 'heading-md',
  HeadingSm: 'heading-sm',

  // Body Sizes
  BodyLg: 'body-lg',
  BodyMd: 'body-md',
  BodySm: 'body-sm',
  BodyXs: 'body-xs',

  // Special Typography Variants
  PageHeading: 'page-heading',
  SectionHeading: 'section-heading',
  ButtonLabelMd: 'button-label-md',
  ButtonLabelLg: 'button-label-lg',
  AmountDisplayLg: 'amount-display-lg',
} as const;

/**
 * Text - color
 */
export type TextColor =
  | 'text-default'
  | 'text-alternative'
  | 'text-muted'
  | 'text-overlay-inverse'
  | 'text-primary-default'
  | 'text-primary-alternative'
  | 'text-primary-inverse'
  | 'text-primary-default-pressed'
  | 'text-error-default'
  | 'text-error-alternative'
  | 'text-error-inverse'
  | 'text-error-default-pressed'
  | 'text-warning-default'
  | 'text-warning-inverse'
  | 'text-warning-default-pressed'
  | 'text-success-default'
  | 'text-success-inverse'
  | 'text-success-default-pressed'
  | 'text-info-default'
  | 'text-info-inverse'
  | 'text-transparent';
export const TextColor = {
  /** For default neutral text. */
  TextDefault: 'text-default',
  /** For softer contrast neutral text */
  TextAlternative: 'text-alternative',
  /** For the softest contrast neutral text (not accessible) */
  TextMuted: 'text-muted',
  /** For elements used on top of overlay/alternative. */
  OverlayInverse: 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. */
  PrimaryDefault: 'text-primary-default',
  /** For softer variants of primary text. */
  PrimaryAlternative: 'text-primary-alternative',
  /** For elements used on top of primary/default. */
  PrimaryInverse: 'text-primary-inverse',
  /** For primary text in a pressed state. */
  PrimaryDefaultPressed: 'text-primary-default-pressed',
  /** For critical alert text. */
  ErrorDefault: 'text-error-default',
  /** For stronger contrast error text. */
  ErrorAlternative: 'text-error-alternative',
  /** For elements used on top of error/default. */
  ErrorInverse: 'text-error-inverse',
  /** For critical alert text in a pressed state. */
  ErrorDefaultPressed: 'text-error-default-pressed',
  /** For caution alert text. */
  WarningDefault: 'text-warning-default',
  /** For elements used on top of warning/default. */
  WarningInverse: 'text-warning-inverse',
  /** For caution text in a pressed state. */
  WarningDefaultPressed: 'text-warning-default-pressed',
  /** For positive semantic text. */
  SuccessDefault: 'text-success-default',
  /** For elements used on top of success/default. */
  SuccessInverse: 'text-success-inverse',
  /** For positive text in a pressed state. */
  SuccessDefaultPressed: 'text-success-default-pressed',
  /** For informational read-only text. */
  InfoDefault: 'text-info-default',
  /** For elements used on top of info/default. */
  InfoInverse: 'text-info-inverse',
  /** Make the text color transparent. */
  Transparent: 'text-transparent',
} as const;

/**
 * Text - fontWeight
 */
export type FontWeight = '700' | '500' | '400';
export const FontWeight = {
  /**
   * Weight - 700
   */
  Bold: '700',
  /**
   * Weight - 500
   */
  Medium: '500',
  /**
   * Weight - 400
   */
  Regular: '400',
} as const;

/**
 * Text - fontStyle
 */
export type FontStyle = 'italic' | 'normal';
export const FontStyle = {
  Italic: 'italic',
  Normal: 'normal',
} as const;

/**
 * Text - fontFamily
 */
export type FontFamily = 'default' | 'accent' | 'hero';
export const FontFamily = {
  Default: 'default',
  Accent: 'accent',
  Hero: 'hero',
} as const;

/**
 * TextButton - Size
 */
export type TextButtonSize = 'body-lg' | 'body-md' | 'body-sm' | 'body-xs';
export const TextButtonSize = {
  BodyLg: 'body-lg',
  BodyMd: 'body-md',
  BodySm: 'body-sm',
  BodyXs: 'body-xs',
} as const;

/**
 * Icon - color
 */
export type IconColor =
  | 'text-icon-default'
  | 'text-icon-alternative'
  | 'text-icon-muted'
  | 'text-overlay-inverse'
  | 'text-primary-default'
  | 'text-primary-alternative'
  | 'text-primary-inverse'
  | 'text-primary-default-pressed'
  | 'text-error-default'
  | 'text-error-alternative'
  | 'text-error-inverse'
  | 'text-error-default-pressed'
  | 'text-warning-default'
  | 'text-warning-inverse'
  | 'text-warning-default-pressed'
  | 'text-success-default'
  | 'text-success-inverse'
  | 'text-success-default-pressed'
  | 'text-info-default'
  | 'text-info-inverse';
export const IconColor = {
  /** For default neutral icons */
  IconDefault: 'text-icon-default',
  /** For softer neutral icons */
  IconAlternative: 'text-icon-alternative',
  /** For the weakest contrast neutral icons (not accessible) */
  IconMuted: 'text-icon-muted',
  /** For elements used on top of overlay/alternative. Used for text, icon, or border */
  OverlayInverse: 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. Used for text, background, icon, or border */
  PrimaryDefault: 'text-primary-default',
  /** For softer variants of primary interactive elements */
  PrimaryAlternative: 'text-primary-alternative',
  /** For elements used on top of primary/default. Used for text, icon, or border */
  PrimaryInverse: 'text-primary-inverse',
  /** For primary interactive elements in a pressed state */
  PrimaryDefaultPressed: 'text-primary-default-pressed',
  /** For critical alert semantic elements. Used for text, background, icon, or border */
  ErrorDefault: 'text-error-default',
  /** For softer variants of error elements */
  ErrorAlternative: 'text-error-alternative',
  /** For elements used on top of error/default. Used for text, icon, or border */
  ErrorInverse: 'text-error-inverse',
  /** For critical alert semantic elements in a pressed state */
  ErrorDefaultPressed: 'text-error-default-pressed',
  /** For caution alert semantic elements. Used for text, background, icon, or border */
  WarningDefault: 'text-warning-default',
  /** For elements used on top of warning/default. Used for text, icon, or border */
  WarningInverse: 'text-warning-inverse',
  /** For caution alert semantic elements in a pressed state */
  WarningDefaultPressed: 'text-warning-default-pressed',
  /** For positive semantic elements. Used for text, background, icon, or border */
  SuccessDefault: 'text-success-default',
  /** For elements used on top of success/default. Used for text, icon, or border */
  SuccessInverse: 'text-success-inverse',
  /** For positive semantic elements in a pressed state */
  SuccessDefaultPressed: 'text-success-default-pressed',
  /** For informational read-only elements. Used for text, background, icon, or border */
  InfoDefault: 'text-info-default',
  /** For elements used on top of info/default. Used for text, icon, or border */
  InfoInverse: 'text-info-inverse',
} as const;

/**
 * Icon - size
 */
export type IconSize = '12' | '16' | '20' | '24' | '32';
export const IconSize = {
  /** Extra small - 12px */
  Xs: '12',
  /** Small - 16px */
  Sm: '16',
  /** Medium - 20px (Default) */
  Md: '20',
  /** Large - 24px */
  Lg: '24',
  /** Extra large - 32px */
  Xl: '32',
} as const;

// /////////////////////////////////////////////////////
// This is generated code - Manually add types above
// DO NOT EDIT - Use generate-assets.js
// /////////////////////////////////////////////////////

/**
 * Icon - name
 */
/* eslint-disable @typescript-eslint/no-shadow */
export enum IconName {
  Accessibility = 'Accessibility',
  Activity = 'Activity',
  AddCard = 'AddCard',
  AddCircle = 'AddCircle',
  AddSquare = 'AddSquare',
  Add = 'Add',
  AfterHours = 'AfterHours',
  Ai = 'Ai',
  AlternateEmail = 'AlternateEmail',
  AppleLogo = 'AppleLogo',
  Apps = 'Apps',
  Arrow2Down = 'Arrow2Down',
  Arrow2Left = 'Arrow2Left',
  Arrow2Right = 'Arrow2Right',
  Arrow2UpRight = 'Arrow2UpRight',
  Arrow2Up = 'Arrow2Up',
  ArrowCircleDown = 'ArrowCircleDown',
  ArrowCircleUp = 'ArrowCircleUp',
  ArrowDoubleLeft = 'ArrowDoubleLeft',
  ArrowDoubleRight = 'ArrowDoubleRight',
  ArrowDown = 'ArrowDown',
  ArrowDropDownCircle = 'ArrowDropDownCircle',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  AttachMoney = 'AttachMoney',
  Attachment = 'Attachment',
  Backspace = 'Backspace',
  Ban = 'Ban',
  BankAssured = 'BankAssured',
  Bank = 'Bank',
  Bold = 'Bold',
  Book = 'Book',
  Bookmark = 'Bookmark',
  Bridge = 'Bridge',
  Briefcase = 'Briefcase',
  Bulb = 'Bulb',
  BuySell = 'BuySell',
  Cake = 'Cake',
  Calculator = 'Calculator',
  Calendar = 'Calendar',
  Call = 'Call',
  Camera = 'Camera',
  Campaign = 'Campaign',
  Candlestick = 'Candlestick',
  CardPos = 'CardPos',
  Card = 'Card',
  Cash = 'Cash',
  Category = 'Category',
  Chart = 'Chart',
  CheckBold = 'CheckBold',
  Check = 'Check',
  CircleX = 'CircleX',
  Clear = 'Clear',
  ClockFilled = 'ClockFilled',
  Clock = 'Clock',
  Close = 'Close',
  CloudDownload = 'CloudDownload',
  CloudUpload = 'CloudUpload',
  Cloud = 'Cloud',
  CodeCircle = 'CodeCircle',
  Code = 'Code',
  Coin = 'Coin',
  Collapse = 'Collapse',
  Confirmation = 'Confirmation',
  Connect = 'Connect',
  CopySuccess = 'CopySuccess',
  Copy = 'Copy',
  CreditCheck = 'CreditCheck',
  CurrencyFranc = 'CurrencyFranc',
  CurrencyLira = 'CurrencyLira',
  CurrencyPound = 'CurrencyPound',
  CurrencyYuan = 'CurrencyYuan',
  Customize = 'Customize',
  Danger = 'Danger',
  DarkFilled = 'DarkFilled',
  Dark = 'Dark',
  Data = 'Data',
  Description = 'Description',
  Details = 'Details',
  Diagram = 'Diagram',
  DocumentCode = 'DocumentCode',
  Download = 'Download',
  Draft = 'Draft',
  EcoLeaf = 'EcoLeaf',
  EditSquare = 'EditSquare',
  Edit = 'Edit',
  EncryptedAdd = 'EncryptedAdd',
  Eraser = 'Eraser',
  Error = 'Error',
  Ethereum = 'Ethereum',
  Exchange = 'Exchange',
  ExpandVertical = 'ExpandVertical',
  Expand = 'Expand',
  ExploreFilled = 'ExploreFilled',
  Explore = 'Explore',
  Export = 'Export',
  Extension = 'Extension',
  EyeSlash = 'EyeSlash',
  Eye = 'Eye',
  FaceId = 'FaceId',
  Feedback = 'Feedback',
  File = 'File',
  Filter = 'Filter',
  Fingerprint = 'Fingerprint',
  Fire = 'Fire',
  FirstPage = 'FirstPage',
  Flag = 'Flag',
  FlashSlash = 'FlashSlash',
  Flash = 'Flash',
  Flask = 'Flask',
  Flower = 'Flower',
  Folder = 'Folder',
  Forest = 'Forest',
  FullCircle = 'FullCircle',
  Gas = 'Gas',
  Gift = 'Gift',
  GlobalSearch = 'GlobalSearch',
  Global = 'Global',
  Graph = 'Graph',
  Hardware = 'Hardware',
  HashTag = 'HashTag',
  HeartFilled = 'HeartFilled',
  Heart = 'Heart',
  Hierarchy = 'Hierarchy',
  HomeFilled = 'HomeFilled',
  Home = 'Home',
  Image = 'Image',
  Info = 'Info',
  Inventory = 'Inventory',
  Joystick = 'Joystick',
  KeepFilled = 'KeepFilled',
  Keep = 'Keep',
  Key = 'Key',
  LastPage = 'LastPage',
  LightFilled = 'LightFilled',
  Light = 'Light',
  Link = 'Link',
  Loading = 'Loading',
  Location = 'Location',
  LockSlash = 'LockSlash',
  Lock = 'Lock',
  LockedFilled = 'LockedFilled',
  Login = 'Login',
  Logout = 'Logout',
  Mail = 'Mail',
  Map = 'Map',
  Menu = 'Menu',
  MessageQuestion = 'MessageQuestion',
  Messages = 'Messages',
  MetamaskFoxOutline = 'MetamaskFoxOutline',
  Mic = 'Mic',
  MinusBold = 'MinusBold',
  MinusSquare = 'MinusSquare',
  Minus = 'Minus',
  Mobile = 'Mobile',
  MoneyBag = 'MoneyBag',
  Money = 'Money',
  Monitor = 'Monitor',
  MoreHorizontal = 'MoreHorizontal',
  MoreVertical = 'MoreVertical',
  MountainFlag = 'MountainFlag',
  MusicNote = 'MusicNote',
  Notification = 'Notification',
  PageInfo = 'PageInfo',
  Palette = 'Palette',
  PasswordCheck = 'PasswordCheck',
  Pending = 'Pending',
  People = 'People',
  PersonCancel = 'PersonCancel',
  Pin = 'Pin',
  Plant = 'Plant',
  Plug = 'Plug',
  PlusAndMinus = 'PlusAndMinus',
  PolicyAlert = 'PolicyAlert',
  Print = 'Print',
  PriorityHigh = 'PriorityHigh',
  PrivacyTip = 'PrivacyTip',
  ProgrammingArrows = 'ProgrammingArrows',
  Publish = 'Publish',
  QrCode = 'QrCode',
  Question = 'Question',
  Receive = 'Receive',
  Received = 'Received',
  Refresh = 'Refresh',
  RemoveMinus = 'RemoveMinus',
  Report = 'Report',
  Rocket = 'Rocket',
  SaveFilled = 'SaveFilled',
  Save = 'Save',
  Saving = 'Saving',
  ScanBarcode = 'ScanBarcode',
  ScanFocus = 'ScanFocus',
  Scan = 'Scan',
  Search = 'Search',
  SecurityAlert = 'SecurityAlert',
  SecurityCross = 'SecurityCross',
  SecurityKey = 'SecurityKey',
  SecuritySearch = 'SecuritySearch',
  SecuritySlash = 'SecuritySlash',
  SecurityTick = 'SecurityTick',
  SecurityTime = 'SecurityTime',
  SecurityUser = 'SecurityUser',
  Security = 'Security',
  Send = 'Send',
  SentimentDissatisfied = 'SentimentDissatisfied',
  SentimentNeutral = 'SentimentNeutral',
  SentimentSatisfied = 'SentimentSatisfied',
  SentimentVerySatisfied = 'SentimentVerySatisfied',
  SettingFilled = 'SettingFilled',
  Setting = 'Setting',
  Share = 'Share',
  ShieldLock = 'ShieldLock',
  ShoppingBag = 'ShoppingBag',
  ShoppingCart = 'ShoppingCart',
  SignalCellular = 'SignalCellular',
  Slash = 'Slash',
  Sms = 'Sms',
  SnapsMobile = 'SnapsMobile',
  SnapsPlus = 'SnapsPlus',
  SnapsRound = 'SnapsRound',
  Snaps = 'Snaps',
  SortByAlpha = 'SortByAlpha',
  Sort = 'Sort',
  Sparkle = 'Sparkle',
  Speed = 'Speed',
  Speedometer = 'Speedometer',
  Square = 'Square',
  Stake = 'Stake',
  StarFilled = 'StarFilled',
  Star = 'Star',
  Start = 'Start',
  Storefront = 'Storefront',
  Student = 'Student',
  SwapHorizontal = 'SwapHorizontal',
  SwapVertical = 'SwapVertical',
  TabClose = 'TabClose',
  TableRow = 'TableRow',
  Tablet = 'Tablet',
  Tag = 'Tag',
  ThumbDownFilled = 'ThumbDownFilled',
  ThumbDown = 'ThumbDown',
  ThumbUpFilled = 'ThumbUpFilled',
  ThumbUp = 'ThumbUp',
  Tint = 'Tint',
  Tooltip = 'Tooltip',
  Translate = 'Translate',
  Trash = 'Trash',
  TrendDown = 'TrendDown',
  TrendUp = 'TrendUp',
  Undo = 'Undo',
  Unfold = 'Unfold',
  UnlockedFilled = 'UnlockedFilled',
  Unpin = 'Unpin',
  UploadFile = 'UploadFile',
  Upload = 'Upload',
  Usb = 'Usb',
  UserCheck = 'UserCheck',
  UserCircleAdd = 'UserCircleAdd',
  UserCircleRemove = 'UserCircleRemove',
  UserCircle = 'UserCircle',
  User = 'User',
  VerifiedFilled = 'VerifiedFilled',
  Verified = 'Verified',
  Videocam = 'Videocam',
  ViewColumn = 'ViewColumn',
  ViewInAr = 'ViewInAr',
  VolumeOff = 'VolumeOff',
  VolumeUp = 'VolumeUp',
  WalletFilled = 'WalletFilled',
  Wallet = 'Wallet',
  Warning = 'Warning',
  WebTraffic = 'WebTraffic',
  Widgets = 'Widgets',
  WifiOff = 'WifiOff',
  Wifi = 'Wifi',
  X = 'X',
}
/* eslint-enable @typescript-eslint/no-shadow */
