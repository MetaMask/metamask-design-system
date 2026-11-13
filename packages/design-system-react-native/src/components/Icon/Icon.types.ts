import type { IconName, IconPropsShared } from '@metamask/design-system-shared';
import type React from 'react';
import type { SvgProps } from 'react-native-svg';

/**
 * Icon component props.
 */
export type IconProps = IconPropsShared & {
  /**
   * Optional prop to add twrnc overriding classNames.
   *
   * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
   */
  twClassName?: string;
  /**
   * Tailwind classes from `@metamask/design-system-twrnc-preset`.
   * Applied after `twClassName` when both are set, so these classes win.
   */
  className?: string;
} & Omit<SvgProps, 'color' | 'name'>;

/**
 * Asset stored by icon name
 */
export type AssetByIconName = {
  [key in IconName]: React.FC<SvgProps & { name: string }>;
};
