import type { TitleSubpagePropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { TextProps } from '../Text';

/**
 * Box prop bag for TitleSubpage layout slots. Mirrors HeaderBase / SectionHeader
 * wrappers so consumers can pass `data-testid` and other `data-*` attributes
 * through `Partial`/`Omit` indirection.
 */
type TitleSubpageBoxSlotProps = Omit<BoxProps, 'children' | 'asChild'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * Text prop bag for string slots. Allows `data-testid` through `Partial`/`Omit`.
 */
type TitleSubpageTextSlotProps = Omit<Partial<TextProps>, 'children'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * TitleSubpage component props (React).
 *
 * Extends {@link TitleSubpagePropsShared} (requires `title` and `titleAvatar`)
 * with React `Box` / `Text` passthroughs and `className` / `style` via
 * {@link BoxProps}.
 *
 * `title` is omitted from {@link BoxProps} because the DOM `title` attribute
 * conflicts with the TitleSubpage `title` ReactNode prop.
 */
export type TitleSubpageProps = Omit<BoxProps, 'children' | 'title'> &
  TitleSubpagePropsShared & {
    /**
     * Optional props spread onto the identity row {@link Box} after defaults
     * (row, centered items, `gap={4}`, `h-14`). Excludes `children`.
     */
    identityRowProps?: TitleSubpageBoxSlotProps;
    /**
     * Optional props spread onto the title/subtitle column {@link Box}.
     * Excludes `children`.
     */
    titleColumnProps?: TitleSubpageBoxSlotProps;
    /**
     * Optional props spread onto the bottom label row {@link Box} after
     * defaults (row, centered items, `gap={1}`). Excludes `children`.
     */
    bottomLabelWrapperProps?: TitleSubpageBoxSlotProps;
    /**
     * Optional props merged into the amount {@link Text} when `amount` is a string.
     */
    amountProps?: TitleSubpageTextSlotProps;
    /**
     * Optional props merged into the title {@link Text} when `title` is a string.
     */
    titleProps?: TitleSubpageTextSlotProps;
    /**
     * Optional props merged into the subtitle {@link Text} when `subtitle` is a string.
     */
    subtitleProps?: TitleSubpageTextSlotProps;
    /**
     * Optional props merged into the bottom label {@link Text} when `bottomLabel` is a string.
     */
    bottomLabelProps?: TitleSubpageTextSlotProps;
  };
