import { TextButtonSize } from '../../types/index.js';
import { TextVariant } from '../Text/index.js';

export const MAP_TEXTBUTTON_SIZE_TEXTVARIANT: Record<
  TextButtonSize,
  TextVariant
> = {
  [TextButtonSize.BodyXs]: TextVariant.BodyXs,
  [TextButtonSize.BodySm]: TextVariant.BodySm,
  [TextButtonSize.BodyMd]: TextVariant.BodyMd,
  [TextButtonSize.BodyLg]: TextVariant.BodyLg,
};
