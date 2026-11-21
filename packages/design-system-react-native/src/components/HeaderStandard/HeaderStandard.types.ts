// External dependencies.
import type { HeaderStandardPropsShared } from '@metamask/design-system-shared';

import type { ButtonIconProps } from '../ButtonIcon';
import type { HeaderBaseProps } from '../HeaderBase';
import type { TextProps } from '../Text';

/**
 * HeaderStandard component props.
 *
 * Extends {@link HeaderBaseProps} and {@link HeaderStandardPropsShared} with
 * React Native `Text` / `ButtonIcon` passthroughs for title, subtitle, and
 * back/close shortcuts.
 */
export type HeaderStandardProps = Omit<HeaderBaseProps, 'children'> &
  HeaderStandardPropsShared & {
    /**
     * Additional props to pass to the title Text component.
     * Props are spread to the Text component and can override default values.
     * Only applied when title is a string.
     */
    titleProps?: Partial<TextProps>;
    /**
     * Additional props to pass to the subtitle Text component.
     * Props are spread to the Text component and can override default values.
     * Only applied when subtitle is a string.
     */
    subtitleProps?: Partial<TextProps>;
    /**
     * Additional props to pass to the back ButtonIcon.
     * If provided, a back button will be rendered as startButtonIconProps with these props spread.
     */
    backButtonProps?: Omit<ButtonIconProps, 'iconName'>;
    /**
     * Additional props to pass to the close ButtonIcon.
     * If provided, a close button will be added to endButtonIconProps with these props spread.
     */
    closeButtonProps?: Omit<ButtonIconProps, 'iconName'>;
  };
