import type { ViewProps, StyleProp, ViewStyle } from 'react-native';
import type { TextProps } from '../../components/Text/Text.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

/**
 * AvatarBase component props.
 */
export type AvatarBaseProps = {
  /**
   * Required prop for the content to be rendered within the AvatarBase
   */
  children?: React.ReactNode;
  /**
   * Optional prop to control the size of the AvatarBase
   * Possible values:
   *   AvatarBaseSize.Xs (16px),
   * - AvatarBaseSize.Sm (24px),
   * - AvatarBaseSize.Md (32px).
   * - AvatarBaseSize.Lg (40px),
   * - AvatarBaseSize.Xl (48px),
   * @default AvatarBaseSize.Md
   */
  size?: AvatarSize;
  /**
   * Optional prop to control the shape of the AvatarBase
   * Possible values:
   * - AvatarShape.Circle
   * - AvatarShape.Square
   * @default AvatarShape.Circle
   */
  shape?: AvatarShape;
  /**
   * Optional text to be rendered when the content fails to render
   */
  fallbackText?: string;
  /**
   * Optional props to be passed to the fallbackText when the content
   * fails to render
   */
  fallbackTextProps?: Omit<TextProps, 'children'>;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & ViewProps;
