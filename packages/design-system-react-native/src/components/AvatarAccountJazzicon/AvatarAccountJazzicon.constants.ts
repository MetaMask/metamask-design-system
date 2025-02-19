import type { AvatarAccountJazziconProps } from './AvatarAccountJazzicon.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARACCOUNTJAZZICON_PROPS: Required<
  Pick<AvatarAccountJazziconProps, 'size' | 'shape'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
};
