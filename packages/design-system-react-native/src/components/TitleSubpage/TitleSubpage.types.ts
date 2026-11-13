// Third party dependencies.
import type { TitleSubpagePropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxProps } from '../Box/Box.types';
import type { TextProps } from '../Text/Text.types';

/**
 * TitleSubpage component props (React Native).
 * Extends {@link TitleSubpagePropsShared} (requires `title` and `titleAvatar`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleSubpageProps = TitleSubpagePropsShared & {
  /**
   * Optional props spread onto the identity row {@link Box} (a row with centered items, `gap={4}`, and `h-14` by default; values here override those defaults). Excludes `children`, which the component owns.
   */
  identityRowProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props spread onto the title/subtitle column {@link Box} (excluding `children`, which the component owns).
   */
  titleColumnProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props spread onto the bottom label row {@link Box} (a row with centered items and `gap={1}` by default; values here override those defaults). Excludes `children`, which the component owns.
   */
  bottomLabelWrapperProps?: Omit<Partial<BoxProps>, 'children'>;
  /**
   * Optional props merged into the amount `Text` when `amount` is a string.
   */
  amountProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props merged into the title `Text` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props merged into the subtitle `Text` when `subtitle` is a string.
   */
  subtitleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props merged into the bottom label `Text` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional Tailwind class name to apply to the container.
   *
   * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
   */
  twClassName?: string;
  /**
   * Tailwind classes from `@metamask/design-system-twrnc-preset`.
   * Applied after `twClassName` when both are set, so these classes win.
   */
  className?: string;
} & Omit<ViewProps, 'children'>;
