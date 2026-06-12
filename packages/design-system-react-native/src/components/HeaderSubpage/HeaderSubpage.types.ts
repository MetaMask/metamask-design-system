import type { ReactNode } from 'react';

import type { ButtonIconProps } from '../ButtonIcon';
import type { ListItemProps } from '../ListItem';

/**
 * HeaderSubpage component props.
 *
 * Composes {@link ListItem} with subpage header navigation actions. Inherits
 * {@link ListItem} / {@link Content} props for the center row (`avatar`, `title`,
 * `description`, etc.) while resolving back and close actions into row accessories.
 */
export type HeaderSubpageProps = Omit<
  ListItemProps,
  'startAccessory' | 'endAccessory' | 'isInteractive'
> & {
  /**
   * Callback when the back button is pressed.
   * If provided, a back button will be rendered as the start accessory.
   */
  onBack?: () => void;
  /**
   * Additional props to pass to the back ButtonIcon.
   * If provided, a back button will be rendered as the start accessory with these props spread.
   */
  backButtonProps?: Omit<ButtonIconProps, 'iconName'>;
  /**
   * Callback when the close button is pressed.
   * If provided, a close button will be added to the end accessory.
   */
  onClose?: () => void;
  /**
   * Additional props to pass to the close ButtonIcon.
   * If provided, a close button will be added to the end accessory with these props spread.
   */
  closeButtonProps?: Omit<ButtonIconProps, 'iconName'>;
  /**
   * Additional ButtonIcon props rendered after the close button on the end side.
   */
  endButtonIconProps?: ButtonIconProps[];
  /**
   * Optional content rendered before the row content.
   * Takes priority over `onBack` / `backButtonProps`.
   */
  startAccessory?: ReactNode;
  /**
   * Optional content rendered after the row content.
   * Takes priority over `onClose` / `closeButtonProps` / `endButtonIconProps`.
   */
  endAccessory?: ReactNode;
  /**
   * Optional prop to include the top inset so the header is visible below the device's notch.
   *
   * @default false
   */
  includesTopInset?: boolean;
};
