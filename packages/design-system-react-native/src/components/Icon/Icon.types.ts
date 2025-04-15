/* eslint-disable @typescript-eslint/no-shadow */
import type React from 'react';
import type { ViewProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { IconColor, IconName, IconSize } from '../../types';

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
