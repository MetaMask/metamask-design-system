// Third party dependencies.
import type { TitleStandardPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Internal dependencies.
import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import type { TextProps } from '../Text/Text.types';

type BoxRowWrapperProps = Omit<
  Partial<BoxRowProps>,
  'children' | 'textProps' | 'endAccessory'
>;

/**
 * TitleStandard component props (React Native).
 * Extends {@link TitleStandardPropsShared} (requires `title`) with platform `Text` passthroughs, `twClassName`, and `View` props.
 */
export type TitleStandardProps = TitleStandardPropsShared & {
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `title` is a string.
   */
  titleProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props forwarded to the title row {@link BoxRow} (excluding `children`, `textProps`, and `endAccessory`, which are controlled by this component).
   */
  titleWrapperProps?: BoxRowWrapperProps;
  /**
   * Optional props merged into {@link BoxRow} `textProps` when `bottomLabel` is a string.
   */
  bottomLabelProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional props forwarded to the bottom label row {@link BoxRow} when `bottomLabel` is renderable (excluding `children`, `textProps`, and `endAccessory`, which are controlled by this component).
   */
  bottomLabelWrapperProps?: BoxRowWrapperProps;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
} & Omit<ViewProps, 'children'>;
