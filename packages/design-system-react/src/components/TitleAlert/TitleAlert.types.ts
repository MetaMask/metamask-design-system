import type { TitleAlertPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { TextProps } from '../Text';

/**
 * Box prop bag for TitleAlert layout slots. Mirrors TitleStandard / SectionHeader
 * wrappers so consumers can pass `data-testid` and other `data-*` attributes
 * through `Partial`/`Omit` indirection.
 */
type TitleAlertBoxSlotProps = Omit<BoxProps, 'children' | 'asChild'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * Text prop bag for string slots. Allows `data-testid` through `Partial`/`Omit`.
 */
type TitleAlertTextSlotProps = Omit<Partial<TextProps>, 'children'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * TitleAlert component props (React).
 *
 * Extends {@link TitleAlertPropsShared} (requires `severity` and `title`) with
 * React `Box` / `Text` passthroughs and `className` / `style` via {@link BoxProps}.
 *
 * `title` is omitted from {@link BoxProps} because the DOM `title` attribute
 * conflicts with the TitleAlert `title` ReactNode prop.
 */
export type TitleAlertProps = Omit<BoxProps, 'children' | 'title'> &
  TitleAlertPropsShared & {
    /**
     * Optional props spread onto the title row {@link Box} after defaults
     * (row, centered items, `gap={1}`, centered main-axis alignment,
     * `self-stretch`). Excludes `children`.
     */
    titleWrapperProps?: TitleAlertBoxSlotProps;
    /**
     * Optional props merged into the title {@link Text} when `title` is a string
     * or number.
     */
    titleProps?: TitleAlertTextSlotProps;
    /**
     * Optional props merged into the description {@link Text} when `description`
     * is a string or number.
     */
    descriptionProps?: TitleAlertTextSlotProps;
  };
