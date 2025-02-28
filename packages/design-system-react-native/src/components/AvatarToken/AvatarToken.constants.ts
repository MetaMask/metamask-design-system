import type { AvatarTokenProps } from './AvatarToken.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARTOKEN_PROPS: Required<
  Pick<AvatarTokenProps, 'size' | 'shape' | 'width' | 'height'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
  width: '100%',
  height: '100%',
};
