import type { AccountAvatarPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../AvatarBase';
import type { BlockiesProps } from '../temp-components/Blockies';
import type { JazziconProps } from '../temp-components/Jazzicon';
import type { PolyiconProps } from '../temp-components/Polyicon';

export type AccountAvatarProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
> &
  AccountAvatarPropsShared & {
    blockiesProps?: Partial<BlockiesProps>;
    jazziconProps?: Partial<JazziconProps>;
    polyiconProps?: Partial<PolyiconProps>;
    /** @deprecated Use polyiconProps */
    maskiconProps?: Partial<PolyiconProps>;
  } & Omit<ViewProps, 'children'> & {
    twClassName?: string;
    style?: StyleProp<ViewStyle>;
  };

/** @deprecated Use AccountAvatarProps */
export type AvatarAccountProps = AccountAvatarProps;
