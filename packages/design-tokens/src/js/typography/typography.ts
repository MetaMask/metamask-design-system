import { fontFamilies } from './fontFamilies';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { letterSpacing } from './letterSpacing';
import { lineHeights } from './lineHeights';
import type { ThemeTypography } from './types';

/* eslint-enable jsdoc/check-property-names, jsdoc/tag-lines */
export const typography: ThemeTypography = {
  sDisplayMD: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize7,
    lineHeight: lineHeights.lineHeight6,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sHeadingLG: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize6,
    lineHeight: lineHeights.lineHeight5,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sHeadingMD: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize5,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sHeadingSM: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  /**
   * @deprecated [#1] since version 1.9 [#2].
   * [#3] Will be deleted in version 2.0.
   */
  sHeadingSMRegular: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodyLGMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize5,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodyMD: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodyMDMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodyMDBold: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodySM: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodySMMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodySMBold: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  sBodyXS: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize2,
    lineHeight: lineHeights.lineHeight2,
    letterSpacing: letterSpacing.letterSpacing1,
  },
  sBodyXSMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize2,
    lineHeight: lineHeights.lineHeight2,
    letterSpacing: letterSpacing.letterSpacing1,
  },
  lDisplayMD: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize8,
    lineHeight: lineHeights.lineHeight7,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lHeadingLG: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize7,
    lineHeight: lineHeights.lineHeight6,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lHeadingMD: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize6,
    lineHeight: lineHeights.lineHeight5,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lHeadingSM: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize5,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  /**
   * @deprecated [#1] since version 1.9 [#2].
   * [#3] Will be deleted in version 2.0.
   */
  lHeadingSMRegular: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize5,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodyLGMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize5,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodyMD: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodyMDMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodyMDBold: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize4,
    lineHeight: lineHeights.lineHeight4,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodySM: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodySMMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodySMBold: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.fontSize3,
    lineHeight: lineHeights.lineHeight3,
    letterSpacing: letterSpacing.letterSpacing0,
  },
  lBodyXS: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.regular,
    fontSize: fontSizes.fontSize2,
    lineHeight: lineHeights.lineHeight2,
    letterSpacing: letterSpacing.letterSpacing1,
  },
  lBodyXSMedium: {
    fontFamily: fontFamilies.sans,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.fontSize2,
    lineHeight: lineHeights.lineHeight2,
    letterSpacing: letterSpacing.letterSpacing1,
  },
};
