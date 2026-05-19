import type { AvatarImageSrc } from './Avatar.types';
import type { BadgeStatusStatus } from '../BadgeStatus/BadgeStatus.types';
import type { IconName } from '../Icon/Icon.types';

export type AvatarNetworkBadgeShared = {
  src?: AvatarImageSrc | number;
  name?: string;
  fallbackText?: string;
};

export type AvatarIconBadgeShared = {
  iconName: IconName;
};

export type AvatarStatusBadgeShared = {
  status: BadgeStatusStatus;
};
