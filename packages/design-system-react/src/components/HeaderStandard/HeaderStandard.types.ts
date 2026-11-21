import type { HeaderStandardPropsShared } from '@metamask/design-system-shared';

import type { ButtonIconProps } from '../ButtonIcon';
import type { HeaderBaseProps } from '../HeaderBase';
import type { TextProps } from '../Text';

/**
 * HeaderStandard component props (React platform-specific).
 *
 * Extends {@link HeaderStandardPropsShared} and {@link HeaderBaseProps} with
 * React `Text` / `ButtonIcon` passthroughs. Convenience props (`onBack`,
 * `onClose`, `startButtonIconProps`, `endButtonIconProps`) resolve to
 * `HeaderBase` accessories; explicit `startAccessory` / `endAccessory` win.
 *
 * React `ButtonIcon` requires `ariaLabel`. Defaults: `"Back"` / `"Close"` for
 * the shortcut buttons when not provided via `backButtonProps` /
 * `closeButtonProps`.
 */
export type HeaderStandardProps = Omit<HeaderBaseProps, 'children' | 'title'> &
  HeaderStandardPropsShared & {
    /**
     * Optional props merged into {@link Text} when `title` is a string.
     */
    titleProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional props merged into {@link Text} when `subtitle` is a string.
     */
    subtitleProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Additional props for the back `ButtonIcon` (excluding `iconName`).
     * Supplying this object also shows the back button when
     * `startButtonIconProps` / `startAccessory` are not set.
     */
    backButtonProps?: Omit<ButtonIconProps, 'iconName'>;
    /**
     * Additional props for the close `ButtonIcon` (excluding `iconName`).
     * Supplying this object also shows the close button when `endAccessory`
     * is not set.
     */
    closeButtonProps?: Omit<ButtonIconProps, 'iconName'>;
    /**
     * Optional `ButtonIcon` props for the start accessory.
     * Takes priority over `onBack` / `backButtonProps`. Only used when
     * `startAccessory` is not provided.
     */
    startButtonIconProps?: ButtonIconProps;
    /**
     * Optional array of `ButtonIcon` props for end accessories.
     * Rendered in reverse order (first item rightmost), after the close
     * button when `onClose` / `closeButtonProps` are set. Only used when
     * `endAccessory` is not provided.
     */
    endButtonIconProps?: ButtonIconProps[];
  };
