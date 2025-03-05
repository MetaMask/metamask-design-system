import type { AvatarNetworkProps } from './AvatarNetwork.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARNETWORK_PROPS: Required<
  Pick<AvatarNetworkProps, 'size' | 'shape' | 'width' | 'height'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Square,
  width: '100%',
  height: '100%',
};
