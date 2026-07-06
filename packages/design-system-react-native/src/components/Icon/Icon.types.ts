import type { IconName, IconPropsShared } from '@metamask/design-system-shared';
import type React from 'react';
import type { SvgProps } from 'react-native-svg';

/**
 * Icon component props.
 */
export type IconProps = IconPropsShared & {
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & Omit<SvgProps, 'color' | 'name'>;

/**
 * Asset stored by icon name
 */
export type AssetByIconName = {
  [key in IconName]: React.FC<SvgProps & { name: string }>;
};
