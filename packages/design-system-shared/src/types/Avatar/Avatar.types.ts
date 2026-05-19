import type { ReactNode } from 'react';

import type {
  AvatarBaseShape,
  AvatarBaseSize,
} from '../AvatarBase/AvatarBase.types';
import type { BadgeStatusStatus } from '../BadgeStatus/BadgeStatus.types';
import type {
  BadgeWrapperCustomPosition,
  BadgeWrapperPosition,
} from '../BadgeWrapper/BadgeWrapper.types';
import type { AvatarIconSeverity } from '../AvatarIcon/AvatarIcon.types';
import type { IconName } from '../Icon/Icon.types';

/**
 * Minimal image source for avatar badges and remote images.
 */
export type AvatarImageSrc = { uri?: string };

/**
 * Avatar badge discriminated union.
 */
export type AvatarBadge =
  | {
      type: 'network';
      src?: AvatarImageSrc | number;
      name?: string;
      fallbackText?: string;
    }
  | { type: 'status'; status: BadgeStatusStatus }
  | { type: 'icon'; iconName: IconName }
  | { type: 'custom'; element: ReactNode };

/**
 * Props shared by all Avatar union variants.
 */
export type AvatarCommonPropsShared = {
  size?: AvatarBaseSize;
  shape?: AvatarBaseShape;
  hasBorder?: boolean;
  badge?: AvatarBadge;
  position?: BadgeWrapperPosition;
  positionXOffset?: number;
  positionYOffset?: number;
  customPosition?: BadgeWrapperCustomPosition;
  testID?: string;
  accessibilityLabel?: string;
};

export type AvatarImageOrSvgPropsShared = AvatarCommonPropsShared & {
  variant: 'imageOrSvg';
  src: AvatarImageSrc | number;
  fallbackLabel?: string;
};

export type AvatarIconVariantPropsShared = AvatarCommonPropsShared & {
  variant: 'icon';
  iconName: IconName;
  backgroundColor: string;
  iconColor: string;
};

export type AvatarInitialsPropsShared = AvatarCommonPropsShared & {
  variant: 'initials';
  label: string;
};

export type AvatarPropsShared =
  | AvatarImageOrSvgPropsShared
  | AvatarIconVariantPropsShared
  | AvatarInitialsPropsShared;

/**
 * Domain IconAvatar (severity-based) shared props.
 */
export type IconAvatarPropsShared = {
  iconName: IconName;
  size?: AvatarBaseSize;
  severity?: AvatarIconSeverity;
};
