import type { AvatarBaseProps } from './AvatarBase.types';
import { AvatarBaseSize, AvatarBaseShape } from './AvatarBase.types';
import { TextColor, TextVariant, FontWeight } from '../../components/Text';
import { IconColor } from '../../components/Icon';

// Mappings
export const TWCLASSMAP_AVATARBASE_SHAPE: Record<AvatarBaseSize, string> = {
  [AvatarBaseSize.Xs]: 'rounded-[4px]',
  [AvatarBaseSize.Sm]: 'rounded-[6px]',
  [AvatarBaseSize.Md]: 'rounded-[8px]',
  [AvatarBaseSize.Lg]: 'rounded-[10px]',
  [AvatarBaseSize.Xl]: 'rounded-[12px]',
};

// Defaults
export const DEFAULT_AVATARBASE_PROPS: Required<
  Pick<
    AvatarBaseProps,
    'size' | 'shape' | 'fallbackTextProps' | 'fallbackIconProps'
  >
> = {
  size: AvatarBaseSize.Md,
  shape: AvatarBaseShape.Circle,
  fallbackTextProps: {
    color: TextColor.PrimaryInverse,
    variant: TextVariant.BodySm,
    fontWeight: FontWeight.Medium,
  },
  fallbackIconProps: {
    color: IconColor.PrimaryInverse,
  },
};
