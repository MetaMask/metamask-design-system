import type { ComponentProps, ReactNode } from 'react';

import type { ButtonIconProps } from '../ButtonIcon';

export type HeaderBaseProps = ComponentProps<'div'> & {
  /**
   * Title of the HeaderBase.
   */
  children?: ReactNode | string;
  /**
   * Optional prop to include content to be displayed before the title.
   * Takes priority over startButtonIconProps if both are provided.
   */
  startAccessory?: ReactNode;
  /**
   * Optional prop to include content to be displayed after the title.
   * Takes priority over endButtonIconProps if both are provided.
   */
  endAccessory?: ReactNode;
  /**
   * Optional ButtonIcon props to render a ButtonIcon as the start accessory.
   * Only used if startAccessory is not provided.
   * Requires ariaLabel for accessibility.
   *
   * @default size: ButtonIconSize.Md
   */
  startButtonIconProps?: ButtonIconProps;
  /**
   * Optional array of ButtonIcon props to render multiple ButtonIcons as end accessories.
   * Rendered in reverse order (first item appears rightmost).
   * Only used if endAccessory is not provided.
   * Requires ariaLabel on each item for accessibility.
   *
   * @default size: ButtonIconSize.Md for each
   */
  endButtonIconProps?: ButtonIconProps[];
  /**
   * Optional prop to include the top inset so the header is visible below the safe area.
   *
   * @default false
   */
  includesTopInset?: boolean;
  /**
   * Optional props to pass to the start accessory wrapper div.
   */
  startAccessoryWrapperProps?: ComponentProps<'div'> & {
    'data-testid'?: string;
  };
  /**
   * Optional props to pass to the end accessory wrapper div.
   */
  endAccessoryWrapperProps?: ComponentProps<'div'> & {
    'data-testid'?: string;
  };
  /**
   * Optional test ID for the header container (maps to data-testid).
   */
  testID?: string;
  /**
   * Optional CSS class names for the header container.
   */
  className?: string;
  /**
   * Optional inline styles for the header container.
   */
  style?: React.CSSProperties;
};
