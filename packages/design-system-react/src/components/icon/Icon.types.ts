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

// TODO: Add more icons see draft PR https://github.com/MetaMask/metamask-design-system/pull/199
export enum IconName {
  AddSquare = 'AddSquare',
}
