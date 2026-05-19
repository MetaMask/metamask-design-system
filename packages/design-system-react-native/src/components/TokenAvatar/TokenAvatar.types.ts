import type { TokenAvatarPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../AvatarBase';
import type {
  ImageOrSvgProps,
  ImageOrSvgSrc,
} from '../temp-components/ImageOrSvg';

export type TokenAvatarProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
> &
  TokenAvatarPropsShared & {
    src?: ImageOrSvgSrc | number;
    imageOrSvgProps?: Partial<ImageOrSvgProps>;
  } & Omit<ViewProps, 'children'> & {
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };

/** @deprecated Use TokenAvatarProps */
export type AvatarTokenProps = TokenAvatarProps;
