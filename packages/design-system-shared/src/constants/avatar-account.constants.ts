import { AvatarAccountSize } from '../types/avatar-account.types';

/**
 * Size to pixel mapping for AvatarAccount components
 * 
 * This mapping is used by both React and React Native to convert
 * size enum values to pixel numbers for inner avatar art components.
 */
export const AVATAR_ACCOUNT_SIZE_TO_PIXELS: Record<AvatarAccountSize, number> = {
  [AvatarAccountSize.Xs]: 16,
  [AvatarAccountSize.Sm]: 24,
  [AvatarAccountSize.Md]: 32,
  [AvatarAccountSize.Lg]: 40,
  [AvatarAccountSize.Xl]: 48,
};