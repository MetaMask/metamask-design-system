import type {
  AlertAvatarPropsShared,
  AvatarBaseShape,
} from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../AvatarBase';
import type { IconProps } from '../Icon';

export type AlertAvatarProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
> &
  AlertAvatarPropsShared & {
    shape?: AvatarBaseShape;
    iconProps?: Partial<IconProps>;
  } & Omit<ViewProps, 'children'> & {
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };

/** @deprecated Use AlertAvatarProps — severity-based icon avatar */
export type IconAvatarProps = AlertAvatarProps;

/** @deprecated Use AlertAvatarProps — severity-based icon avatar */
export type AvatarIconProps = AlertAvatarProps;
