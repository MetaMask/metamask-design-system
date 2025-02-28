import type { AvatarAccountProps } from './AvatarAccount.types';
import { AvatarAccountVariant } from './AvatarAccount.types';
import { AvatarAccountSize, AvatarBaseShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARACCOUNT_PROPS: Required<
  Pick<AvatarAccountProps, 'size' | 'shape' | 'variant'>
> = {
  size: AvatarAccountSize.Md,
  shape: AvatarBaseShape.Circle,
  variant: AvatarAccountVariant.Jazzicon,
};
