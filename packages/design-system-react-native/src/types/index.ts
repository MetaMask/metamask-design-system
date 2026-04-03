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
   * Weight - 600
   */
  Bold = '600',
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
