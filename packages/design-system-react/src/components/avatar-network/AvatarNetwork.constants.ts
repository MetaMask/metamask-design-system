import { AvatarBaseSize } from '../avatar-base';
import { AvatarNetworkSize } from './AvatarNetwork.types';

export const AVATAR_NETWORK_TO_AVATAR_BASE_SIZE_MAP: Record<
  AvatarNetworkSize,
  AvatarBaseSize
> = {
  [AvatarNetworkSize.Xs]: AvatarBaseSize.Xs,
  [AvatarNetworkSize.Sm]: AvatarBaseSize.Sm,
  [AvatarNetworkSize.Md]: AvatarBaseSize.Md,
  [AvatarNetworkSize.Lg]: AvatarBaseSize.Lg,
  [AvatarNetworkSize.Xl]: AvatarBaseSize.Xl,
};
