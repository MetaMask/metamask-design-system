import { Text } from '@metamask/design-system-react';
import type { StoryFn, Meta } from '@storybook/react-vite';
import React from 'react';

import { typography } from '../src/js/typography';
import { fontFamilies } from '../src/js/typography/fontFamilies';
import { fontSizes } from '../src/js/typography/fontSizes';
import { fontWeights } from '../src/js/typography/fontWeights';
import { letterSpacing } from '../src/js/typography/letterSpacing';
import { lineHeights } from '../src/js/typography/lineHeights';

import README from './Typography.mdx';

const meta: Meta<typeof Text> = {
  title: 'Design Tokens/Typography/Typography',
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;
export const FontFamily: StoryFn<typeof Text> = () => {
  const styles = {
    default: {
      fontFamily: fontFamilies.default,
      fontSize: fontSizes.fontSize7,
      lineHeight: `${lineHeights.lineHeight6}px`,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacing.letterSpacing1,
    },
    accent: {
      fontFamily: fontFamilies.accent,
      fontSize: fontSizes.fontSize7,
      lineHeight: `${lineHeights.lineHeight6}px`,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacing.letterSpacing1,
    },
    hero: {
      fontFamily: fontFamilies.hero,
      fontSize: fontSizes.fontSize7,
      lineHeight: `${lineHeights.lineHeight6}px`,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacing.letterSpacing1,
    },
  };
  return (
    <>
      <Text style={styles.default}>Geist</Text>
      <Text style={styles.accent}>MM Sans</Text>
      <Text style={styles.hero}>MM Poly</Text>
    </>
  );
};

export const SmallScreen: StoryFn<typeof Text> = () => {
  const smallScreenFontSizeBase = 16;
  const styles = {
    displayLG: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sDisplayLG.fontSize,
      lineHeight: `${typography.sDisplayLG.lineHeight}px`,
      fontWeight: typography.sDisplayLG.fontWeight,
    },
    displayMD: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sDisplayMD.fontSize,
      lineHeight: `${typography.sDisplayMD.lineHeight}px`,
      fontWeight: typography.sDisplayMD.fontWeight,
    },
    headingLG: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sHeadingLG.fontSize,
      lineHeight: `${typography.sHeadingLG.lineHeight}px`,
      fontWeight: typography.sHeadingLG.fontWeight,
    },
    headingMD: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sHeadingMD.fontSize,
      lineHeight: `${typography.sHeadingMD.lineHeight}px`,
      fontWeight: typography.sHeadingMD.fontWeight,
    },
    headingSM: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sHeadingSM.fontSize,
      lineHeight: `${typography.sHeadingSM.lineHeight}px`,
      fontWeight: typography.sHeadingSM.fontWeight,
    },
    bodyLGMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodyLGMedium.fontSize,
      lineHeight: `${typography.sBodyLGMedium.lineHeight}px`,
      fontWeight: typography.sBodyLGMedium.fontWeight,
    },
    bodyMD: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodyMD.fontSize,
      lineHeight: `${typography.sBodyMD.lineHeight}px`,
      fontWeight: typography.sBodyMD.fontWeight,
    },
    bodyMDMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodyMDMedium.fontSize,
      lineHeight: `${typography.sBodyMDMedium.lineHeight}px`,
      fontWeight: typography.sBodyMDMedium.fontWeight,
    },
    bodyMDBold: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodyMDBold.fontSize,
      lineHeight: `${typography.sBodyMDBold.lineHeight}px`,
      fontWeight: typography.sBodyMDBold.fontWeight,
    },
    bodySM: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodySM.fontSize,
      lineHeight: `${typography.sBodySM.lineHeight}px`,
      fontWeight: typography.sBodySM.fontWeight,
    },
    bodySMMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodySMMedium.fontSize,
      lineHeight: `${typography.sBodySMMedium.lineHeight}px`,
      fontWeight: typography.sBodySMMedium.fontWeight,
    },
    bodySMBold: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodySMBold.fontSize,
      lineHeight: `${typography.sBodySMBold.lineHeight}px`,
      fontWeight: typography.sBodySMBold.fontWeight,
    },
    bodyXS: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodyXS.fontSize,
      lineHeight: `${typography.sBodyXS.lineHeight}px`,
      fontWeight: typography.sBodyXS.fontWeight,
      letterSpacing: typography.sBodyXS.letterSpacing,
    },
    bodyXSMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sBodyXSMedium.fontSize,
      lineHeight: `${typography.sBodyXSMedium.lineHeight}px`,
      fontWeight: typography.sBodyXSMedium.fontWeight,
      letterSpacing: typography.sBodyXSMedium.letterSpacing,
    },
    pageHeading: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sPageHeading.fontSize,
      lineHeight: `${typography.sPageHeading.lineHeight}px`,
      fontWeight: typography.sPageHeading.fontWeight,
      letterSpacing: typography.sPageHeading.letterSpacing,
    },
    sectionHeading: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sSectionHeading.fontSize,
      lineHeight: `${typography.sSectionHeading.lineHeight}px`,
      fontWeight: typography.sSectionHeading.fontWeight,
      letterSpacing: typography.sSectionHeading.letterSpacing,
    },
    buttonLabelMd: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sButtonLabelMd.fontSize,
      lineHeight: `${typography.sButtonLabelMd.lineHeight}px`,
      fontWeight: typography.sButtonLabelMd.fontWeight,
      letterSpacing: typography.sButtonLabelMd.letterSpacing,
    },
    buttonLabelLg: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sButtonLabelLg.fontSize,
      lineHeight: `${typography.sButtonLabelLg.lineHeight}px`,
      fontWeight: typography.sButtonLabelLg.fontWeight,
      letterSpacing: typography.sButtonLabelLg.letterSpacing,
    },
    amountDisplayLg: {
      fontFamily: fontFamilies.default,
      fontSize: typography.sAmountDisplayLg.fontSize,
      lineHeight: `${typography.sAmountDisplayLg.lineHeight}px`,
      fontWeight: typography.sAmountDisplayLg.fontWeight,
      letterSpacing: typography.sAmountDisplayLg.letterSpacing,
    },
  };
  return (
    <>
      <Text style={styles.displayLG}>
        {`S DisplayLG ${styles.displayLG.fontSize}px/${
          styles.displayLG.lineHeight
        } ${styles.displayLG.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.displayMD}>
        {`S DisplayMD ${styles.displayMD.fontSize}px/${
          styles.displayMD.lineHeight
        } ${styles.displayMD.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.headingLG}>
        {`S HeadingLG ${styles.headingLG.fontSize}px/${
          styles.headingLG.lineHeight
        } ${styles.headingLG.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.headingMD}>
        {`S HeadingMD ${styles.headingMD.fontSize}px/${
          styles.headingMD.lineHeight
        } ${styles.headingMD.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.headingSM}>
        {`S HeadingSM ${styles.headingSM.fontSize}px/${
          styles.headingSM.lineHeight
        } ${styles.headingSM.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyLGMedium}>
        {`S BodyLG Medium ${styles.bodyLGMedium.fontSize}px/${
          styles.bodyLGMedium.lineHeight
        } ${styles.bodyLGMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyMDBold}>
        {`S BodyMD Bold ${styles.bodyMDBold.fontSize}px/${
          styles.bodyMDBold.lineHeight
        } ${styles.bodyMDBold.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyMDMedium}>
        {`S BodyMD Medium ${styles.bodyMDMedium.fontSize}px/${
          styles.bodyMDMedium.lineHeight
        } ${styles.bodyMDMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyMD}>
        {`S BodyMD ${styles.bodyMD.fontSize}px/${styles.bodyMD.lineHeight} ${
          styles.bodyMD.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
      <Text style={styles.bodySMBold}>
        {`S BodySM Bold ${styles.bodySMBold.fontSize}px/${
          styles.bodySMBold.lineHeight
        } ${styles.bodySMBold.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodySMMedium}>
        {`S BodySM Medium ${styles.bodySMMedium.fontSize}px/${
          styles.bodySMMedium.lineHeight
        } ${styles.bodySMMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodySM}>
        {`S BodySM ${styles.bodySM.fontSize}px/${styles.bodySM.lineHeight} ${
          styles.bodySM.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
      <Text style={styles.bodyXSMedium}>
        {`S BodyXS Medium ${styles.bodyXSMedium.fontSize}px/${
          styles.bodyXSMedium.lineHeight
        } ${styles.bodyXSMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyXS}>
        {`S BodyXS ${styles.bodyXS.fontSize}px/${styles.bodyXS.lineHeight} ${
          styles.bodyXS.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
      <Text style={styles.pageHeading}>
        {`S PageHeading ${styles.pageHeading.fontSize}px/${
          styles.pageHeading.lineHeight
        } ${styles.pageHeading.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.sectionHeading}>
        {`S SectionHeading ${styles.sectionHeading.fontSize}px/${
          styles.sectionHeading.lineHeight
        } ${styles.sectionHeading.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.buttonLabelMd}>
        {`S ButtonLabelMd ${styles.buttonLabelMd.fontSize}px/${
          styles.buttonLabelMd.lineHeight
        } ${styles.buttonLabelMd.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.buttonLabelLg}>
        {`S ButtonLabelLg ${styles.buttonLabelLg.fontSize}px/${
          styles.buttonLabelLg.lineHeight
        } ${styles.buttonLabelLg.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.amountDisplayLg}>
        {`S AmountDisplayLg ${styles.amountDisplayLg.fontSize}px/${
          styles.amountDisplayLg.lineHeight
        } ${styles.amountDisplayLg.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
    </>
  );
};

export const LargeScreen: StoryFn<typeof Text> = () => {
  const largeScreenFontSizeBase = 16;
  const styles = {
    displayLG: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lDisplayLG.fontSize,
      lineHeight: `${typography.lDisplayLG.lineHeight}px`,
      fontWeight: typography.lDisplayLG.fontWeight,
    },
    displayMD: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lDisplayMD.fontSize,
      lineHeight: `${typography.lDisplayMD.lineHeight}px`,
      fontWeight: typography.lDisplayMD.fontWeight,
    },
    headingLG: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lHeadingLG.fontSize,
      lineHeight: `${typography.lHeadingLG.lineHeight}px`,
      fontWeight: typography.lHeadingLG.fontWeight,
    },
    headingMD: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lHeadingMD.fontSize,
      lineHeight: `${typography.lHeadingMD.lineHeight}px`,
      fontWeight: typography.lHeadingMD.fontWeight,
    },
    headingSM: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lHeadingSM.fontSize,
      lineHeight: `${typography.lHeadingSM.lineHeight}px`,
      fontWeight: typography.lHeadingSM.fontWeight,
    },
    bodyLGMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodyLGMedium.fontSize,
      lineHeight: `${typography.lBodyLGMedium.lineHeight}px`,
      fontWeight: typography.lBodyLGMedium.fontWeight,
    },
    bodyMDBold: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodyMDBold.fontSize,
      lineHeight: `${typography.lBodyMDBold.lineHeight}px`,
      fontWeight: typography.lBodyMDBold.fontWeight,
    },
    bodyMDMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodyMDMedium.fontSize,
      lineHeight: `${typography.lBodyMDMedium.lineHeight}px`,
      fontWeight: typography.lBodyMDMedium.fontWeight,
    },
    bodyMD: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodyMD.fontSize,
      lineHeight: `${typography.lBodyMD.lineHeight}px`,
      fontWeight: typography.lBodyMD.fontWeight,
    },
    bodySMBold: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodySMBold.fontSize,
      lineHeight: `${typography.lBodySMBold.lineHeight}px`,
      fontWeight: typography.lBodySMBold.fontWeight,
    },
    bodySMMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodySMMedium.fontSize,
      lineHeight: `${typography.lBodySMMedium.lineHeight}px`,
      fontWeight: typography.lBodySMMedium.fontWeight,
    },
    bodySM: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodySM.fontSize,
      lineHeight: `${typography.lBodySM.lineHeight}px`,
      fontWeight: typography.lBodySM.fontWeight,
    },
    bodyXSMedium: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodyXSMedium.fontSize,
      lineHeight: `${typography.lBodyXSMedium.lineHeight}px`,
      fontWeight: typography.lBodyXSMedium.fontWeight,
      letterSpacing: typography.lBodyXSMedium.letterSpacing,
    },
    bodyXS: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lBodyXS.fontSize,
      lineHeight: `${typography.lBodyXS.lineHeight}px`,
      fontWeight: typography.lBodyXS.fontWeight,
      letterSpacing: typography.lBodyXS.letterSpacing,
    },
    pageHeading: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lPageHeading.fontSize,
      lineHeight: `${typography.lPageHeading.lineHeight}px`,
      fontWeight: typography.lPageHeading.fontWeight,
      letterSpacing: typography.lPageHeading.letterSpacing,
    },
    sectionHeading: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lSectionHeading.fontSize,
      lineHeight: `${typography.lSectionHeading.lineHeight}px`,
      fontWeight: typography.lSectionHeading.fontWeight,
      letterSpacing: typography.lSectionHeading.letterSpacing,
    },
    buttonLabelMd: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lButtonLabelMd.fontSize,
      lineHeight: `${typography.lButtonLabelMd.lineHeight}px`,
      fontWeight: typography.lButtonLabelMd.fontWeight,
      letterSpacing: typography.lButtonLabelMd.letterSpacing,
    },
    buttonLabelLg: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lButtonLabelLg.fontSize,
      lineHeight: `${typography.lButtonLabelLg.lineHeight}px`,
      fontWeight: typography.lButtonLabelLg.fontWeight,
      letterSpacing: typography.lButtonLabelLg.letterSpacing,
    },
    amountDisplayLg: {
      fontFamily: fontFamilies.default,
      fontSize: typography.lAmountDisplayLg.fontSize,
      lineHeight: `${typography.lAmountDisplayLg.lineHeight}px`,
      fontWeight: typography.lAmountDisplayLg.fontWeight,
      letterSpacing: typography.lAmountDisplayLg.letterSpacing,
    },
  };
  return (
    <>
      <Text style={styles.displayLG}>
        {`L DisplayLG ${styles.displayLG.fontSize}px/${
          styles.displayLG.lineHeight
        } ${styles.displayLG.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.displayMD}>
        {`L DisplayMD ${styles.displayMD.fontSize}px/${
          styles.displayMD.lineHeight
        } ${styles.displayMD.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.headingLG}>
        {`L HeadingLG ${styles.headingLG.fontSize}px/${
          styles.headingLG.lineHeight
        } ${styles.headingLG.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.headingMD}>
        {`L HeadingMD ${styles.headingMD.fontSize}px/${
          styles.headingMD.lineHeight
        } ${styles.headingMD.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.headingSM}>
        {`L HeadingSM ${styles.headingSM.fontSize}px/${
          styles.headingSM.lineHeight
        } ${styles.headingSM.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyLGMedium}>
        {`L BodyLG Medium ${styles.bodyLGMedium.fontSize}px/${
          styles.bodyLGMedium.lineHeight
        } ${styles.bodyLGMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyMDBold}>
        {`L BodyMD Bold ${styles.bodyMDBold.fontSize}px/${
          styles.bodyMDBold.lineHeight
        } ${styles.bodyMDBold.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyMDMedium}>
        {`L BodyMD Medium ${styles.bodyMDMedium.fontSize}px/${
          styles.bodyMDMedium.lineHeight
        } ${styles.bodyMDMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyMD}>
        {`L BodyMD ${styles.bodyMD.fontSize}px/${styles.bodyMD.lineHeight} ${
          styles.bodyMD.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
      <Text style={styles.bodySMBold}>
        {`L BodySM Bold ${styles.bodySMBold.fontSize}px/${
          styles.bodySMBold.lineHeight
        } ${styles.bodySMBold.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodySMMedium}>
        {`L BodySM Medium ${styles.bodySMMedium.fontSize}px/${
          styles.bodySMMedium.lineHeight
        } ${styles.bodySMMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodySM}>
        {`L BodySM ${styles.bodySM.fontSize}px/${styles.bodySM.lineHeight} ${
          styles.bodySM.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
      <Text style={styles.bodyXSMedium}>
        {`L BodyXS Medium ${styles.bodyXSMedium.fontSize}px/${
          styles.bodyXSMedium.lineHeight
        } ${styles.bodyXSMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.bodyXS}>
        {`L BodyXS ${styles.bodyXS.fontSize}px/${styles.bodyXS.lineHeight} ${
          styles.bodyXS.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
      <Text style={styles.pageHeading}>
        {`L PageHeading ${styles.pageHeading.fontSize}px/${
          styles.pageHeading.lineHeight
        } ${styles.pageHeading.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.sectionHeading}>
        {`L SectionHeading ${styles.sectionHeading.fontSize}px/${
          styles.sectionHeading.lineHeight
        } ${styles.sectionHeading.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.buttonLabelMd}>
        {`L ButtonLabelMd ${styles.buttonLabelMd.fontSize}px/${
          styles.buttonLabelMd.lineHeight
        } ${styles.buttonLabelMd.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.buttonLabelLg}>
        {`L ButtonLabelLg ${styles.buttonLabelLg.fontSize}px/${
          styles.buttonLabelLg.lineHeight
        } ${styles.buttonLabelLg.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text style={styles.amountDisplayLg}>
        {`L AmountDisplayLg ${styles.amountDisplayLg.fontSize}px/${
          styles.amountDisplayLg.lineHeight
        } ${styles.amountDisplayLg.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
    </>
  );
};

export const FontWeight: StoryFn<typeof Text> = () => {
  const styles = {
    regular: {
      fontFamily: fontFamilies.default,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.regular,
    },
    medium: {
      fontFamily: fontFamilies.default,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.medium,
    },
    bold: {
      fontFamily: fontFamilies.default,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.bold,
    },
  };
  return (
    <>
      <Text style={styles.regular}>Regular 400</Text>
      <Text style={styles.medium}>Medium 500</Text>
      <Text style={styles.bold}>Bold 700</Text>
    </>
  );
};

export const SmallScreenCSS: StoryFn<typeof Text> = () => {
  const fontBase = 16;
  const styles = {
    DisplayLG: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-display-lg-font-size)',
      lineHeight: 'var(--typography-s-display-lg-line-height)',
      fontWeight: 'var(--typography-s-display-lg-font-weight)',
    },
    DisplayMD: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-display-md-font-size)',
      lineHeight: 'var(--typography-s-display-md-line-height)',
      fontWeight: 'var(--typography-s-display-md-font-weight)',
    },
    HeadingLG: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-heading-lg-font-size)',
      lineHeight: 'var(--typography-s-heading-lg-line-height)',
      fontWeight: 'var(--typography-s-heading-lg-font-weight)',
    },
    HeadingMD: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-heading-md-font-size)',
      lineHeight: 'var(--typography-s-heading-md-line-height)',
      fontWeight: 'var(--typography-s-heading-md-font-weight)',
    },
    HeadingSM: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-heading-sm-font-size)',
      lineHeight: 'var(--typography-s-heading-sm-line-height)',
      fontWeight: 'var(--typography-s-heading-sm-font-weight)',
    },
    'BodyLG Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-lg-medium-font-size)',
      lineHeight: 'var(--typography-s-body-lg-medium-line-height)',
      fontWeight: 'var(--typography-s-body-lg-medium-font-weight)',
    },
    BodyMD: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-md-font-size)',
      lineHeight: 'var(--typography-s-body-md-line-height)',
      fontWeight: 'var(--typography-s-body-md-font-weight)',
    },
    'BodyMD Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-md-medium-font-size)',
      lineHeight: 'var(--typography-s-body-md-medium-line-height)',
      fontWeight: 'var(--typography-s-body-md-medium-font-weight)',
    },
    'BodyMD Bold': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-md-bold-font-size)',
      lineHeight: 'var(--typography-s-body-md-bold-line-height)',
      fontWeight: 'var(--typography-s-body-md-bold-font-weight)',
    },
    BodySM: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-sm-font-size)',
      lineHeight: 'var(--typography-s-body-sm-line-height)',
      fontWeight: 'var(--typography-s-body-sm-font-weight)',
    },
    'BodySM Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-sm-medium-font-size)',
      lineHeight: 'var(--typography-s-body-sm-medium-line-height)',
      fontWeight: 'var(--typography-s-body-sm-medium-font-weight)',
    },
    'BodySM Bold': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-sm-bold-font-size)',
      lineHeight: 'var(--typography-s-body-sm-bold-line-height)',
      fontWeight: 'var(--typography-s-body-sm-bold-font-weight)',
    },
    BodyXS: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-xs-font-size)',
      lineHeight: 'var(--typography-s-body-xs-line-height)',
      fontWeight: 'var(--typography-s-body-xs-font-weight)',
      letterSpacing: 'var(--typography-s-body-xs-letter-spacing)',
    },
    'BodyXS Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-body-xs-medium-font-size)',
      lineHeight: 'var(--typography-s-body-xs-medium-line-height)',
      fontWeight: 'var(--typography-s-body-xs-medium-font-weight)',
      letterSpacing: 'var(--typography-s-body-xs-medium-letter-spacing)',
    },
    PageHeading: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-page-heading-font-size)',
      lineHeight: 'var(--typography-s-page-heading-line-height)',
      fontWeight: 'var(--typography-s-page-heading-font-weight)',
      letterSpacing: 'var(--typography-s-page-heading-letter-spacing)',
    },
    SectionHeading: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-section-heading-font-size)',
      lineHeight: 'var(--typography-s-section-heading-line-height)',
      fontWeight: 'var(--typography-s-section-heading-font-weight)',
      letterSpacing: 'var(--typography-s-section-heading-letter-spacing)',
    },
    ButtonLabelMd: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-button-label-md-font-size)',
      lineHeight: 'var(--typography-s-button-label-md-line-height)',
      fontWeight: 'var(--typography-s-button-label-md-font-weight)',
      letterSpacing: 'var(--typography-s-button-label-md-letter-spacing)',
    },
    ButtonLabelLg: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-button-label-lg-font-size)',
      lineHeight: 'var(--typography-s-button-label-lg-line-height)',
      fontWeight: 'var(--typography-s-button-label-lg-font-weight)',
      letterSpacing: 'var(--typography-s-button-label-lg-letter-spacing)',
    },
    AmountDisplayLg: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-s-amount-display-lg-font-size)',
      lineHeight: 'var(--typography-s-amount-display-lg-line-height)',
      fontWeight: 'var(--typography-s-amount-display-lg-font-weight)',
      letterSpacing: 'var(--typography-s-amount-display-lg-letter-spacing)',
    },
  };

  const getCssVar = (variable: string): number => {
    // Expecting variable like "var(--typography-s-display-md-font-size)"
    const strippedVar = variable.slice(4, -1); // removes "var(" at the beginning and ")" at the end
    const computedValue = getComputedStyle(document.documentElement)
      .getPropertyValue(strippedVar)
      .trim();
    return parseFloat(computedValue);
  };

  return (
    <>
      {Object.values(styles).map((value, i) => {
        const title = Object.getOwnPropertyNames(styles)[i];
        return (
          <Text style={value} key={i}>
            {`S ${title} ${getCssVar(value.fontSize) * fontBase}px/${
              getCssVar(value.lineHeight) * fontBase
            }px ${getCssVar(value.fontSize)}rem/${getCssVar(
              value.lineHeight,
            )}rem `}
            {title === 'HeadingSM Regular' && (
              <span className="text-error-default">DEPRECATED</span>
            )}
          </Text>
        );
      })}
    </>
  );
};

export const LargeScreenCSS: StoryFn<typeof Text> = () => {
  const fontBase = 16;

  const styles = {
    DisplayLG: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-display-lg-font-size)',
      lineHeight: 'var(--typography-l-display-lg-line-height)',
      fontWeight: 'var(--typography-l-display-lg-font-weight)',
    },
    DisplayMD: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-display-md-font-size)',
      lineHeight: 'var(--typography-l-display-md-line-height)',
      fontWeight: 'var(--typography-l-display-md-font-weight)',
    },
    HeadingLG: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-heading-lg-font-size)',
      lineHeight: 'var(--typography-l-heading-lg-line-height)',
      fontWeight: 'var(--typography-l-heading-lg-font-weight)',
    },
    HeadingMD: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-heading-md-font-size)',
      lineHeight: 'var(--typography-l-heading-md-line-height)',
      fontWeight: 'var(--typography-l-heading-md-font-weight)',
    },
    HeadingSM: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-heading-sm-font-size)',
      lineHeight: 'var(--typography-l-heading-sm-line-height)',
      fontWeight: 'var(--typography-l-heading-sm-font-weight)',
    },
    'BodyLG Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-lg-medium-font-size)',
      lineHeight: 'var(--typography-l-body-lg-medium-line-height)',
      fontWeight: 'var(--typography-l-body-lg-medium-font-weight)',
    },
    BodyMD: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-md-font-size)',
      lineHeight: 'var(--typography-l-body-md-line-height)',
      fontWeight: 'var(--typography-l-body-md-font-weight)',
    },
    'BodyMD Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-md-medium-font-size)',
      lineHeight: 'var(--typography-l-body-md-medium-line-height)',
      fontWeight: 'var(--typography-l-body-md-medium-font-weight)',
    },
    'BodyMD Bold': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-md-bold-font-size)',
      lineHeight: 'var(--typography-l-body-md-bold-line-height)',
      fontWeight: 'var(--typography-l-body-md-bold-font-weight)',
    },
    BodySM: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-sm-font-size)',
      lineHeight: 'var(--typography-l-body-sm-line-height)',
      fontWeight: 'var(--typography-l-body-sm-font-weight)',
    },
    'BodySM Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-sm-medium-font-size)',
      lineHeight: 'var(--typography-l-body-sm-medium-line-height)',
      fontWeight: 'var(--typography-l-body-sm-medium-font-weight)',
    },
    'BodySM Bold': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-sm-bold-font-size)',
      lineHeight: 'var(--typography-l-body-sm-bold-line-height)',
      fontWeight: 'var(--typography-l-body-sm-bold-font-weight)',
    },
    BodyXS: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-xs-font-size)',
      lineHeight: 'var(--typography-l-body-xs-line-height)',
      fontWeight: 'var(--typography-l-body-xs-font-weight)',
      letterSpacing: 'var(--typography-l-body-xs-letter-spacing)',
    },
    'BodyXS Medium': {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-body-xs-medium-font-size)',
      lineHeight: 'var(--typography-l-body-xs-medium-line-height)',
      fontWeight: 'var(--typography-l-body-xs-medium-font-weight)',
      letterSpacing: 'var(--typography-l-body-xs-medium-letter-spacing)',
    },
    PageHeading: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-page-heading-font-size)',
      lineHeight: 'var(--typography-l-page-heading-line-height)',
      fontWeight: 'var(--typography-l-page-heading-font-weight)',
      letterSpacing: 'var(--typography-l-page-heading-letter-spacing)',
    },
    SectionHeading: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-section-heading-font-size)',
      lineHeight: 'var(--typography-l-section-heading-line-height)',
      fontWeight: 'var(--typography-l-section-heading-font-weight)',
      letterSpacing: 'var(--typography-l-section-heading-letter-spacing)',
    },
    ButtonLabelMd: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-button-label-md-font-size)',
      lineHeight: 'var(--typography-l-button-label-md-line-height)',
      fontWeight: 'var(--typography-l-button-label-md-font-weight)',
      letterSpacing: 'var(--typography-l-button-label-md-letter-spacing)',
    },
    ButtonLabelLg: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-button-label-lg-font-size)',
      lineHeight: 'var(--typography-l-button-label-lg-line-height)',
      fontWeight: 'var(--typography-l-button-label-lg-font-weight)',
      letterSpacing: 'var(--typography-l-button-label-lg-letter-spacing)',
    },
    AmountDisplayLg: {
      fontFamily: 'var(--font-family-default)',
      fontSize: 'var(--typography-l-amount-display-lg-font-size)',
      lineHeight: 'var(--typography-l-amount-display-lg-line-height)',
      fontWeight: 'var(--typography-l-amount-display-lg-font-weight)',
      letterSpacing: 'var(--typography-l-amount-display-lg-letter-spacing)',
    },
  };

  const getCssVar = (variable: string): number => {
    // Expecting variable like "var(--typography-s-display-md-font-size)"
    const strippedVar = variable.slice(4, -1); // removes "var(" at the beginning and ")" at the end
    const computedValue = getComputedStyle(document.documentElement)
      .getPropertyValue(strippedVar)
      .trim();
    return parseFloat(computedValue);
  };

  return (
    <>
      {Object.values(styles).map((value, i) => {
        const title = Object.getOwnPropertyNames(styles)[i];
        return (
          <Text style={value} key={i}>
            {`L ${title} ${getCssVar(value.fontSize) * fontBase}px/${
              getCssVar(value.lineHeight) * fontBase
            }px ${getCssVar(value.fontSize)}rem/${getCssVar(
              value.lineHeight,
            )}rem `}
            {title === 'HeadingSM Regular' && (
              <span className="text-error-default">DEPRECATED</span>
            )}
          </Text>
        );
      })}
    </>
  );
};
