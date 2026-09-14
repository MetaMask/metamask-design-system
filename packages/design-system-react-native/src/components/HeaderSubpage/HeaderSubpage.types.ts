import type { HeaderSubpagePropsShared } from '@metamask/design-system-shared';

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
  | 'startAccessory'
  | 'endAccessory'
  | 'isInteractive'
  | 'children'
  | keyof HeaderSubpagePropsShared
> &
  HeaderSubpagePropsShared & {
    /**
     * Additional props to pass to the back ButtonIcon.
     * If provided, a back button will be rendered with these props spread.
     */
    backButtonProps?: Omit<ButtonIconProps, 'iconName'>;
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
     * When true, applies top safe-area inset as `marginTop` on the root ListItem.
     *
     * @default false
     */
    includesTopInset?: boolean;
  };
