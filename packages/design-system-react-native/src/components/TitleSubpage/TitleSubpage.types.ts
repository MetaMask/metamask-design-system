// Third party dependencies.
import type { TitleSubpagePropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { TextProps } from '../Text/Text.types';

/**
 * TitleSubpage component props (React Native).
 * Extends {@link TitleSubpagePropsShared} (requires `title` and `titleAvatar`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleSubpageProps = TitleSubpagePropsShared & {
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `amount` is a string.
   */
  amountProps?: Partial<TextProps>;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `title` is a string.
   */
  titleProps?: Partial<TextProps>;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `subtitle` is a string.
   */
  subtitleProps?: Partial<TextProps>;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Partial<TextProps>;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
