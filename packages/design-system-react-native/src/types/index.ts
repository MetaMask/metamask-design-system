/**
 * AvatarBase - size
 */
export enum AvatarBaseSize {
  /**
   * Represents an extra small avatar size (16px).
   */
  Xs = '16',
  /**
   * Represents a small avatar size (24px).
   */
  Sm = '24',
  /**
   * Represents a medium avatar size (32px).
   */
  Md = '32',
  /**
   * Represents a large avatar size (40px).
   */
  Lg = '40',
  /**
   * Represents an extra large avatar size (48px).
   */
  Xl = '48',
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
 * AvatarGroup - variant
 */
export enum AvatarGroupVariant {
  Account = 'Account',
  Favicon = 'Favicon',
  Network = 'Network',
  Token = 'Token',
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
  Md = 'Md',
  /**
   * Represents a large badge count (20px height).
   */
  Lg = 'Lg',
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
  Md = 'Md',
  /**
   * Represents a large avatar size (10px).
   */
  Lg = 'Lg',
}

/**
 * BadgeWrapper - positionAnchorShape
 */
export enum BadgeWrapperPositionAnchorShape {
  Rectangular = 'Rectangular',
  Circular = 'Circular',
}

/**
 * BadgeWrapper - position.
 */
export enum BadgeWrapperPosition {
  TopRight = 'TopRight',
  BottomRight = 'BottomRight',
  BottomLeft = 'BottomLeft',
  TopLeft = 'TopLeft',
}

/**
 * BadgeWrapper - customPosition
 */
export interface BadgeWrapperCustomPosition {
  top?: number | string | undefined;
  right?: number | string | undefined;
  bottom?: number | string | undefined;
  left?: number | string | undefined;
}

/**
 * ButtonBase - size
 */
export enum ButtonBaseSize {
  /**
   * Represents a small button size (32px).
   */
  Sm = '32',
  /**
   * Represents a medium button size (40px).
   */
  Md = '40',
  /**
   * Represents a large button size (48px).
   */
  Lg = '48',
}
export { ButtonBaseSize as ButtonSize };
export { ButtonBaseSize as ButtonPrimarySize };
export { ButtonBaseSize as ButtonSecondarySize };
export { ButtonBaseSize as ButtonTertiarySize };

/**
 * Button - variant
 */
export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

/**
 * ButtonIcon - size
 */
export enum ButtonIconSize {
  /**
   * Represents a small button size (24px).
   */
  Sm = '24',
  /**
   * Represents a medium button size (32px).
   */
  Md = '32',
  /**
   * Represents a large button size (40px).
   */
  Lg = '40',
}

/**
 * Text - variant
 */
export enum TextVariant {
  // Display Sizes
  DisplayMd = 'display-md',

  // Heading Sizes
  HeadingLg = 'heading-lg',
  HeadingMd = 'heading-md',
  HeadingSm = 'heading-sm',

  // Body Sizes
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
  TextDefault = 'text-text-default',
  /** For softer contrast neutral text */
  TextAlternative = 'text-text-alternative',
  /** For the softest contrast neutral text (not accessible) */
  TextMuted = 'text-text-muted',
  /** For elements used on top of overlay/alternative. */
  OverlayInverse = 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. */
  PrimaryDefault = 'text-primary-default',
  /** For softer variants of primary text. */
  PrimaryAlternative = 'text-primary-alternative',
  /** For elements used on top of primary/default. */
  PrimaryInverse = 'text-primary-inverse',
  /** For primary text in a pressed state. */
  PrimaryDefaultPressed = 'text-primary-defaultPressed',
  /** For critical alert text. */
  ErrorDefault = 'text-error-default',
  /** For stronger contrast error text. */
  ErrorAlternative = 'text-error-alternative',
  /** For elements used on top of error/default. */
  ErrorInverse = 'text-error-inverse',
  /** For critical alert text in a pressed state. */
  ErrorDefaultPressed = 'text-error-defaultPressed',
  /** For caution alert text. */
  WarningDefault = 'text-warning-default',
  /** For elements used on top of warning/default. */
  WarningInverse = 'text-warning-inverse',
  /** For caution text in a pressed state. */
  WarningDefaultPressed = 'text-warning-defaultPressed',
  /** For positive semantic text. */
  SuccessDefault = 'text-success-default',
  /** For elements used on top of success/default. */
  SuccessInverse = 'text-success-inverse',
  /** For positive text in a pressed state. */
  SuccessDefaultPressed = 'text-success-defaultPressed',
  /** For informational read-only text. */
  InfoDefault = 'text-info-default',
  /** For elements used on top of info/default. */
  InfoInverse = 'text-info-inverse',
  /** Make the text color transparent. */
  Transparent = 'text-transparent',
}

/**
 * Text - fontWeight
 */
export enum FontWeight {
  /**
   * Weight - 700
   */
  Bold = '700',
  /**
   * Weight - 500
   */
  Medium = '500',
  /**
   * Weight - 400
   */
  Regular = '400',
}

/**
 * Text - fontStyle
 */
export enum FontStyle {
  Italic = 'italic',
  Normal = 'normal',
}

/**
 * Text - fontFamily
 */
export enum FontFamily {
  Default = 'default',
  Accent = 'accent',
  Hero = 'hero',
}

/**
 * Icon - color
 */
export enum IconColor {
  /** For default neutral icons */
  IconDefault = 'text-icon-default',
  /** For softer neutral icons */
  IconAlternative = 'text-icon-alternative',
  /** For the weakest contrast neutral icons (not accessible) */
  IconMuted = 'text-icon-muted',
  /** For elements used on top of overlay/alternative. Used for text, icon, or border */
  OverlayInverse = 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. Used for text, background, icon, or border */
  PrimaryDefault = 'text-primary-default',
  /** For softer variants of primary interactive elements */
  PrimaryAlternative = 'text-primary-alternative',
  /** For elements used on top of primary/default. Used for text, icon, or border */
  PrimaryInverse = 'text-primary-inverse',
  /** For primary interactive elements in a pressed state */
  PrimaryDefaultPressed = 'text-primary-defaultPressed',
  /** For critical alert semantic elements. Used for text, background, icon, or border */
  ErrorDefault = 'text-error-default',
  /** For softer variants of error elements */
  ErrorAlternative = 'text-error-alternative',
  /** For elements used on top of error/default. Used for text, icon, or border */
  ErrorInverse = 'text-error-inverse',
  /** For critical alert semantic elements in a pressed state */
  ErrorDefaultPressed = 'text-error-defaultPressed',
  /** For caution alert semantic elements. Used for text, background, icon, or border */
  WarningDefault = 'text-warning-default',
  /** For elements used on top of warning/default. Used for text, icon, or border */
  WarningInverse = 'text-warning-inverse',
  /** For caution alert semantic elements in a pressed state */
  WarningDefaultPressed = 'text-warning-defaultPressed',
  /** For positive semantic elements. Used for text, background, icon, or border */
  SuccessDefault = 'text-success-default',
  /** For elements used on top of success/default. Used for text, icon, or border */
  SuccessInverse = 'text-success-inverse',
  /** For positive semantic elements in a pressed state */
  SuccessDefaultPressed = 'text-success-defaultPressed',
  /** For informational read-only elements. Used for text, background, icon, or border */
  InfoDefault = 'text-info-default',
  /** For elements used on top of info/default. Used for text, icon, or border */
  InfoInverse = 'text-info-inverse',
}

/**
 * Icon - size
 */
export enum IconSize {
  /** Extra small - 12px */
  Xs = 12,
  /** Small - 16px */
  Sm = 16,
  /** Medium - 20px (Default) */
  Md = 20,
  /** Large - 24px */
  Lg = 24,
  /** Extra large - 32px */
  Xl = 32,
}

// /////////////////////////////////////////////////////
// This is generated code - Manually add types above
// DO NOT EDIT - Use generate-assets.js
// /////////////////////////////////////////////////////

/**
 * Icon - name
 */
export enum IconName {
  AddSquare = 'AddSquare',
  Add = 'Add',
  Arrow2Down = 'Arrow2Down',
  Arrow2Left = 'Arrow2Left',
  Arrow2Right = 'Arrow2Right',
  Arrow2UpRight = 'Arrow2UpRight',
  Arrow2Up = 'Arrow2Up',
  ArrowDoubleLeft = 'ArrowDoubleLeft',
  ArrowDoubleRight = 'ArrowDoubleRight',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Ban = 'Ban',
  BankToken = 'BankToken',
  Bank = 'Bank',
  Bold = 'Bold',
  Book = 'Book',
  Bookmark = 'Bookmark',
  Bridge = 'Bridge',
  Calculator = 'Calculator',
  CardPos = 'CardPos',
  CardToken = 'CardToken',
  Card = 'Card',
  Category = 'Category',
  Chart = 'Chart',
  CheckBold = 'CheckBold',
  Check = 'Check',
  CircleX = 'CircleX',
  Clock = 'Clock',
  Close = 'Close',
  CodeCircle = 'CodeCircle',
  Coin = 'Coin',
  Collapse = 'Collapse',
  Confirmation = 'Confirmation',
  Connect = 'Connect',
  CopySuccess = 'CopySuccess',
  Copy = 'Copy',
  Customize = 'Customize',
  Danger = 'Danger',
  Dark = 'Dark',
  Data = 'Data',
  Diagram = 'Diagram',
  DocumentCode = 'DocumentCode',
  Download = 'Download',
  Edit = 'Edit',
  Eraser = 'Eraser',
  Ethereum = 'Ethereum',
  Expand = 'Expand',
  Explore = 'Explore',
  Export = 'Export',
  EyeSlash = 'EyeSlash',
  Eye = 'Eye',
  File = 'File',
  Filter = 'Filter',
  Flag = 'Flag',
  FlashSlash = 'FlashSlash',
  Flash = 'Flash',
  Flask = 'Flask',
  FullCircle = 'FullCircle',
  Gas = 'Gas',
  GlobalSearch = 'GlobalSearch',
  Global = 'Global',
  Graph = 'Graph',
  Hardware = 'Hardware',
  Heart = 'Heart',
  Hierarchy = 'Hierarchy',
  Home = 'Home',
  Import = 'Import',
  Info = 'Info',
  Key = 'Key',
  Light = 'Light',
  Link = 'Link',
  Loading = 'Loading',
  LockCircle = 'LockCircle',
  LockSlash = 'LockSlash',
  Lock = 'Lock',
  Login = 'Login',
  Logout = 'Logout',
  Menu = 'Menu',
  MessageQuestion = 'MessageQuestion',
  Messages = 'Messages',
  MinusBold = 'MinusBold',
  MinusSquare = 'MinusSquare',
  Minus = 'Minus',
  Mobile = 'Mobile',
  Money = 'Money',
  Monitor = 'Monitor',
  MoreHorizontal = 'MoreHorizontal',
  MoreVertical = 'MoreVertical',
  NotificationCircle = 'NotificationCircle',
  Notification = 'Notification',
  PasswordCheck = 'PasswordCheck',
  People = 'People',
  Pin = 'Pin',
  Plant = 'Plant',
  Plug = 'Plug',
  PlusMinus = 'PlusMinus',
  ProgrammingArrows = 'ProgrammingArrows',
  QrCode = 'QrCode',
  Question = 'Question',
  Received = 'Received',
  Refresh = 'Refresh',
  Save = 'Save',
  ScanBarcode = 'ScanBarcode',
  ScanFocus = 'ScanFocus',
  Scan = 'Scan',
  Scroll = 'Scroll',
  Search = 'Search',
  SecurityCard = 'SecurityCard',
  SecurityCross = 'SecurityCross',
  SecurityKey = 'SecurityKey',
  SecuritySearch = 'SecuritySearch',
  SecuritySlash = 'SecuritySlash',
  SecurityTick = 'SecurityTick',
  SecurityTime = 'SecurityTime',
  SecurityUser = 'SecurityUser',
  Security = 'Security',
  Send1 = 'Send1',
  Send2 = 'Send2',
  Send = 'Send',
  Setting = 'Setting',
  Share = 'Share',
  Slash = 'Slash',
  SnapsMobile = 'SnapsMobile',
  SnapsPlus = 'SnapsPlus',
  Snaps = 'Snaps',
  Speedometer = 'Speedometer',
  Square = 'Square',
  Stake = 'Stake',
  Star = 'Star',
  Student = 'Student',
  SwapHorizontal = 'SwapHorizontal',
  SwapVertical = 'SwapVertical',
  Tag = 'Tag',
  Tilde = 'Tilde',
  Timer = 'Timer',
  Tint = 'Tint',
  Trash = 'Trash',
  TrendDown = 'TrendDown',
  TrendUp = 'TrendUp',
  Twitter = 'Twitter',
  Unpin = 'Unpin',
  Upload = 'Upload',
  Usb = 'Usb',
  UserCheck = 'UserCheck',
  UserCircleAdd = 'UserCircleAdd',
  UserCircleRemove = 'UserCircleRemove',
  UserCircle = 'UserCircle',
  User = 'User',
  WalletCard = 'WalletCard',
  WalletMoney = 'WalletMoney',
  Wallet = 'Wallet',
  Warning = 'Warning',
  Wifi = 'Wifi',
}
