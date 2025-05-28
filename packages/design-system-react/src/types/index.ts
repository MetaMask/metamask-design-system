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
  Blockies = 'blockies',
  Jazzicon = 'jazzicon',
  Maskicon = 'maskicon',
}

/**
 * AvatarIcon - severity
 */
export enum AvatarIconSeverity {
  Neutral = 'neutral',
  Info = 'info',
  Success = 'success',
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
 * Box - borderRadius
 */
export enum BoxBorderRadius {
  None = 'rounded-none',
  Sm = 'rounded-sm', // 4px
  Md = 'rounded-md', // 6px
  Lg = 'rounded-lg', // 8px
  Full = 'rounded-full',
}

/**
 * Box - borderWidth
 */
export enum BoxBorderWidth {
  None = 'border-0',
  Sm = 'border',
  Md = 'border-2',
  Lg = 'border-4',
  Xl = 'border-8',
}

/**
 * Box - borderStyle
 */
export enum BoxBorderStyle {
  Solid = 'border-solid',
  Dashed = 'border-dashed',
  Dotted = 'border-dotted',
  Double = 'border-double',
  None = 'border-none',
}

/**
 * Box - backgroundColor
 */
export enum BoxBackgroundColor {
  BackgroundDefault = 'bg-background-default',
  BackgroundAlternative = 'bg-background-alternative',
  PrimaryDefault = 'bg-primary-default',
  PrimaryMuted = 'bg-primary-muted',
  ErrorDefault = 'bg-error-default',
  ErrorMuted = 'bg-error-muted',
  SuccessDefault = 'bg-success-default',
  SuccessMuted = 'bg-success-muted',
  InfoDefault = 'bg-info-default',
  InfoMuted = 'bg-info-muted',
  WarningDefault = 'bg-warning-default',
  WarningMuted = 'bg-warning-muted',
  Transparent = 'bg-transparent',
}

/**
 * Box - borderColor
 */
export enum BoxBorderColor {
  BorderDefault = 'border border-border-default',
  BorderMuted = 'border border-border-muted',
  PrimaryDefault = 'border border-primary-default',
  ErrorDefault = 'border border-error-default',
  SuccessDefault = 'border border-success-default',
  InfoDefault = 'border border-info-default',
  WarningDefault = 'border border-warning-default',
  None = '',
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
