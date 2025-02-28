import type { AvatarFaviconProps } from './AvatarFavicon.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARFAVICON_PROPS: Required<
  Pick<AvatarFaviconProps, 'size' | 'shape' | 'width' | 'height'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
  width: '100%',
  height: '100%',
};
