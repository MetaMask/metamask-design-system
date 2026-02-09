// External dependencies.
import { HeaderBaseVariant } from '../../HeaderBase/HeaderBase.types';

// Internal dependencies.
import { BottomSheetHeaderVariant } from './BottomSheetHeader.types';

// Mapping between BottomSheetHeaderVariant and HeaderBaseVariant
export const BOTTOM_SHEET_HEADER_VARIANT_MAP: Record<
  BottomSheetHeaderVariant,
  HeaderBaseVariant
> = {
  [BottomSheetHeaderVariant.Display]: HeaderBaseVariant.Display,
  [BottomSheetHeaderVariant.Compact]: HeaderBaseVariant.Compact,
};
