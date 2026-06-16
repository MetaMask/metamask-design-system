import type {
  AvatarIconVariantPropsShared,
  IconColor,
} from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../../../AvatarBase';
import type { IconProps } from '../../../Icon';

export type AvatarIconProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
> &
  Omit<AvatarIconVariantPropsShared, 'variant' | 'iconColor'> & {
    iconColor: IconColor;
    iconProps?: Partial<IconProps>;
  } & Omit<ViewProps, 'children'> & {
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };
