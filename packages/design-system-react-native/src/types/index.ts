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
  Accessibility = 'Accessibility',
  Activity = 'Activity',
  AddCard = 'AddCard',
  AddCircle = 'AddCircle',
  AddSquare = 'AddSquare',
  Add = 'Add',
  Ai = 'Ai',
  AlternateEmail = 'AlternateEmail',
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
  Attachment = 'Attachment',
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
  CardPos = 'CardPos',
  Card = 'Card',
  Cash = 'Cash',
  Category = 'Category',
  Chart = 'Chart',
  CheckBold = 'CheckBold',
  Check = 'Check',
  CircleX = 'CircleX',
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
  Mic = 'Mic',
  MinusBold = 'MinusBold',
  MinusSquare = 'MinusSquare',
  Minus = 'Minus',
  Mobile = 'Mobile',
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
