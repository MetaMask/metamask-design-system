// Third party dependencies.
import type { TitleHubPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { TextProps } from '../Text/Text.types';

/**
 * TitleHub component props (React Native).
 * Extends {@link TitleHubPropsShared} (requires `title`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleHubProps = TitleHubPropsShared & {
  /**
   * Optional props merged into {@link BoxHorizontal} `textProps` when `amount` is a string.
   */
  amountProps?: Partial<TextProps>;
  /**
   * Optional props merged into {@link BoxHorizontal} `textProps` when `title` is a string.
   */
  titleProps?: Partial<TextProps>;
  /**
   * Optional props merged into {@link BoxHorizontal} `textProps` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Partial<TextProps>;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
