// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';
import type { HeaderBaseProps } from '../HeaderBase';
import type { HeaderStandardCenterColumnFields } from '../temp-components/HeaderStandardCenterColumn';

/**
 * HeaderStandard component props.
 */
export type HeaderStandardProps = HeaderBaseProps &
  HeaderStandardCenterColumnFields & {
    /**
     * Callback when the back button is pressed.
     * If provided, a back button will be rendered as startButtonIconProps.
     */
    onBack?: () => void;
    /**
     * Additional props to pass to the back ButtonIcon.
     * If provided, a back button will be rendered as startButtonIconProps with these props spread.
     */
    backButtonProps?: Omit<ButtonIconProps, 'iconName'>;
    /**
     * Callback when the close button is pressed.
     * If provided, a close button will be added to endButtonIconProps.
     */
    onClose?: () => void;
    /**
     * Additional props to pass to the close ButtonIcon.
     * If provided, a close button will be added to endButtonIconProps with these props spread.
     */
    closeButtonProps?: Omit<ButtonIconProps, 'iconName'>;
  };
