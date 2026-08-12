import type { HeaderRootPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextProps } from '../Text';

/**
 * HeaderRoot component props (React platform-specific).
 *
 * Extends {@link HeaderRootPropsShared} with React `Text` / `ButtonIcon`
 * passthroughs and `className` / `style` via {@link BoxProps}.
 *
 * `title` is omitted from {@link BoxProps} because the DOM `title` attribute
 * conflicts with the HeaderRoot `title` ReactNode prop.
 */
export type HeaderRootProps = Omit<BoxProps, 'children' | 'title'> &
  HeaderRootPropsShared & {
    /**
     * Optional props merged into {@link Text} when `title` is a string.
     */
    titleProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional array of ButtonIcon props to render multiple ButtonIcons as end accessories.
     * Rendered in reverse order (first item appears rightmost).
     * Only used if `endAccessory` is not provided.
     *
     * React `ButtonIcon` requires `ariaLabel` for accessibility.
     */
    endButtonIconProps?: ButtonIconProps[];
  };
