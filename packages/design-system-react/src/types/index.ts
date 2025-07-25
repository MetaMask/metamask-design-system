// Import shared types
import {
  AvatarAccountSize as SharedAvatarAccountSize,
  AvatarAccountVariant as SharedAvatarAccountVariant,
  AvatarShape as SharedAvatarShape,
} from '@metamask/design-system-shared';

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

// Use shared types for avatar components
export { SharedAvatarAccountSize as AvatarAccountSize };
export { AvatarBaseSize as AvatarFaviconSize };
export { AvatarBaseSize as AvatarGroupSize };
export { AvatarBaseSize as AvatarIconSize };
export { AvatarBaseSize as AvatarNetworkSize };
export { AvatarBaseSize as AvatarTokenSize };
export { AvatarBaseSize as AvatarSize };

// Use shared shape and variant enums
export { SharedAvatarShape as AvatarShape };
export { SharedAvatarShape as AvatarBaseShape };
export { SharedAvatarAccountVariant as AvatarAccountVariant };

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
  Account = 'Account',
  Favicon = 'Favicon',
  Network = 'Network',
  Token = 'Token',
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
  Active = 'active', // Connected
  Inactive = 'inactive', // Connected
  Disconnected = 'disconnected',
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

  // Special Typography Variants
  PageHeading = 'page-heading',
  SectionHeading = 'section-heading',
  ButtonLabelMd = 'button-label-md',
  ButtonLabelLg = 'button-label-lg',
  AmountDisplayLg = 'amount-display-lg',
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
  /** For primary text in a hover state. */
  PrimaryDefaultHover = 'text-primary-default-hover',
  /** For primary text in a pressed state. */
  PrimaryDefaultPressed = 'text-primary-default-pressed',
  /** For elements used on top of primary/default. Used for text, icon or border */
  PrimaryInverse = 'text-primary-inverse',
  /** For the critical alert semantic elements. Used for text, background, icon or border */
  ErrorDefault = 'text-error-default',
  /** For critical alert text in a hover state. */
  ErrorDefaultHover = 'text-error-default-hover',
  /** For critical alert text in a pressed state. */
  ErrorDefaultPressed = 'text-error-default-pressed',
  /** For the stronger contrast error semantic elements. */
  ErrorAlternative = 'text-error-alternative',
  /** For elements used on top of error/default. Used for text, icon or border */
  ErrorInverse = 'text-error-inverse',
  /** For the positive semantic elements. Used for text, background, icon or border */
  SuccessDefault = 'text-success-default',
  /** For positive text in a hover state. */
  SuccessDefaultHover = 'text-success-default-hover',
  /** For positive text in a pressed state. */
  SuccessDefaultPressed = 'text-success-default-pressed',
  /** For elements used on top of success/default. Used for text, icon or border */
  SuccessInverse = 'text-success-inverse',
  /** For the caution alert semantic elements. Used for text, background, icon or border */
  WarningDefault = 'text-warning-default',
  /** For caution text in a hover state. */
  WarningDefaultHover = 'text-warning-default-hover',
  /** For caution text in a pressed state. */
  WarningDefaultPressed = 'text-warning-default-pressed',
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
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Uppercase = 'uppercase',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Lowercase = 'lowercase',
  // eslint-disable-next-line @typescript-eslint/no-shadow
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

/**
 * TextButton - size
 */
export enum TextButtonSize {
  BodyLg = 'body-lg',
  BodyMd = 'body-md',
  BodySm = 'body-sm',
  BodyXs = 'body-xs',
}

/**
 * Icon - size
 */
export enum IconSize {
  /** Extra small - 12px */
  Xs = 'xs',
  /** Small - 16px */
  Sm = 'sm',
  /** Medium - 20px (Default) */
  Md = 'md',
  /** Large - 24px */
  Lg = 'lg',
  /** Extra large - 32px */
  Xl = 'xl',
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
  /** For elements used on top of overlay/alternative. Used for text, icon or border */
  OverlayInverse = 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. Used for text, background, icon or border */
  PrimaryDefault = 'text-primary-default',
  /** For elements used on top of primary/default. Used for text, icon or border */
  PrimaryInverse = 'text-primary-inverse',
  /** For the critical alert semantic elements. Used for text, background, icon or border */
  ErrorDefault = 'text-error-default',
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
}

/**
 * Autogenerated from the generate-icon-script.ts script.
 * Please do not edit this enum directly.
 */
/**
 * Icon - name
 */
/* eslint-disable @typescript-eslint/no-shadow */
export enum IconName {
  Accessibility = 'Accessibility',
  Activity = 'Activity',
  Add = 'Add',
  AddCard = 'AddCard',
  AddCircle = 'AddCircle',
  AddSquare = 'AddSquare',
  Ai = 'Ai',
  AlternateEmail = 'AlternateEmail',
  Apps = 'Apps',
  Arrow2Down = 'Arrow2Down',
  Arrow2Left = 'Arrow2Left',
  Arrow2Right = 'Arrow2Right',
  Arrow2Up = 'Arrow2Up',
  Arrow2UpRight = 'Arrow2UpRight',
  ArrowCircleDown = 'ArrowCircleDown',
  ArrowCircleUp = 'ArrowCircleUp',
  ArrowDoubleLeft = 'ArrowDoubleLeft',
  ArrowDoubleRight = 'ArrowDoubleRight',
  ArrowDown = 'ArrowDown',
  ArrowDropDownCircle = 'ArrowDropDownCircle',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Attachment = 'Attachment',
  Ban = 'Ban',
  Bank = 'Bank',
  BankAssured = 'BankAssured',
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
  Card = 'Card',
  CardPos = 'CardPos',
  Cash = 'Cash',
  Category = 'Category',
  Chart = 'Chart',
  Check = 'Check',
  CheckBold = 'CheckBold',
  CircleX = 'CircleX',
  Clock = 'Clock',
  ClockFilled = 'ClockFilled',
  Close = 'Close',
  Cloud = 'Cloud',
  CloudDownload = 'CloudDownload',
  CloudUpload = 'CloudUpload',
  Code = 'Code',
  CodeCircle = 'CodeCircle',
  Coin = 'Coin',
  Collapse = 'Collapse',
  Confirmation = 'Confirmation',
  Connect = 'Connect',
  Copy = 'Copy',
  CopySuccess = 'CopySuccess',
  CreditCheck = 'CreditCheck',
  CurrencyFranc = 'CurrencyFranc',
  CurrencyLira = 'CurrencyLira',
  CurrencyPound = 'CurrencyPound',
  CurrencyYuan = 'CurrencyYuan',
  Customize = 'Customize',
  Danger = 'Danger',
  Dark = 'Dark',
  DarkFilled = 'DarkFilled',
  Data = 'Data',
  Description = 'Description',
  Details = 'Details',
  Diagram = 'Diagram',
  DocumentCode = 'DocumentCode',
  Download = 'Download',
  Draft = 'Draft',
  EcoLeaf = 'EcoLeaf',
  Edit = 'Edit',
  EditSquare = 'EditSquare',
  EncryptedAdd = 'EncryptedAdd',
  Eraser = 'Eraser',
  Error = 'Error',
  Ethereum = 'Ethereum',
  Exchange = 'Exchange',
  Expand = 'Expand',
  ExpandVertical = 'ExpandVertical',
  Explore = 'Explore',
  ExploreFilled = 'ExploreFilled',
  Export = 'Export',
  Extension = 'Extension',
  Eye = 'Eye',
  EyeSlash = 'EyeSlash',
  FaceId = 'FaceId',
  Feedback = 'Feedback',
  File = 'File',
  Filter = 'Filter',
  Fingerprint = 'Fingerprint',
  Fire = 'Fire',
  FirstPage = 'FirstPage',
  Flag = 'Flag',
  Flash = 'Flash',
  FlashSlash = 'FlashSlash',
  Flask = 'Flask',
  Flower = 'Flower',
  Folder = 'Folder',
  Forest = 'Forest',
  FullCircle = 'FullCircle',
  Gas = 'Gas',
  Gift = 'Gift',
  Global = 'Global',
  GlobalSearch = 'GlobalSearch',
  Graph = 'Graph',
  Hardware = 'Hardware',
  HashTag = 'HashTag',
  Heart = 'Heart',
  HeartFilled = 'HeartFilled',
  Hierarchy = 'Hierarchy',
  Home = 'Home',
  HomeFilled = 'HomeFilled',
  Image = 'Image',
  Info = 'Info',
  Inventory = 'Inventory',
  Joystick = 'Joystick',
  Keep = 'Keep',
  KeepFilled = 'KeepFilled',
  Key = 'Key',
  LastPage = 'LastPage',
  Light = 'Light',
  LightFilled = 'LightFilled',
  Link = 'Link',
  Loading = 'Loading',
  Location = 'Location',
  Lock = 'Lock',
  LockSlash = 'LockSlash',
  LockedFilled = 'LockedFilled',
  Login = 'Login',
  Logout = 'Logout',
  Mail = 'Mail',
  Map = 'Map',
  Menu = 'Menu',
  MessageQuestion = 'MessageQuestion',
  Messages = 'Messages',
  Mic = 'Mic',
  Minus = 'Minus',
  MinusBold = 'MinusBold',
  MinusSquare = 'MinusSquare',
  Mobile = 'Mobile',
  Money = 'Money',
  MoneyBag = 'MoneyBag',
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
  Save = 'Save',
  SaveFilled = 'SaveFilled',
  Saving = 'Saving',
  Scan = 'Scan',
  ScanBarcode = 'ScanBarcode',
  ScanFocus = 'ScanFocus',
  Search = 'Search',
  Security = 'Security',
  SecurityAlert = 'SecurityAlert',
  SecurityCross = 'SecurityCross',
  SecurityKey = 'SecurityKey',
  SecuritySearch = 'SecuritySearch',
  SecuritySlash = 'SecuritySlash',
  SecurityTick = 'SecurityTick',
  SecurityTime = 'SecurityTime',
  SecurityUser = 'SecurityUser',
  Send = 'Send',
  SentimentDissatisfied = 'SentimentDissatisfied',
  SentimentNeutral = 'SentimentNeutral',
  SentimentSatisfied = 'SentimentSatisfied',
  SentimentVerySatisfied = 'SentimentVerySatisfied',
  Setting = 'Setting',
  SettingFilled = 'SettingFilled',
  Share = 'Share',
  ShieldLock = 'ShieldLock',
  ShoppingBag = 'ShoppingBag',
  ShoppingCart = 'ShoppingCart',
  SignalCellular = 'SignalCellular',
  Slash = 'Slash',
  Sms = 'Sms',
  Snaps = 'Snaps',
  SnapsMobile = 'SnapsMobile',
  SnapsPlus = 'SnapsPlus',
  SnapsRound = 'SnapsRound',
  Sort = 'Sort',
  SortByAlpha = 'SortByAlpha',
  Sparkle = 'Sparkle',
  Speed = 'Speed',
  Speedometer = 'Speedometer',
  Square = 'Square',
  Stake = 'Stake',
  Star = 'Star',
  StarFilled = 'StarFilled',
  Start = 'Start',
  Storefront = 'Storefront',
  Student = 'Student',
  SwapHorizontal = 'SwapHorizontal',
  SwapVertical = 'SwapVertical',
  TabClose = 'TabClose',
  TableRow = 'TableRow',
  Tablet = 'Tablet',
  Tag = 'Tag',
  ThumbDown = 'ThumbDown',
  ThumbDownFilled = 'ThumbDownFilled',
  ThumbUp = 'ThumbUp',
  ThumbUpFilled = 'ThumbUpFilled',
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
  Upload = 'Upload',
  UploadFile = 'UploadFile',
  Usb = 'Usb',
  User = 'User',
  UserCheck = 'UserCheck',
  UserCircle = 'UserCircle',
  UserCircleAdd = 'UserCircleAdd',
  UserCircleRemove = 'UserCircleRemove',
  Verified = 'Verified',
  VerifiedFilled = 'VerifiedFilled',
  Videocam = 'Videocam',
  ViewColumn = 'ViewColumn',
  ViewInAr = 'ViewInAr',
  VolumeOff = 'VolumeOff',
  VolumeUp = 'VolumeUp',
  Wallet = 'Wallet',
  WalletFilled = 'WalletFilled',
  Warning = 'Warning',
  WebTraffic = 'WebTraffic',
  Widgets = 'Widgets',
  Wifi = 'Wifi',
  WifiOff = 'WifiOff',
  X = 'X',
}
/* eslint-enable @typescript-eslint/no-shadow */
