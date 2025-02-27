import type { AvatarBaseProps } from './AvatarBase.types';
import { TextColor, TextVariant, FontWeight } from '../../components/Text';
import { AvatarBaseSize, AvatarBaseShape } from '../../shared/enums';

// Mappings
export const TWCLASSMAP_AVATARBASE_SIZE_SHAPE: Record<AvatarBaseSize, string> =
  {
    [AvatarBaseSize.Xs]: 'rounded-sm',
    [AvatarBaseSize.Sm]: 'rounded-md',
    [AvatarBaseSize.Md]: 'rounded-lg',
    [AvatarBaseSize.Lg]: 'rounded-[10px]',
    [AvatarBaseSize.Xl]: 'rounded-xl',
  };

// Defaults
export const DEFAULT_AVATARBASE_PROPS: Required<
  Pick<AvatarBaseProps, 'size' | 'shape' | 'fallbackTextProps'>
> = {
  size: AvatarBaseSize.Md,
  shape: AvatarBaseShape.Circle,
  fallbackTextProps: {
    color: TextColor.TextMuted,
    variant: TextVariant.BodySm,
    fontWeight: FontWeight.Medium,
    twClassName: 'uppercase',
  },
};
