import { typography } from '@metamask/design-tokens';

import { FontFamily, FontWeight, TextVariant } from '../../types';

/**
 * Defines which font weights are actually available for each font family.
 * This prevents font synthesis when unavailable weights are requested.
 */
export const FONT_FAMILY_AVAILABLE_WEIGHTS: Record<FontFamily, FontWeight[]> = {
  [FontFamily.Default]: [
    FontWeight.Regular,
    FontWeight.Medium,
    FontWeight.Bold,
  ],
  [FontFamily.Accent]: [FontWeight.Regular, FontWeight.Medium, FontWeight.Bold],
  [FontFamily.Hero]: [FontWeight.Regular], // Only regular weight available for MMPoly
};

/**
 * Maps font families to their constrained weight.
 * Used to override weight when a font family doesn't support all weights.
 */
export const FONTFAMILY_WEIGHT_OVERRIDE: Partial<
  Record<FontFamily, FontWeight>
> = {
  [FontFamily.Hero]: FontWeight.Regular, // Force regular weight for Hero (MMPoly)
};

// Mappings
export const TWCLASSMAP_TEXT_FONTWEIGHT: {
  [key in FontWeight]: string;
} = {
  [FontWeight.Regular]: '-regular',
  [FontWeight.Medium]: '-medium',
  [FontWeight.Bold]: '-bold',
};

export const MAP_TEXT_VARIANT_FONTWEIGHT: {
  [key in TextVariant]: FontWeight;
} = {
  [TextVariant.DisplayLg]: typography.sDisplayLG.fontWeight as FontWeight,
  [TextVariant.DisplayMd]: typography.sDisplayMD.fontWeight as FontWeight,
  [TextVariant.HeadingLg]: typography.sHeadingLG.fontWeight as FontWeight,
  [TextVariant.HeadingMd]: typography.sHeadingMD.fontWeight as FontWeight,
  [TextVariant.HeadingSm]: typography.sHeadingSM.fontWeight as FontWeight,
  [TextVariant.BodyLg]: typography.sBodyLGMedium.fontWeight as FontWeight,
  [TextVariant.BodyMd]: typography.sBodyMD.fontWeight as FontWeight,
  [TextVariant.BodySm]: typography.sBodySM.fontWeight as FontWeight,
  [TextVariant.BodyXs]: typography.sBodyXS.fontWeight as FontWeight,
  [TextVariant.PageHeading]: typography.sPageHeading.fontWeight as FontWeight,
  [TextVariant.SectionHeading]: typography.sSectionHeading
    .fontWeight as FontWeight,
  [TextVariant.ButtonLabelMd]: typography.sButtonLabelMd
    .fontWeight as FontWeight,
  [TextVariant.ButtonLabelLg]: typography.sButtonLabelLg
    .fontWeight as FontWeight,
  [TextVariant.AmountDisplayLg]: typography.sAmountDisplayLg
    .fontWeight as FontWeight,
};
