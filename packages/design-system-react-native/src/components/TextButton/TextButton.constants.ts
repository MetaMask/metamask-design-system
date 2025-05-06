import { TextButtonSize } from '../../types';
import { TextVariant } from '../Text';

export const MAP_TEXTBUTTON_SIZE_TEXTVARIANT: Record<
  TextButtonSize,
  TextVariant
> = {
  [TextButtonSize.BodyXs]: TextVariant.BodyXs,
  [TextButtonSize.BodySm]: TextVariant.BodySm,
  [TextButtonSize.BodyMd]: TextVariant.BodyMd,
  [TextButtonSize.BodyLg]: TextVariant.BodyLg,
};
