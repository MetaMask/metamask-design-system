import type {
  AvatarBaseShape,
  IconAvatarPropsShared,
} from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../AvatarBase';
import type { IconProps } from '../Icon';

export type IconAvatarProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
> &
  IconAvatarPropsShared & {
    shape?: AvatarBaseShape;
    iconProps?: Partial<IconProps>;
  } & Omit<ViewProps, 'children'> & {
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };

/** @deprecated Use IconAvatarProps — severity-based icon avatar */
export type AvatarIconProps = IconAvatarProps;
