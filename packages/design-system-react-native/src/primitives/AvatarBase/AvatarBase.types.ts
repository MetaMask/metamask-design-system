import type { ViewProps, StyleProp, ViewStyle } from 'react-native';
import type { TextProps } from 'src/components/Text/Text.types';

import type { IconProps, IconName } from '../../components/Icon';
import type { SpinnerProps } from '../../temp-components/Spinner';

export enum AvatarBaseSize {
  /**
   * Represents an extra small avatar size (16px).
   */
  Xs = '16',
  /**
   * Represents a small avatar size (24px).
   */
  Sm = '24',
  /**
   * Represents a medium avatar size (32px).
   */
  Md = '32',
  /**
   * Represents a large avatar size (40px).
   */
  Lg = '40',
  /**
   * Represents an extra large avatar size (48px).
   */
  Xl = '48',
}

export enum AvatarBaseShape {
  /**
   * Represents a circular Avatar.
   */
  Circle = 'circle',
  /**
   * Represents a squared Avatar
   */
  Square = 'square',
}

/**
 * AvatarBase component props.
 */
export type AvatarBaseProps = {
  /**
   * Required prop for the content to be rendered within the AvatarBase
   */
  children: React.ReactNode;
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
  size?: AvatarBaseSize;
  /**
   * Optional prop to control the shape of the AvatarBase
   * Possible values:
   * - AvatarBaseShape.Circle
   * - AvatarBaseShape.Square
   * @default AvatarBaseShape.Circle
   */
  shape?: AvatarBaseShape;
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
   * Optional icon to be rendered when the content fails to render
   * and there's no fallbackText
   */
  fallbackIcon?: IconName;
  /**
   * Optional props to be passed to the fallbackIcon when the content
   * fails to render and there's no fallbackText
   */
  fallbackIconProps?: Omit<IconProps, 'name'>;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & ViewProps;
