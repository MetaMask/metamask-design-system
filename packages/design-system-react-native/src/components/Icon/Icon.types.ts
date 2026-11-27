import type { IconName, IconPropsShared } from '@metamask/design-system-shared';
import type React from 'react';
import type { SvgProps } from 'react-native-svg';

/**
 * Icon component props.
 */
export type IconProps = IconPropsShared & {
  /**
   * @deprecated Use `className` instead.
   */
  twClassName?: string;
  /**
   * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
   */
  className?: string;
} & Omit<SvgProps, 'color' | 'name'>;

/**
 * Asset stored by icon name
 */
export type AssetByIconName = {
  [key in IconName]: React.FC<SvgProps & { name: string }>;
};
