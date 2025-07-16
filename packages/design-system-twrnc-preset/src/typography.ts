import { typography } from '@metamask/design-tokens';

import type { TypographyTailwindConfigProps } from './typography.types';

export const typographyTailwindConfig: TypographyTailwindConfigProps = {
  fontSize: {
    'display-lg': [
      typography.sDisplayLG.fontSize.toString(),
      {
        lineHeight: `${typography.sDisplayLG.lineHeight as number}px`,
        letterSpacing: `${typography.sDisplayLG.letterSpacing as number}`,
        fontWeight: typography.sDisplayLG.fontWeight,
      },
    ],
    'display-md': [
      typography.sDisplayMD.fontSize.toString(),
      {
        lineHeight: `${typography.sDisplayMD.lineHeight as number}px`,
        letterSpacing: `${typography.sDisplayMD.letterSpacing as number}`,
        fontWeight: typography.sDisplayMD.fontWeight,
      },
    ],
    'heading-lg': [
      typography.sHeadingLG.fontSize.toString(),
      {
        lineHeight: `${typography.sHeadingLG.lineHeight as number}px`,
        letterSpacing: `${typography.sHeadingLG.letterSpacing as number}`,
        fontWeight: typography.sHeadingLG.fontWeight,
      },
    ],
    'heading-md': [
      typography.sHeadingMD.fontSize.toString(),
      {
        lineHeight: `${typography.sHeadingMD.lineHeight as number}px`,
        letterSpacing: `${typography.sHeadingMD.letterSpacing as number}`,
        fontWeight: typography.sHeadingMD.fontWeight,
      },
    ],
    'heading-sm': [
      typography.sHeadingSM.fontSize.toString(),
      {
        lineHeight: `${typography.sHeadingSM.lineHeight as number}px`,
        letterSpacing: `${typography.sHeadingSM.letterSpacing as number}`,
        fontWeight: typography.sHeadingSM.fontWeight,
      },
    ],
    'body-lg': [
      typography.sBodyLGMedium.fontSize.toString(),
      {
        lineHeight: `${typography.sBodyLGMedium.lineHeight as number}px`,
        letterSpacing: `${typography.sBodyLGMedium.letterSpacing as number}`,
        fontWeight: typography.sBodyLGMedium.fontWeight,
      },
    ],
    'body-md': [
      typography.sBodyMD.fontSize.toString(),
      {
        lineHeight: `${typography.sBodyMD.lineHeight as number}px`,
        letterSpacing: `${typography.sBodyMD.letterSpacing as number}`,
        fontWeight: typography.sBodyMD.fontWeight,
      },
    ],
    'body-sm': [
      typography.sBodySM.fontSize.toString(),
      {
        lineHeight: `${typography.sBodySM.lineHeight as number}px`,
        letterSpacing: `${typography.sBodySM.letterSpacing as number}`,
        fontWeight: typography.sBodySM.fontWeight,
      },
    ],
    'body-xs': [
      typography.sBodyXS.fontSize.toString(),
      {
        lineHeight: `${typography.sBodyXS.lineHeight as number}px`,
        letterSpacing: `${typography.sBodyXS.letterSpacing as number}`,
        fontWeight: typography.sBodyXS.fontWeight,
      },
    ],
    'page-heading': [
      typography.sPageHeading.fontSize.toString(),
      {
        lineHeight: `${typography.sPageHeading.lineHeight as number}px`,
        letterSpacing: `${typography.sPageHeading.letterSpacing as number}`,
        fontWeight: typography.sPageHeading.fontWeight,
      },
    ],
    'section-heading': [
      typography.sSectionHeading.fontSize.toString(),
      {
        lineHeight: `${typography.sSectionHeading.lineHeight as number}px`,
        letterSpacing: `${typography.sSectionHeading.letterSpacing as number}`,
        fontWeight: typography.sSectionHeading.fontWeight,
      },
    ],
    'button-label-md': [
      typography.sButtonLabelMd.fontSize.toString(),
      {
        lineHeight: `${typography.sButtonLabelMd.lineHeight as number}px`,
        letterSpacing: `${typography.sButtonLabelMd.letterSpacing as number}`,
        fontWeight: typography.sButtonLabelMd.fontWeight,
      },
    ],
    'button-label-lg': [
      typography.sButtonLabelLg.fontSize.toString(),
      {
        lineHeight: `${typography.sButtonLabelLg.lineHeight as number}px`,
        letterSpacing: `${typography.sButtonLabelLg.letterSpacing as number}`,
        fontWeight: typography.sButtonLabelLg.fontWeight,
      },
    ],
    'amount-display-lg': [
      typography.sAmountDisplayLg.fontSize.toString(),
      {
        lineHeight: `${typography.sAmountDisplayLg.lineHeight as number}px`,
        letterSpacing: `${typography.sAmountDisplayLg.letterSpacing as number}`,
        fontWeight: typography.sAmountDisplayLg.fontWeight,
      },
    ],
  },
  fontFamily: {
    'default-regular': 'Geist-Regular',
    'default-regular-italic': 'Geist-RegularItalic',
    'default-medium': 'Geist-Medium',
    'default-medium-italic': 'Geist-MediumItalic',
    'default-bold': 'Geist-Bold',
    'default-bold-italic': 'Geist-BoldItalic',
    'accent-regular': 'MMSans-Regular',
    'accent-medium': 'MMSans-Medium',
    'accent-bold': 'MMSans-Bold',
    'hero-regular': 'MMPoly-Regular',
  },
  letterSpacing: {
    'display-lg': `${typography.sDisplayLG.letterSpacing as number}`,
    'display-md': `${typography.sDisplayMD.letterSpacing as number}`,
    'heading-lg': `${typography.sHeadingLG.letterSpacing as number}`,
    'heading-md': `${typography.sHeadingMD.letterSpacing as number}`,
    'heading-sm': `${typography.sHeadingSM.letterSpacing as number}`,
    'body-lg': `${typography.sBodyLGMedium.letterSpacing as number}`,
    'body-md': `${typography.sBodyMD.letterSpacing as number}`,
    'body-sm': `${typography.sBodySM.letterSpacing as number}`,
    'body-xs': `${typography.sBodyXS.letterSpacing as number}`,
    'page-heading': `${typography.sPageHeading.letterSpacing as number}`,
    'section-heading': `${typography.sSectionHeading.letterSpacing as number}`,
    'button-label-md': `${typography.sButtonLabelMd.letterSpacing as number}`,
    'button-label-lg': `${typography.sButtonLabelLg.letterSpacing as number}`,
    'amount-display-lg': `${typography.sAmountDisplayLg.letterSpacing as number}`,
  },
  lineHeight: {
    'display-lg': `${typography.sDisplayLG.lineHeight as number}px`,
    'display-md': `${typography.sDisplayMD.lineHeight as number}px`,
    'heading-lg': `${typography.sHeadingLG.lineHeight as number}px`,
    'heading-md': `${typography.sHeadingMD.lineHeight as number}px`,
    'heading-sm': `${typography.sHeadingSM.lineHeight as number}px`,
    'body-lg': `${typography.sBodyLGMedium.lineHeight as number}px`,
    'body-md': `${typography.sBodyMD.lineHeight as number}px`,
    'body-sm': `${typography.sBodySM.lineHeight as number}px`,
    'body-xs': `${typography.sBodyXS.lineHeight as number}px`,
    'page-heading': `${typography.sPageHeading.lineHeight as number}px`,
    'section-heading': `${typography.sSectionHeading.lineHeight as number}px`,
    'button-label-md': `${typography.sButtonLabelMd.lineHeight as number}px`,
    'button-label-lg': `${typography.sButtonLabelLg.lineHeight as number}px`,
    'amount-display-lg': `${typography.sAmountDisplayLg.lineHeight as number}px`,
  },
};
