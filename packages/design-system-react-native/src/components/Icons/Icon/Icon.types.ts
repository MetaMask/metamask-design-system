/* eslint-disable @typescript-eslint/no-shadow */
// Third party dependencies.
import type React from 'react';
import type { ViewProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

/**
 * Icon color
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
 * Icon sizes
 */
export enum IconSize {
  /** Extra small - 12px */
  Xs = 'w-[12px] h-[12px]',
  /** Small - 16px */
  Sm = 'w-[16px] h-[16px]',
  /** Medium - 20px (Default) */
  Md = 'w-[20px] h-[20px]',
  /** Large - 24px */
  Lg = 'w-[24px] h-[24px]',
  /** Extra large - 32px */
  Xl = 'w-[32px] h-[32px]',
}

/**
 * Icon component props.
 */
export type IconProps = {
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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & ViewProps;

/**
 * Asset stored by icon name
 */
export type AssetByIconName = {
  [key in IconName]: React.FC<SvgProps & { name: string }>;
};

/**
 * Icon names
 */
export enum IconName {
  Add = 'Add',
}
