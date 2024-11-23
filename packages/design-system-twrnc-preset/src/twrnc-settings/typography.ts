import { typography } from '@metamask/design-tokens';

import type {
  TypographyTailwindConfigProps,
  FontStyle,
  FontWeight,
} from './typography.types';
import { getFontFamilyFromWeightAndStyle } from './typography.utilities';

export const typographyTailwindConfig: TypographyTailwindConfigProps = {
  fontSize: {
    'display-md': [
      typography.sDisplayMD.fontSize,
      {
        lineHeight: `${typography.sDisplayMD.lineHeight}px`,
        letterSpacing: `${typography.sDisplayMD.letterSpacing}`,
        fontWeight: typography.sDisplayMD.fontWeight,
      },
    ],
    'heading-lg': [
      typography.sHeadingLG.fontSize,
      {
        lineHeight: `${typography.sHeadingLG.lineHeight}px`,
        letterSpacing: `${typography.sHeadingLG.letterSpacing}`,
        fontWeight: typography.sHeadingLG.fontWeight,
      },
    ],
    'heading-md': [
      typography.sHeadingMD.fontSize,
      {
        lineHeight: `${typography.sHeadingMD.lineHeight}px`,
        letterSpacing: `${typography.sHeadingMD.letterSpacing}`,
        fontWeight: typography.sHeadingMD.fontWeight,
      },
    ],
    'heading-sm': [
      typography.sHeadingSM.fontSize,
      {
        lineHeight: `${typography.sHeadingSM.lineHeight}px`,
        letterSpacing: `${typography.sHeadingSM.letterSpacing}`,
        fontWeight: typography.sHeadingSM.fontWeight,
      },
    ],
    'body-lg': [
      typography.sBodyLGMedium.fontSize,
      {
        lineHeight: `${typography.sBodyLGMedium.lineHeight}px`,
        letterSpacing: `${typography.sBodyLGMedium.letterSpacing}`,
        fontWeight: typography.sBodyLGMedium.fontWeight,
      },
    ],
    'body-md': [
      typography.sBodyMD.fontSize,
      {
        lineHeight: `${typography.sBodyMD.lineHeight}px`,
        letterSpacing: `${typography.sBodyMD.letterSpacing}`,
        fontWeight: typography.sBodyMD.fontWeight,
      },
    ],
    'body-sm': [
      typography.sBodySM.fontSize,
      {
        lineHeight: `${typography.sBodySM.lineHeight}px`,
        letterSpacing: `${typography.sBodySM.letterSpacing}`,
        fontWeight: typography.sBodySM.fontWeight,
      },
    ],
    'body-xs': [
      typography.sBodyXS.fontSize,
      {
        lineHeight: `${typography.sBodyXS.lineHeight}px`,
        letterSpacing: `${typography.sBodyXS.letterSpacing}`,
        fontWeight: typography.sBodyXS.fontWeight,
      },
    ],
  },
  fontFamily: {
    sans: [
      'EuclidCircularB-Regular',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    bold: getFontFamilyFromWeightAndStyle('700', 'normal'),
    italic: getFontFamilyFromWeightAndStyle('400', 'italic'),
    'bold-italic': getFontFamilyFromWeightAndStyle('700', 'italic'),
    'display-md': getFontFamilyFromWeightAndStyle(
      typography.sDisplayMD.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'display-md-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'display-md-italic': getFontFamilyFromWeightAndStyle(
      typography.sDisplayMD.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'display-md-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
    'heading-lg': getFontFamilyFromWeightAndStyle(
      typography.sHeadingLG.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'heading-lg-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'heading-lg-italic': getFontFamilyFromWeightAndStyle(
      typography.sHeadingLG.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'heading-lg-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
    'heading-md': getFontFamilyFromWeightAndStyle(
      typography.sHeadingMD.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'heading-md-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'heading-md-italic': getFontFamilyFromWeightAndStyle(
      typography.sHeadingMD.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'heading-md-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
    'heading-sm': getFontFamilyFromWeightAndStyle(
      typography.sHeadingSM.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'heading-sm-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'heading-sm-italic': getFontFamilyFromWeightAndStyle(
      typography.sHeadingSM.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'heading-sm-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
    'body-lg': getFontFamilyFromWeightAndStyle(
      typography.sBodyLGMedium.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'body-lg-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'body-lg-italic': getFontFamilyFromWeightAndStyle(
      typography.sBodyLGMedium.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'body-lg-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
    'body-md': getFontFamilyFromWeightAndStyle(
      typography.sBodyMD.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'body-md-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'body-md-italic': getFontFamilyFromWeightAndStyle(
      typography.sBodyMD.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'body-md-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
    'body-sm': getFontFamilyFromWeightAndStyle(
      typography.sBodySM.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'body-sm-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'body-sm-italic': getFontFamilyFromWeightAndStyle(
      typography.sBodySM.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'body-sm-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
    'body-xs': getFontFamilyFromWeightAndStyle(
      typography.sBodyXS.fontWeight as FontWeight,
      'normal' as FontStyle,
    ),
    'body-xs-bold': getFontFamilyFromWeightAndStyle(
      '700' as FontWeight,
      'normal' as FontStyle,
    ),
    'body-xs-italic': getFontFamilyFromWeightAndStyle(
      typography.sBodyXS.fontWeight as FontWeight,
      'italic' as FontStyle,
    ),
    'body-xs-bold-italic': getFontFamilyFromWeightAndStyle(
      '700',
      'italic' as FontStyle,
    ),
  },
  letterSpacing: {
    'display-md': `${typography.sDisplayMD.letterSpacing}`,
    'heading-lg': `${typography.sHeadingLG.letterSpacing}`,
    'heading-md': `${typography.sHeadingMD.letterSpacing}`,
    'heading-sm': `${typography.sHeadingSM.letterSpacing}`,
    'body-lg': `${typography.sBodyLGMedium.letterSpacing}`,
    'body-md': `${typography.sBodyMD.letterSpacing}`,
    'body-sm': `${typography.sBodySM.letterSpacing}`,
    'body-xs': `${typography.sBodyXS.letterSpacing}`,
  },
  lineHeight: {
    'display-md': `${typography.sDisplayMD.lineHeight}px`,
    'heading-lg': `${typography.sHeadingLG.lineHeight}px`,
    'heading-md': `${typography.sHeadingMD.lineHeight}px`,
    'heading-sm': `${typography.sHeadingSM.lineHeight}px`,
    'body-lg': `${typography.sBodyLGMedium.lineHeight}px`,
    'body-md': `${typography.sBodyMD.lineHeight}px`,
    'body-sm': `${typography.sBodySM.lineHeight}px`,
    'body-xs': `${typography.sBodyXS.lineHeight}px`,
  },
};
