import type { TitleSubpagePropsShared } from '@metamask/design-system-shared';

import type { BoxProps } from '../Box';
import type { SensitiveTextProps } from '../SensitiveText';

/**
 * Box prop bag for TitleSubpage layout slots. Mirrors HeaderBase / SectionHeader
 * wrappers so consumers can pass `data-testid` and other `data-*` attributes
 * through `Partial`/`Omit` indirection.
 */
type TitleSubpageBoxSlotProps = Omit<BoxProps, 'children' | 'asChild'> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * SensitiveText prop bag for string slots. Allows `data-testid` through
 * `Partial`/`Omit`, and exposes `isHidden` / `length` so a string slot can be
 * privacy-masked like on React Native. `asChild` is omitted: string slots
 * render their own semantic element (the amount is a `p`), and an override
 * would silently change that.
 */
type TitleSubpageTextSlotProps = Omit<
  Partial<SensitiveTextProps>,
  'children' | 'asChild'
> & {
  [key: `data-${string}`]: string | undefined;
};

/**
 * TitleSubpage component props (React).
 *
 * Extends {@link TitleSubpagePropsShared} (requires `title` and `titleAvatar`)
 * with React `Box` / `SensitiveText` passthroughs and `className` / `style` via
 * {@link BoxProps}.
 *
 * `title` is omitted from {@link BoxProps} because the DOM `title` attribute
 * conflicts with the TitleSubpage `title` ReactNode prop. `asChild` is omitted
 * because the root renders several rows and a Radix `Slot` cannot merge onto
 * more than one child.
 */
export type TitleSubpageProps = Omit<
  BoxProps,
  'children' | 'title' | 'asChild'
> &
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
     * Optional props merged into the amount {@link SensitiveText} when `amount`
     * is a string; `isHidden: true` masks it like on React Native.
     */
    amountProps?: TitleSubpageTextSlotProps;
    /**
     * Optional props merged into the title {@link SensitiveText} when `title`
     * is a string.
     */
    titleProps?: TitleSubpageTextSlotProps;
    /**
     * Optional props merged into the subtitle {@link SensitiveText} when
     * `subtitle` is a string.
     */
    subtitleProps?: TitleSubpageTextSlotProps;
    /**
     * Optional props merged into the bottom label {@link SensitiveText} when
     * `bottomLabel` is a string.
     */
    bottomLabelProps?: TitleSubpageTextSlotProps;
  };
