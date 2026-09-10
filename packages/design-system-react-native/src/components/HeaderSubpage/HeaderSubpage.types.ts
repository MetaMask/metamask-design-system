import type { ReactNode } from 'react';

import type { BoxProps } from '../Box';
import type { ButtonIconProps } from '../ButtonIcon';
import type { ContentProps } from '../Content';

/**
 * HeaderSubpage component props.
 *
 * Subpage navigation row with optional back/close shortcuts matching
 * {@link HeaderStandard}. Uses Box and Content directly for a lightweight
 * header without ListItem's padding and min-height defaults.
 */
export type HeaderSubpageProps = Omit<BoxProps, 'children'> &
  Pick<
    ContentProps,
    | 'variant'
    | 'avatar'
    | 'title'
    | 'titleProps'
    | 'titleStartAccessory'
    | 'titleEndAccessory'
    | 'description'
    | 'descriptionProps'
    | 'descriptionStartAccessory'
    | 'descriptionEndAccessory'
    | 'value'
    | 'valueProps'
    | 'valueStartAccessory'
    | 'valueEndAccessory'
    | 'subvalue'
    | 'subvalueProps'
    | 'subvalueStartAccessory'
    | 'subvalueEndAccessory'
  > & {
    /**
     * Gap between row shell accessories and inner content.
     * Uses design-system spacing tokens (`BoxSpacing`); `2` is 8px.
     *
     * @default 2
     */
    accessoryGap?: BoxProps['gap'];
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
     * Optional content before the content row.
     * Takes priority over `startButtonIconProps` and back shortcuts.
     */
    startAccessory?: ReactNode;
    /**
     * Optional content after the content row.
     * Takes priority over `endButtonIconProps` and close shortcuts.
     */
    endAccessory?: ReactNode;
    /**
     * When true, applies top safe-area inset as `marginTop` on the root Box.
     *
     * @default false
     */
    includesTopInset?: boolean;
  };
