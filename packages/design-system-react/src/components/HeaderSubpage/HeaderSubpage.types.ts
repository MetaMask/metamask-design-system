import type { ComponentProps, ReactNode } from 'react';

import type { ButtonIconProps } from '../ButtonIcon';
import type { HeaderBaseProps } from '../HeaderBase';

/**
 * Props for back/close ButtonIcons that override iconName and make ariaLabel optional.
 * The component provides default ariaLabels ("Go back", "Close").
 */
type NavigationButtonIconProps = Partial<
  Omit<ButtonIconProps, 'iconName'>
> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * HeaderSubpage component props.
 *
 * Subpage navigation header built on {@link HeaderBase} with optional back/close
 * button shortcuts. Provides a consistent header pattern for secondary screens
 * and modal-style navigation flows.
 */
export type HeaderSubpageProps = Omit<
  HeaderBaseProps,
  'startAccessory' | 'endAccessory'
> &
  ComponentProps<'div'> & {
    /**
     * Callback when the back button is pressed.
     * If provided, a back button will be rendered as the start accessory.
     */
    onBack?: () => void;
    /**
     * Additional props to pass to the back ButtonIcon.
     * If provided, a back button will be rendered with these props spread.
     */
    backButtonProps?: NavigationButtonIconProps;
    /**
     * Callback when the close button is pressed.
     * If provided, a close button will be added to the end accessories.
     */
    onClose?: () => void;
    /**
     * Additional props to pass to the close ButtonIcon.
     * If provided, a close button will be added with these props spread.
     */
    closeButtonProps?: NavigationButtonIconProps;
    /**
     * Optional ButtonIcon props to render as the start accessory.
     * Only used if `startAccessory` is not provided.
     */
    startButtonIconProps?: ButtonIconProps & {
      [key: `data-${string}`]: string | undefined;
    };
    /**
     * Optional array of ButtonIcon props to render as additional end accessories.
     * Rendered in reverse order (first item appears rightmost).
     * Only used if `endAccessory` is not provided.
     */
    endButtonIconProps?: (ButtonIconProps & {
      [key: `data-${string}`]: string | undefined;
    })[];
    /**
     * Optional content before the children content.
     * Takes priority over `startButtonIconProps` and back shortcuts.
     */
    startAccessory?: ReactNode;
    /**
     * Optional content after the children content.
     * Takes priority over `endButtonIconProps` and close shortcuts.
     */
    endAccessory?: ReactNode;
    /**
     * Optional prop for additional CSS classes to be applied to the HeaderSubpage component.
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     */
    style?: React.CSSProperties;
  };
