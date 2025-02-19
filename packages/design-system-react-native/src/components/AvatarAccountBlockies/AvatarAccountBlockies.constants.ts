import type { AvatarAccountBlockiesProps } from './AvatarAccountBlockies.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARACCOUNTBLOCKIES_PROPS: Required<
  Pick<AvatarAccountBlockiesProps, 'size' | 'shape'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
};
