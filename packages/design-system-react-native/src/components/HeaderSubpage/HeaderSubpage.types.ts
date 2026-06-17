import type { ReactNode } from 'react';

import type { ButtonIconProps } from '../ButtonIcon';
import type { ListItemProps } from '../ListItem';

/**
 * HeaderSubpage component props.
 *
 * Subpage navigation row built on {@link ListItem} with optional back/close
 * shortcuts matching {@link HeaderStandard}.
 */
export type HeaderSubpageProps = Omit<
  ListItemProps,
  'startAccessory' | 'endAccessory' | 'isInteractive' | 'children'
> & {
  /**
   * Callback when the back button is pressed.
   * If provided, a back button will be rendered as the start accessory.
   */
  onBack?: () => void;
  /**
   * Additional props to pass to the back ButtonIcon.
   * If provided, a back button will be rendered with these props spread.
   */
  backButtonProps?: Omit<ButtonIconProps, 'iconName'>;
  /**
   * Callback when the close button is pressed.
   * If provided, a close button will be added to the end accessories.
   */
  onClose?: () => void;
  /**
   * Additional props to pass to the close ButtonIcon.
   * If provided, a close button will be added with these props spread.
   */
  closeButtonProps?: Omit<ButtonIconProps, 'iconName'>;
  /**
   * Optional ButtonIcon props to render as the start accessory.
   * Only used if `startAccessory` is not provided.
   */
  startButtonIconProps?: ButtonIconProps;
  /**
   * Optional array of ButtonIcon props to render as additional end accessories.
   * Rendered in reverse order (first item appears rightmost).
   * Only used if `endAccessory` is not provided.
   */
  endButtonIconProps?: ButtonIconProps[];
  /**
   * Optional content before the ListItem content row.
   * Takes priority over `startButtonIconProps` and back shortcuts.
   */
  startAccessory?: ReactNode;
  /**
   * Optional content after the ListItem content row.
   * Takes priority over `endButtonIconProps` and close shortcuts.
   */
  endAccessory?: ReactNode;
  /**
   * When true, applies top safe-area inset as `marginTop` on the root ListItem.
   *
   * @default false
   */
  includesTopInset?: boolean;
};
