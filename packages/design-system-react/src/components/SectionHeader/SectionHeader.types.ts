import type { SectionHeaderPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

/**
 * Box prop bag for the inner title row. Mirrors HeaderBase slot wrappers so
 * consumers can pass `data-testid` and other `data-*` attributes through
 * `Partial`/`Omit` indirection.
 */
type TitleWrapperProps = Omit<BoxProps, 'children' | 'asChild'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * SectionHeader component props (React platform-specific).
 *
 * Extends {@link SectionHeaderPropsShared} with React `Text` / `Icon` /
 * `Box` passthroughs and `className` / `style` via {@link BoxProps}.
 * When `isInteractive` is `true`, the root is a focusable, clickable `Box`
 * with `role="button"` and `hover:bg-hover` / `active:bg-pressed` feedback.
 *
 * `title` is omitted from {@link BoxProps} because the DOM `title` attribute
 * conflicts with the SectionHeader `title` ReactNode prop.
 */
export type SectionHeaderProps = Omit<BoxProps, 'children' | 'title'> &
  SectionHeaderPropsShared & {
    /**
     * Optional props merged into {@link Text} when `title` is a string.
     */
    titleProps?: Omit<Partial<TextProps>, 'children'>;
    /**
     * Optional props spread onto the title row {@link Box}.
     * Omits `children` (SectionHeader sets those via `title` / `titleAccessory`).
     */
    titleWrapperProps?: TitleWrapperProps;
    /**
     * Optional prop to pass additional properties to the start icon.
     */
    startIconProps?: Omit<Partial<IconProps>, 'name'>;
    /**
     * Optional prop to pass additional properties to the end icon.
     */
    endIconProps?: Omit<Partial<IconProps>, 'name'>;
    /**
     * When `true`, the root is interactive (`role="button"`, keyboard
     * activation, pressed opacity). Defaults end icon to `ArrowRight` when
     * no end icon or `endAccessory` is provided.
     *
     * @default false
     */
    isInteractive?: boolean;
    /**
     * When `true` with `isInteractive`, ignores click/keyboard activation and
     * sets `aria-disabled`.
     */
    disabled?: boolean;
  };
