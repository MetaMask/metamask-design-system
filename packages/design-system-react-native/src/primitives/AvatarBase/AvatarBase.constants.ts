import type { AvatarBaseProps } from './AvatarBase.types';
import { TextColor, TextVariant, FontWeight } from '../../components/Text';
import { AvatarSize, AvatarShape } from '../../shared/enums';

// Mappings
export const TWCLASSMAP_AVATARBASE_SIZE_SHAPE: Record<AvatarSize, string> = {
  [AvatarSize.Xs]: 'rounded-sm',
  [AvatarSize.Sm]: 'rounded-md',
  [AvatarSize.Md]: 'rounded-lg',
  [AvatarSize.Lg]: 'rounded-[10px]',
  [AvatarSize.Xl]: 'rounded-xl',
};

// Defaults
export const DEFAULT_AVATARBASE_PROPS: Required<
  Pick<AvatarBaseProps, 'size' | 'shape' | 'fallbackTextProps'>
> = {
  size: AvatarSize.Md,
  shape: AvatarShape.Circle,
  fallbackTextProps: {
    color: TextColor.TextMuted,
    variant: TextVariant.BodySm,
    fontWeight: FontWeight.Medium,
    twClassName: 'uppercase',
  },
};
