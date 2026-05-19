import type { NFTAvatarPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../AvatarBase';
import type {
  ImageOrSvgProps,
  ImageOrSvgSrc,
} from '../temp-components/ImageOrSvg';

export type NFTAvatarProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
> &
  NFTAvatarPropsShared & {
    src?: ImageOrSvgSrc | number;
    imageOrSvgProps?: Partial<ImageOrSvgProps>;
  } & Omit<ViewProps, 'children'> & {
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };
