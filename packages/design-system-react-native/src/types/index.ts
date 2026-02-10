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
  Accessibility = 'accessibility',
  Activity = 'activity',
  AddCard = 'add-card',
  AddCircle = 'add-circle',
  AddSquare = 'add-square',
  Add = 'add',
  AfterHours = 'after-hours',
  Ai = 'ai',
  AlternateEmail = 'alternate-email',
  AppleLogo = 'apple-logo',
  Apps = 'apps',
  Arrow2Down = 'arrow-2-down',
  Arrow2Left = 'arrow-2-left',
  Arrow2Right = 'arrow-2-right',
  Arrow2UpRight = 'arrow-2-up-right',
  Arrow2Up = 'arrow-2-up',
  ArrowCircleDown = 'arrow-circle-down',
  ArrowCircleUp = 'arrow-circle-up',
  ArrowDoubleLeft = 'arrow-double-left',
  ArrowDoubleRight = 'arrow-double-right',
  ArrowDown = 'arrow-down',
  ArrowDropDownCircle = 'arrow-drop-down-circle',
  ArrowLeft = 'arrow-left',
  ArrowRight = 'arrow-right',
  ArrowUp = 'arrow-up',
  AttachMoney = 'attach-money',
  Attachment = 'attachment',
  Backspace = 'backspace',
  Ban = 'ban',
  BankAssured = 'bank-assured',
  Bank = 'bank',
  Bold = 'bold',
  Book = 'book',
  Bookmark = 'bookmark',
  Bridge = 'bridge',
  Briefcase = 'briefcase',
  Bulb = 'bulb',
  BuySell = 'buy-sell',
  Cake = 'cake',
  Calculator = 'calculator',
  Calendar = 'calendar',
  Call = 'call',
  Camera = 'camera',
  Campaign = 'campaign',
  Candlestick = 'candlestick',
  CardPos = 'card-pos',
  Card = 'card',
  Cash = 'cash',
  Category = 'category',
  Chart = 'chart',
  CheckBold = 'check-bold',
  Check = 'check',
  CircleX = 'circle-x',
  Clear = 'clear',
  ClockFilled = 'clock-filled',
  Clock = 'clock',
  Close = 'close',
  CloudDownload = 'cloud-download',
  CloudUpload = 'cloud-upload',
  Cloud = 'cloud',
  CodeCircle = 'code-circle',
  Code = 'code',
  Coin = 'coin',
  Collapse = 'collapse',
  Confirmation = 'confirmation',
  Connect = 'connect',
  CopySuccess = 'copy-success',
  Copy = 'copy',
  CreditCheck = 'credit-check',
  CurrencyFranc = 'currency-franc',
  CurrencyLira = 'currency-lira',
  CurrencyPound = 'currency-pound',
  CurrencyYuan = 'currency-yuan',
  Customize = 'customize',
  Danger = 'danger',
  DarkFilled = 'dark-filled',
  Dark = 'dark',
  Data = 'data',
  Description = 'description',
  Details = 'details',
  Diagram = 'diagram',
  DocumentCode = 'document-code',
  Download = 'download',
  Draft = 'draft',
  EcoLeaf = 'eco-leaf',
  EditSquare = 'edit-square',
  Edit = 'edit',
  EncryptedAdd = 'encrypted-add',
  Eraser = 'eraser',
  Error = 'error',
  Ethereum = 'ethereum',
  Exchange = 'exchange',
  ExpandVertical = 'expand-vertical',
  Expand = 'expand',
  ExploreFilled = 'explore-filled',
  Explore = 'explore',
  Export = 'export',
  Extension = 'extension',
  EyeSlash = 'eye-slash',
  Eye = 'eye',
  FaceId = 'face-id',
  Feedback = 'feedback',
  File = 'file',
  Filter = 'filter',
  Fingerprint = 'fingerprint',
  Fire = 'fire',
  FirstPage = 'first-page',
  Flag = 'flag',
  FlashSlash = 'flash-slash',
  Flash = 'flash',
  Flask = 'flask',
  Flower = 'flower',
  Folder = 'folder',
  Forest = 'forest',
  FullCircle = 'full-circle',
  Gas = 'gas',
  Gift = 'gift',
  GlobalSearch = 'global-search',
  Global = 'global',
  Graph = 'graph',
  Hardware = 'hardware',
  HashTag = 'hash-tag',
  HeartFilled = 'heart-filled',
  Heart = 'heart',
  Hierarchy = 'hierarchy',
  HomeFilled = 'home-filled',
  Home = 'home',
  Image = 'image',
  Info = 'info',
  Inventory = 'inventory',
  Joystick = 'joystick',
  KeepFilled = 'keep-filled',
  Keep = 'keep',
  Key = 'key',
  LastPage = 'last-page',
  LightFilled = 'light-filled',
  Light = 'light',
  Link = 'link',
  Loading = 'loading',
  Location = 'location',
  LockSlash = 'lock-slash',
  Lock = 'lock',
  LockedFilled = 'locked-filled',
  Login = 'login',
  Logout = 'logout',
  Mail = 'mail',
  Map = 'map',
  Menu = 'menu',
  MessageQuestion = 'message-question',
  Messages = 'messages',
  MetamaskFoxOutline = 'metamask-fox-outline',
  Mic = 'mic',
  MinusBold = 'minus-bold',
  MinusSquare = 'minus-square',
  Minus = 'minus',
  Mobile = 'mobile',
  MoneyBag = 'money-bag',
  Money = 'money',
  Monitor = 'monitor',
  MoreHorizontal = 'more-horizontal',
  MoreVertical = 'more-vertical',
  MountainFlag = 'mountain-flag',
  MusicNote = 'music-note',
  Notification = 'notification',
  PageInfo = 'page-info',
  Palette = 'palette',
  PasswordCheck = 'password-check',
  Pending = 'pending',
  People = 'people',
  PersonCancel = 'person-cancel',
  Pin = 'pin',
  Plant = 'plant',
  Plug = 'plug',
  PlusAndMinus = 'plus-and-minus',
  PolicyAlert = 'policy-alert',
  Print = 'print',
  PriorityHigh = 'priority-high',
  PrivacyTip = 'privacy-tip',
  ProgrammingArrows = 'programming-arrows',
  Publish = 'publish',
  QrCode = 'qr-code',
  Question = 'question',
  Receive = 'receive',
  Received = 'received',
  Refresh = 'refresh',
  RemoveMinus = 'remove-minus',
  Report = 'report',
  Rocket = 'rocket',
  SaveFilled = 'save-filled',
  Save = 'save',
  Saving = 'saving',
  ScanBarcode = 'scan-barcode',
  ScanFocus = 'scan-focus',
  Scan = 'scan',
  Search = 'search',
  SecurityAlert = 'security-alert',
  SecurityCross = 'security-cross',
  SecurityKey = 'security-key',
  SecuritySearch = 'security-search',
  SecuritySlash = 'security-slash',
  SecurityTick = 'security-tick',
  SecurityTime = 'security-time',
  SecurityUser = 'security-user',
  Security = 'security',
  Send = 'send',
  SentimentDissatisfied = 'sentiment-dissatisfied',
  SentimentNeutral = 'sentiment-neutral',
  SentimentSatisfied = 'sentiment-satisfied',
  SentimentVerySatisfied = 'sentiment-very-satisfied',
  SettingFilled = 'setting-filled',
  Setting = 'setting',
  Share = 'share',
  ShieldLock = 'shield-lock',
  ShoppingBag = 'shopping-bag',
  ShoppingCart = 'shopping-cart',
  SignalCellular = 'signal-cellular',
  Slash = 'slash',
  Sms = 'sms',
  SnapsMobile = 'snaps-mobile',
  SnapsPlus = 'snaps-plus',
  SnapsRound = 'snaps-round',
  Snaps = 'snaps',
  SortByAlpha = 'sort-by-alpha',
  Sort = 'sort',
  Sparkle = 'sparkle',
  Speed = 'speed',
  Speedometer = 'speedometer',
  Square = 'square',
  Stake = 'stake',
  StarFilled = 'star-filled',
  Star = 'star',
  Start = 'start',
  Storefront = 'storefront',
  Student = 'student',
  SwapHorizontal = 'swap-horizontal',
  SwapVertical = 'swap-vertical',
  TabClose = 'tab-close',
  TableRow = 'table-row',
  Tablet = 'tablet',
  Tag = 'tag',
  ThumbDownFilled = 'thumb-down-filled',
  ThumbDown = 'thumb-down',
  ThumbUpFilled = 'thumb-up-filled',
  ThumbUp = 'thumb-up',
  Tint = 'tint',
  Tooltip = 'tooltip',
  Translate = 'translate',
  Trash = 'trash',
  TrendDown = 'trend-down',
  TrendUp = 'trend-up',
  Undo = 'undo',
  Unfold = 'unfold',
  UnlockedFilled = 'unlocked-filled',
  Unpin = 'unpin',
  UploadFile = 'upload-file',
  Upload = 'upload',
  Usb = 'usb',
  UserCheck = 'user-check',
  UserCircleAdd = 'user-circle-add',
  UserCircleRemove = 'user-circle-remove',
  UserCircle = 'user-circle',
  User = 'user',
  VerifiedFilled = 'verified-filled',
  Verified = 'verified',
  Videocam = 'videocam',
  ViewColumn = 'view-column',
  ViewInAr = 'view-in-ar',
  VolumeOff = 'volume-off',
  VolumeUp = 'volume-up',
  WalletFilled = 'wallet-filled',
  Wallet = 'wallet',
  Warning = 'warning',
  WebTraffic = 'web-traffic',
  Widgets = 'widgets',
  WifiOff = 'wifi-off',
  Wifi = 'wifi',
  X = 'x',
}
/* eslint-enable @typescript-eslint/no-shadow */
