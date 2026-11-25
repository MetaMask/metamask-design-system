import type { TitleStandardPropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { TextProps } from '../Text';

/**
 * Box prop bag for TitleStandard layout slots. Mirrors HeaderBase / SectionHeader
 * wrappers so consumers can pass `data-testid` and other `data-*` attributes
 * through `Partial`/`Omit` indirection.
 */
type TitleStandardBoxSlotProps = Omit<BoxProps, 'children' | 'asChild'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * Text prop bag for string slots. Allows `data-testid` through `Partial`/`Omit`.
 */
type TitleStandardTextSlotProps = Omit<Partial<TextProps>, 'children'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * TitleStandard component props (React).
 *
 * Extends {@link TitleStandardPropsShared} (requires `title`) with React
 * `Box` / `Text` passthroughs and `className` / `style` via {@link BoxProps}.
 *
 * `title` is omitted from {@link BoxProps} because the DOM `title` attribute
 * conflicts with the TitleStandard `title` ReactNode prop.
 */
export type TitleStandardProps = Omit<BoxProps, 'children' | 'title'> &
  TitleStandardPropsShared & {
    /**
     * Optional props merged into the title {@link Text} when `title` is a string.
     */
    titleProps?: TitleStandardTextSlotProps;
    /**
     * Optional props spread onto the title row {@link Box} after defaults
     * (row, centered items, `gap={2}`). Excludes `children`.
     */
    titleWrapperProps?: TitleStandardBoxSlotProps;
    /**
     * Optional props merged into the bottom label {@link Text} when `bottomLabel` is a string.
     */
    bottomLabelProps?: TitleStandardTextSlotProps;
    /**
     * Optional props spread onto the bottom label row {@link Box} after
     * defaults (row, centered items, `gap={2}`). Excludes `children`.
     */
    bottomLabelWrapperProps?: TitleStandardBoxSlotProps;
  };
