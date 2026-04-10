// Third party dependencies.
import type { TitleStandardPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { TextProps } from '../Text/Text.types';

/**
 * TitleStandard component props (React Native).
 * Extends {@link TitleStandardPropsShared} (requires `title`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleStandardProps = TitleStandardPropsShared & {
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `title` is a string.
   */
  titleProps?: Partial<TextProps>;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Partial<TextProps>;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
