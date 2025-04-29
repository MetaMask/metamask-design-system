/* eslint-disable import/prefer-default-export */
import { FontWeight, TextVariant } from '../../types';
import { typography } from '@metamask/design-tokens';

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
};
