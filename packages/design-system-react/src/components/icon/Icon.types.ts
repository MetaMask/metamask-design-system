import type { SVGProps, ComponentPropsWithoutRef } from 'react';

// Use ComponentPropsWithoutRef to get SVG element props without relying on global SVGElement
type SVGElementProps = ComponentPropsWithoutRef<'svg'>;

export type IconProps = SVGProps<SVGElementProps> & {
  /**
   * Required prop to specify which icon to render from the icon set
   */
  name: IconName;
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
   * @default IconSize.Md
   */
  size?: IconSize;
  /**
   * Optional prop that sets the color of the icon using predefined theme colors
   * @default IconColor.IconDefault
   */
  color?: IconColor;
  /**
   * Additional CSS classes to be added to the component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
};

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
export enum IconName {
  Add = 'Add',
  AddSquare = 'AddSquare',
  Arrow2Down = 'Arrow2Down',
  Arrow2Left = 'Arrow2Left',
  Arrow2Right = 'Arrow2Right',
  Arrow2Up = 'Arrow2Up',
  Arrow2UpRight = 'Arrow2UpRight',
  ArrowDoubleLeft = 'ArrowDoubleLeft',
  ArrowDoubleRight = 'ArrowDoubleRight',
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  Ban = 'Ban',
  Bank = 'Bank',
  BankToken = 'BankToken',
  Bold = 'Bold',
  Book = 'Book',
  Bookmark = 'Bookmark',
  Bridge = 'Bridge',
  Calculator = 'Calculator',
  Card = 'Card',
  CardPos = 'CardPos',
  CardToken = 'CardToken',
  Category = 'Category',
  Chart = 'Chart',
  Check = 'Check',
  CheckBold = 'CheckBold',
  CircleX = 'CircleX',
  Clock = 'Clock',
  Close = 'Close',
  CodeCircle = 'CodeCircle',
  Coin = 'Coin',
  Collapse = 'Collapse',
  Confirmation = 'Confirmation',
  Connect = 'Connect',
  Copy = 'Copy',
  CopySuccess = 'CopySuccess',
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
  Eye = 'Eye',
  EyeSlash = 'EyeSlash',
  File = 'File',
  Filter = 'Filter',
  Flag = 'Flag',
  Flash = 'Flash',
  FlashSlash = 'FlashSlash',
  Flask = 'Flask',
  FullCircle = 'FullCircle',
  Gas = 'Gas',
  Global = 'Global',
  GlobalSearch = 'GlobalSearch',
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
  Lock = 'Lock',
  LockCircle = 'LockCircle',
  LockSlash = 'LockSlash',
  Login = 'Login',
  Logout = 'Logout',
  Menu = 'Menu',
  MessageQuestion = 'MessageQuestion',
  Messages = 'Messages',
  Minus = 'Minus',
  MinusBold = 'MinusBold',
  MinusSquare = 'MinusSquare',
  Mobile = 'Mobile',
  Money = 'Money',
  Monitor = 'Monitor',
  MoreHorizontal = 'MoreHorizontal',
  MoreVertical = 'MoreVertical',
  Notification = 'Notification',
  NotificationCircle = 'NotificationCircle',
  PasswordCheck = 'PasswordCheck',
  People = 'People',
  Pin = 'Pin',
  Plug = 'Plug',
  PlusMinus = 'PlusMinus',
  ProgrammingArrows = 'ProgrammingArrows',
  QrCode = 'QrCode',
  Question = 'Question',
  Received = 'Received',
  Refresh = 'Refresh',
  Save = 'Save',
  Scan = 'Scan',
  ScanBarcode = 'ScanBarcode',
  ScanFocus = 'ScanFocus',
  Scroll = 'Scroll',
  Search = 'Search',
  Security = 'Security',
  SecurityCard = 'SecurityCard',
  SecurityCross = 'SecurityCross',
  SecurityKey = 'SecurityKey',
  SecuritySearch = 'SecuritySearch',
  SecuritySlash = 'SecuritySlash',
  SecurityTick = 'SecurityTick',
  SecurityTime = 'SecurityTime',
  SecurityUser = 'SecurityUser',
  Send1 = 'Send1',
  Send2 = 'Send2',
  Setting = 'Setting',
  Share = 'Share',
  Slash = 'Slash',
  Snaps = 'Snaps',
  SnapsMobile = 'SnapsMobile',
  SnapsPlus = 'SnapsPlus',
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
  User = 'User',
  UserCheck = 'UserCheck',
  UserCircle = 'UserCircle',
  UserCircleAdd = 'UserCircleAdd',
  UserCircleRemove = 'UserCircleRemove',
  Wallet = 'Wallet',
  WalletCard = 'WalletCard',
  WalletMoney = 'WalletMoney',
  Warning = 'Warning',
  Wifi = 'Wifi',
}
