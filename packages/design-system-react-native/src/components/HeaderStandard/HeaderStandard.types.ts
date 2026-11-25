// External dependencies.
import type { HeaderStandardPropsShared } from '@metamask/design-system-shared';

import type { ButtonIconProps } from '../ButtonIcon';
import type { HeaderBaseProps } from '../HeaderBase';
import type { HeaderStandardCenterColumnFields } from '../temp-components/HeaderStandardCenterColumn';

/**
 * HeaderStandard component props.
 *
 * Extends {@link HeaderBaseProps} and {@link HeaderStandardPropsShared} with
 * React Native `Text` / `ButtonIcon` passthroughs for title, subtitle, and
 * back/close shortcuts. `titleProps` / `subtitleProps` come from
 * {@link HeaderStandardCenterColumnFields} so their docs have a single source.
 */
export type HeaderStandardProps = Omit<HeaderBaseProps, 'children'> &
  HeaderStandardPropsShared &
  Omit<HeaderStandardCenterColumnFields, 'title' | 'subtitle'> & {
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
