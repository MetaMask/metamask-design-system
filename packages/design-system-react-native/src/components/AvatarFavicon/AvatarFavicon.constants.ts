import type { AvatarFaviconProps } from './AvatarFavicon.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARFAVICON_PROPS: Required<
  Pick<AvatarFaviconProps, 'size' | 'shape'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
};
