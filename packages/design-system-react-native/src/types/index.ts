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
  Blockies = 'blockies',
  Jazzicon = 'jazzicon',
  Maskicon = 'maskicon',
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
 * BadgeWrapper - positionAnchorShape
 */
export enum BadgeWrapperPositionAnchorShape {
  Rectangular = 'rectangular',
  Circular = 'circular',
}

/**
 * BadgeWrapper - position.
 */
export enum BadgeWrapperPosition {
  TopRight = 'top-right',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
  TopLeft = 'top-left',
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
  /** Background default for cut out effect*/
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
export { ButtonBaseSize as ButtonSize };
export { ButtonBaseSize as ButtonPrimarySize };
export { ButtonBaseSize as ButtonSecondarySize };
export { ButtonBaseSize as ButtonTertiarySize };
export { ButtonBaseSize as ButtonHeroSize };

/**
 * Button - variant
 */
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
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

  // Body Sizes
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
  /** For elements used on top of overlay/alternative. */
  OverlayInverse = 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. */
  PrimaryDefault = 'text-primary-default',
  /** For softer variants of primary text. */
  PrimaryAlternative = 'text-primary-alternative',
  /** For elements used on top of primary/default. */
  PrimaryInverse = 'text-primary-inverse',
  /** For primary text in a pressed state. */
  PrimaryDefaultPressed = 'text-primary-default-pressed',
  /** For critical alert text. */
  ErrorDefault = 'text-error-default',
  /** For stronger contrast error text. */
  ErrorAlternative = 'text-error-alternative',
  /** For elements used on top of error/default. */
  ErrorInverse = 'text-error-inverse',
  /** For critical alert text in a pressed state. */
  ErrorDefaultPressed = 'text-error-default-pressed',
  /** For caution alert text. */
  WarningDefault = 'text-warning-default',
  /** For elements used on top of warning/default. */
  WarningInverse = 'text-warning-inverse',
  /** For caution text in a pressed state. */
  WarningDefaultPressed = 'text-warning-default-pressed',
  /** For positive semantic text. */
  SuccessDefault = 'text-success-default',
  /** For elements used on top of success/default. */
  SuccessInverse = 'text-success-inverse',
  /** For positive text in a pressed state. */
  SuccessDefaultPressed = 'text-success-default-pressed',
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
 * TextButton - Size
 */
export enum TextButtonSize {
  BodyLg = 'body-lg',
  BodyMd = 'body-md',
  BodySm = 'body-sm',
  BodyXs = 'body-xs',
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
  PrimaryDefaultPressed = 'text-primary-default-pressed',
  /** For critical alert semantic elements. Used for text, background, icon, or border */
  ErrorDefault = 'text-error-default',
  /** For softer variants of error elements */
  ErrorAlternative = 'text-error-alternative',
  /** For elements used on top of error/default. Used for text, icon, or border */
  ErrorInverse = 'text-error-inverse',
  /** For critical alert semantic elements in a pressed state */
  ErrorDefaultPressed = 'text-error-default-pressed',
  /** For caution alert semantic elements. Used for text, background, icon, or border */
  WarningDefault = 'text-warning-default',
  /** For elements used on top of warning/default. Used for text, icon, or border */
  WarningInverse = 'text-warning-inverse',
  /** For caution alert semantic elements in a pressed state */
  WarningDefaultPressed = 'text-warning-default-pressed',
  /** For positive semantic elements. Used for text, background, icon, or border */
  SuccessDefault = 'text-success-default',
  /** For elements used on top of success/default. Used for text, icon, or border */
  SuccessInverse = 'text-success-inverse',
  /** For positive semantic elements in a pressed state */
  SuccessDefaultPressed = 'text-success-default-pressed',
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
  Xs = '12',
  /** Small - 16px */
  Sm = '16',
  /** Medium - 20px (Default) */
  Md = '20',
  /** Large - 24px */
  Lg = '24',
  /** Extra large - 32px */
  Xl = '32',
}

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
  CorporateFare = 'CorporateFare',
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
