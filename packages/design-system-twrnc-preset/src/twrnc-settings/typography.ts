/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { typography } from '@metamask/design-tokens';

import type { TypographyTailwindConfigProps } from './typography.types';

export const typographyTailwindConfig: TypographyTailwindConfigProps = {
  fontSize: {
    'display-md': [
      typography.sDisplayMD.fontSize,
      {
        lineHeight: `${typography.sDisplayMD.lineHeight as number}px`,
        letterSpacing: `${typography.sDisplayMD.letterSpacing as number}`,
        fontWeight: typography.sDisplayMD.fontWeight,
      },
    ],
    'heading-lg': [
      typography.sHeadingLG.fontSize,
      {
        lineHeight: `${typography.sHeadingLG.lineHeight as number}px`,
        letterSpacing: `${typography.sHeadingLG.letterSpacing as number}`,
        fontWeight: typography.sHeadingLG.fontWeight,
      },
    ],
    'heading-md': [
      typography.sHeadingMD.fontSize,
      {
        lineHeight: `${typography.sHeadingMD.lineHeight as number}px`,
        letterSpacing: `${typography.sHeadingMD.letterSpacing as number}`,
        fontWeight: typography.sHeadingMD.fontWeight,
      },
    ],
    'heading-sm': [
      typography.sHeadingSM.fontSize,
      {
        lineHeight: `${typography.sHeadingSM.lineHeight as number}px`,
        letterSpacing: `${typography.sHeadingSM.letterSpacing as number}`,
        fontWeight: typography.sHeadingSM.fontWeight,
      },
    ],
    'body-lg': [
      typography.sBodyLGMedium.fontSize,
      {
        lineHeight: `${typography.sBodyLGMedium.lineHeight as number}px`,
        letterSpacing: `${typography.sBodyLGMedium.letterSpacing as number}`,
        fontWeight: typography.sBodyLGMedium.fontWeight,
      },
    ],
    'body-md': [
      typography.sBodyMD.fontSize,
      {
        lineHeight: `${typography.sBodyMD.lineHeight as number}px`,
        letterSpacing: `${typography.sBodyMD.letterSpacing as number}`,
        fontWeight: typography.sBodyMD.fontWeight,
      },
    ],
    'body-sm': [
      typography.sBodySM.fontSize,
      {
        lineHeight: `${typography.sBodySM.lineHeight as number}px`,
        letterSpacing: `${typography.sBodySM.letterSpacing as number}`,
        fontWeight: typography.sBodySM.fontWeight,
      },
    ],
    'body-xs': [
      typography.sBodyXS.fontSize,
      {
        lineHeight: `${typography.sBodyXS.lineHeight as number}px`,
        letterSpacing: `${typography.sBodyXS.letterSpacing as number}`,
        fontWeight: typography.sBodyXS.fontWeight,
      },
    ],
  },
  fontFamily: {
    'default-regular': 'CentraNo1-Book',
    'default-regular-italic': 'CentraNo1-BookItalic',
    'default-medium': 'CentraNo1-Medium',
    'default-medium-italic': 'CentraNo1-MediumItalic',
    'default-bold': 'CentraNo1-Bold',
    'default-bold-italic': 'CentraNo1-BoldItalic',
    'accent-regular': 'MMSans-Regular',
    'accent-medium': 'MMSans-Medium',
    'accent-bold': 'MMSans-Bold',
    'hero-regular': 'MMPoly-Regular',
  },
  letterSpacing: {
    'display-md': `${typography.sDisplayMD.letterSpacing as number}`,
    'heading-lg': `${typography.sHeadingLG.letterSpacing as number}`,
    'heading-md': `${typography.sHeadingMD.letterSpacing as number}`,
    'heading-sm': `${typography.sHeadingSM.letterSpacing as number}`,
    'body-lg': `${typography.sBodyLGMedium.letterSpacing as number}`,
    'body-md': `${typography.sBodyMD.letterSpacing as number}`,
    'body-sm': `${typography.sBodySM.letterSpacing as number}`,
    'body-xs': `${typography.sBodyXS.letterSpacing as number}`,
  },
  lineHeight: {
    'display-md': `${typography.sDisplayMD.lineHeight as number}px`,
    'heading-lg': `${typography.sHeadingLG.lineHeight as number}px`,
    'heading-md': `${typography.sHeadingMD.lineHeight as number}px`,
    'heading-sm': `${typography.sHeadingSM.lineHeight as number}px`,
    'body-lg': `${typography.sBodyLGMedium.lineHeight as number}px`,
    'body-md': `${typography.sBodyMD.lineHeight as number}px`,
    'body-sm': `${typography.sBodySM.lineHeight as number}px`,
    'body-xs': `${typography.sBodyXS.lineHeight as number}px`,
  },
};
