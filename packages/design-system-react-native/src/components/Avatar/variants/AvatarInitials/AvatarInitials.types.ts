import type { AvatarInitialsPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../../../AvatarBase';
import type { TextProps } from '../../../Text';

export type AvatarInitialsProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
> &
  Omit<AvatarInitialsPropsShared, 'variant'> &
  Omit<ViewProps, 'children'> & {
    textProps?: Omit<TextProps, 'children'>;
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };
