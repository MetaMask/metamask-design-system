import type {
  AvatarBadge,
  AvatarBasePropsShared,
  BadgeWrapperCustomPosition,
  BadgeWrapperPosition,
} from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

/**
 * AvatarBase component props.
 */
export type AvatarBaseProps = AvatarBasePropsShared &
  Omit<ViewProps, 'children'> & {
    badge?: AvatarBadge;
    position?: BadgeWrapperPosition;
    positionXOffset?: number;
    positionYOffset?: number;
    customPosition?: BadgeWrapperCustomPosition;
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };
