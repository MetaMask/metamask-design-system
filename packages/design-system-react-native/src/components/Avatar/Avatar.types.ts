import type { AvatarPropsShared } from '@metamask/design-system-shared';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';

import type { AvatarBaseProps } from '../AvatarBase';

import type { AvatarIconProps } from './variants/AvatarIcon';
import type { AvatarImageOrSvgProps } from './variants/AvatarImageOrSvg';
import type { AvatarInitialsProps } from './variants/AvatarInitials';

type AvatarBaseShellProps = Omit<
  AvatarBaseProps,
  | 'children'
  | 'badge'
  | 'position'
  | 'positionXOffset'
  | 'positionYOffset'
  | 'customPosition'
>;

export type AvatarImageOrSvgVariantProps = AvatarImageOrSvgProps &
  Extract<AvatarPropsShared, { variant: 'imageOrSvg' }>;

export type AvatarIconVariantProps = AvatarIconProps &
  Extract<AvatarPropsShared, { variant: 'icon' }>;

export type AvatarInitialsVariantProps = AvatarInitialsProps &
  Extract<AvatarPropsShared, { variant: 'initials' }>;

export type AvatarProps =
  | AvatarImageOrSvgVariantProps
  | AvatarIconVariantProps
  | AvatarInitialsVariantProps;

export type AvatarViewProps = Omit<ViewProps, 'children'> & {
  twClassName?: string;
  style?: StyleProp<ViewStyle>;
};

export type { AvatarBaseShellProps };
