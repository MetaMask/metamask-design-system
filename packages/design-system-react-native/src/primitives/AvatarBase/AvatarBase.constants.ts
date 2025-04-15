import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import type { AvatarBaseProps } from './AvatarBase.types';
import { TextColor, TextVariant, FontWeight } from '../../components/Text';

// Mappings
export const TWCLASSMAP_AVATARBASE_SIZE_SHAPE: Record<AvatarBaseSize, string> =
  {
    [AvatarBaseSize.Xs]: 'rounded-sm',
    [AvatarBaseSize.Sm]: 'rounded-md',
    [AvatarBaseSize.Md]: 'rounded-lg',
    [AvatarBaseSize.Lg]: 'rounded-[10px]',
    [AvatarBaseSize.Xl]: 'rounded-xl',
  };
export const MAP_AVATARBASE_SIZE_BORDERWIDTH: Record<AvatarBaseSize, number> = {
  [AvatarBaseSize.Xs]: 1,
  [AvatarBaseSize.Sm]: 1,
  [AvatarBaseSize.Md]: 1,
  [AvatarBaseSize.Lg]: 2,
  [AvatarBaseSize.Xl]: 2,
};

// Defaults
export const DEFAULT_AVATARBASE_PROPS: Required<
  Pick<
    AvatarBaseProps,
    | 'size'
    | 'shape'
    | 'fallbackTextProps'
    | 'hasBorder'
    | 'hasSolidBackgroundColor'
  >
> = {
  size: AvatarBaseSize.Md,
  shape: AvatarBaseShape.Circle,
  fallbackTextProps: {
    color: TextColor.TextMuted,
    variant: TextVariant.BodySm,
    fontWeight: FontWeight.Medium,
    twClassName: 'uppercase',
  },
  hasBorder: false,
  hasSolidBackgroundColor: false,
};
