/* eslint-disable no-restricted-globals */

import { Text } from '@metamask/design-system-react';
import type { StoryFn, Meta } from '@storybook/react';
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
export const FontFamily: StoryFn<typeof Text> = (...args) => {
  const styles = {
    displayMD: {
      fontFamily: fontFamilies.sans,
      fontSize: fontSizes.fontSize7,
      lineHeight: `${lineHeights.lineHeight6}px`,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacing.letterSpacing1,
    },
  };
  return (
    <>
      <Text style={styles.displayMD} {...args}>
        CentraNo1
      </Text>
    </>
  );
};

export const SmallScreen: StoryFn<typeof Text> = (...args) => {
  const smallScreenFontSizeBase = 16;
  const styles = {
    displayMD: {
      fontFamily: typography.sDisplayMD.fontFamily,
      fontSize: typography.sDisplayMD.fontSize,
      lineHeight: `${typography.sDisplayMD.lineHeight}px`,
      fontWeight: typography.sDisplayMD.fontWeight,
    },
    headingLG: {
      fontFamily: typography.sHeadingLG.fontFamily,
      fontSize: typography.sHeadingLG.fontSize,
      lineHeight: `${typography.sHeadingLG.lineHeight}px`,
      fontWeight: typography.sHeadingLG.fontWeight,
    },
    headingMD: {
      fontFamily: typography.sHeadingMD.fontFamily,
      fontSize: typography.sHeadingMD.fontSize,
      lineHeight: `${typography.sHeadingMD.lineHeight}px`,
      fontWeight: typography.sHeadingMD.fontWeight,
    },
    headingSM: {
      fontFamily: typography.sHeadingSM.fontFamily,
      fontSize: typography.sHeadingSM.fontSize,
      lineHeight: `${typography.sHeadingSM.lineHeight}px`,
      fontWeight: typography.sHeadingSM.fontWeight,
    },
    headingSMRegular: {
      fontFamily: typography.sHeadingSMRegular.fontFamily,
      fontSize: typography.sHeadingSMRegular.fontSize,
      lineHeight: `${typography.sHeadingSMRegular.lineHeight}px`,
      fontWeight: typography.sHeadingSMRegular.fontWeight,
    },
    bodyLGMedium: {
      fontFamily: typography.sBodyLGMedium.fontFamily,
      fontSize: typography.sBodyLGMedium.fontSize,
      lineHeight: `${typography.sBodyLGMedium.lineHeight}px`,
      fontWeight: typography.sBodyLGMedium.fontWeight,
    },
    bodyMD: {
      fontFamily: typography.sBodyMD.fontFamily,
      fontSize: typography.sBodyMD.fontSize,
      lineHeight: `${typography.sBodyMD.lineHeight}px`,
      fontWeight: typography.sBodyMD.fontWeight,
    },
    bodyMDMedium: {
      fontFamily: typography.sBodyMDMedium.fontFamily,
      fontSize: typography.sBodyMDMedium.fontSize,
      lineHeight: `${typography.sBodyMDMedium.lineHeight}px`,
      fontWeight: typography.sBodyMDMedium.fontWeight,
    },
    bodyMDBold: {
      fontFamily: typography.sBodyMDBold.fontFamily,
      fontSize: typography.sBodyMDBold.fontSize,
      lineHeight: `${typography.sBodyMDBold.lineHeight}px`,
      fontWeight: typography.sBodyMDBold.fontWeight,
    },
    bodySM: {
      fontFamily: typography.sBodySM.fontFamily,
      fontSize: typography.sBodySM.fontSize,
      lineHeight: `${typography.sBodySM.lineHeight}px`,
      fontWeight: typography.sBodySM.fontWeight,
    },
    bodySMMedium: {
      fontFamily: typography.sBodySMMedium.fontFamily,
      fontSize: typography.sBodySMMedium.fontSize,
      lineHeight: `${typography.sBodySMMedium.lineHeight}px`,
      fontWeight: typography.sBodySMMedium.fontWeight,
    },
    bodySMBold: {
      fontFamily: typography.sBodySMBold.fontFamily,
      fontSize: typography.sBodySMBold.fontSize,
      lineHeight: `${typography.sBodySMBold.lineHeight}px`,
      fontWeight: typography.sBodySMBold.fontWeight,
    },
    bodyXS: {
      fontFamily: typography.sBodyXS.fontFamily,
      fontSize: typography.sBodyXS.fontSize,
      lineHeight: `${typography.sBodyXS.lineHeight}px`,
      fontWeight: typography.sBodyXS.fontWeight,
      letterSpacing: typography.sBodyXS.letterSpacing,
    },
    bodyXSMedium: {
      fontFamily: typography.sBodyXSMedium.fontFamily,
      fontSize: typography.sBodyXSMedium.fontSize,
      lineHeight: `${typography.sBodyXSMedium.lineHeight}px`,
      fontWeight: typography.sBodyXSMedium.fontWeight,
      letterSpacing: typography.sBodyXSMedium.letterSpacing,
    },
  };
  return (
    <>
      <Text as="h1" style={styles.displayMD} {...args}>
        {`S DisplayMD ${styles.displayMD.fontSize}px/${
          styles.displayMD.lineHeight
        } ${styles.displayMD.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="h2" style={styles.headingLG} {...args}>
        {`S HeadingLG ${styles.headingLG.fontSize}px/${
          styles.headingLG.lineHeight
        } ${styles.headingLG.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="h3" style={styles.headingMD} {...args}>
        {`S HeadingMD ${styles.headingMD.fontSize}px/${
          styles.headingMD.lineHeight
        } ${styles.headingMD.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="h4" style={styles.headingSM} {...args}>
        {`S HeadingSM ${styles.headingSM.fontSize}px/${
          styles.headingSM.lineHeight
        } ${styles.headingSM.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="h4" style={styles.headingSMRegular} {...args}>
        {`S HeadingSM Regular ${styles.headingSMRegular.fontSize}px/${
          styles.headingSMRegular.lineHeight
        } ${
          styles.headingSMRegular.fontSize / smallScreenFontSizeBase
        }rem`}{' '}
        <span className="text-error-default">DEPRECATED</span>
      </Text>
      <Text as="h4" style={styles.bodyLGMedium} {...args}>
        {`S BodyLG Medium ${styles.bodyLGMedium.fontSize}px/${
          styles.bodyLGMedium.lineHeight
        } ${styles.bodyLGMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMDBold} {...args}>
        {`S BodyMD Bold ${styles.bodyMDBold.fontSize}px/${
          styles.bodyMDBold.lineHeight
        } ${styles.bodyMDBold.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMDMedium} {...args}>
        {`S BodyMD Medium ${styles.bodyMDMedium.fontSize}px/${
          styles.bodyMDMedium.lineHeight
        } ${styles.bodyMDMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMD} {...args}>
        {`S BodyMD ${styles.bodyMD.fontSize}px/${styles.bodyMD.lineHeight} ${
          styles.bodyMD.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodySMBold} {...args}>
        {`S BodySM Bold ${styles.bodySMBold.fontSize}px/${
          styles.bodySMBold.lineHeight
        } ${styles.bodySMBold.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodySMMedium} {...args}>
        {`S BodySM Medium ${styles.bodySMMedium.fontSize}px/${
          styles.bodySMMedium.lineHeight
        } ${styles.bodySMMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodySM} {...args}>
        {`S BodySM ${styles.bodySM.fontSize}px/${styles.bodySM.lineHeight} ${
          styles.bodySM.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodyXSMedium} {...args}>
        {`S BodyXS Medium ${styles.bodyXSMedium.fontSize}px/${
          styles.bodyXSMedium.lineHeight
        } ${styles.bodyXSMedium.fontSize / smallScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyXS} {...args}>
        {`S BodyXS ${styles.bodyXS.fontSize}px/${styles.bodyXS.lineHeight} ${
          styles.bodyXS.fontSize / smallScreenFontSizeBase
        }rem`}
      </Text>
    </>
  );
};

export const LargeScreen: StoryFn<typeof Text> = (...args) => {
  const largeScreenFontSizeBase = 16;
  const styles = {
    displayMD: {
      fontFamily: typography.lDisplayMD.fontFamily,
      fontSize: typography.lDisplayMD.fontSize,
      lineHeight: `${typography.lDisplayMD.lineHeight}px`,
      fontWeight: typography.lDisplayMD.fontWeight,
    },
    headingLG: {
      fontFamily: typography.lHeadingLG.fontFamily,
      fontSize: typography.lHeadingLG.fontSize,
      lineHeight: `${typography.lHeadingLG.lineHeight}px`,
      fontWeight: typography.lHeadingLG.fontWeight,
    },
    headingMD: {
      fontFamily: typography.lHeadingMD.fontFamily,
      fontSize: typography.lHeadingMD.fontSize,
      lineHeight: `${typography.lHeadingMD.lineHeight}px`,
      fontWeight: typography.lHeadingMD.fontWeight,
    },
    headingSM: {
      fontFamily: typography.lHeadingSM.fontFamily,
      fontSize: typography.lHeadingSM.fontSize,
      lineHeight: `${typography.lHeadingSM.lineHeight}px`,
      fontWeight: typography.lHeadingSM.fontWeight,
    },
    headingSMRegular: {
      fontFamily: typography.lHeadingSMRegular.fontFamily,
      fontSize: typography.lHeadingSMRegular.fontSize,
      lineHeight: `${typography.lHeadingSMRegular.lineHeight}px`,
      fontWeight: typography.lHeadingSMRegular.fontWeight,
    },
    bodyLGMedium: {
      fontFamily: typography.lBodyLGMedium.fontFamily,
      fontSize: typography.lBodyLGMedium.fontSize,
      lineHeight: `${typography.lBodyLGMedium.lineHeight}px`,
      fontWeight: typography.lBodyLGMedium.fontWeight,
    },
    bodyMDBold: {
      fontFamily: typography.lBodyMDBold.fontFamily,
      fontSize: typography.lBodyMDBold.fontSize,
      lineHeight: `${typography.lBodyMDBold.lineHeight}px`,
      fontWeight: typography.lBodyMDBold.fontWeight,
    },
    bodyMDMedium: {
      fontFamily: typography.lBodyMDMedium.fontFamily,
      fontSize: typography.lBodyMDMedium.fontSize,
      lineHeight: `${typography.lBodyMDMedium.lineHeight}px`,
      fontWeight: typography.lBodyMDMedium.fontWeight,
    },
    bodyMD: {
      fontFamily: typography.lBodyMD.fontFamily,
      fontSize: typography.lBodyMD.fontSize,
      lineHeight: `${typography.lBodyMD.lineHeight}px`,
      fontWeight: typography.lBodyMD.fontWeight,
    },
    bodySMBold: {
      fontFamily: typography.lBodySMBold.fontFamily,
      fontSize: typography.lBodySMBold.fontSize,
      lineHeight: `${typography.lBodySMBold.lineHeight}px`,
      fontWeight: typography.lBodySMBold.fontWeight,
    },
    bodySMMedium: {
      fontFamily: typography.lBodySMMedium.fontFamily,
      fontSize: typography.lBodySMMedium.fontSize,
      lineHeight: `${typography.lBodySMMedium.lineHeight}px`,
      fontWeight: typography.lBodySMMedium.fontWeight,
    },
    bodySM: {
      fontFamily: typography.lBodySM.fontFamily,
      fontSize: typography.lBodySM.fontSize,
      lineHeight: `${typography.lBodySM.lineHeight}px`,
      fontWeight: typography.lBodySM.fontWeight,
    },
    bodyXSMedium: {
      fontFamily: typography.lBodyXSMedium.fontFamily,
      fontSize: typography.lBodyXSMedium.fontSize,
      lineHeight: `${typography.lBodyXSMedium.lineHeight}px`,
      fontWeight: typography.lBodyXSMedium.fontWeight,
      letterSpacing: typography.lBodyXSMedium.letterSpacing,
    },
    bodyXS: {
      fontFamily: typography.lBodyXS.fontFamily,
      fontSize: typography.lBodyXS.fontSize,
      lineHeight: `${typography.lBodyXS.lineHeight}px`,
      fontWeight: typography.lBodyXS.fontWeight,
      letterSpacing: typography.lBodyXS.letterSpacing,
    },
  };
  return (
    <>
      <Text as="h1" style={styles.displayMD} {...args}>
        {`L DisplayMD ${styles.displayMD.fontSize}px/${
          styles.displayMD.lineHeight
        } ${styles.displayMD.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="h2" style={styles.headingLG} {...args}>
        {`L HeadingLG ${styles.headingLG.fontSize}px/${
          styles.headingLG.lineHeight
        } ${styles.headingLG.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="h3" style={styles.headingMD} {...args}>
        {`L HeadingMD ${styles.headingMD.fontSize}px/${
          styles.headingMD.lineHeight
        } ${styles.headingMD.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="h4" style={styles.headingSM} {...args}>
        {`L HeadingSM ${styles.headingSM.fontSize}px/${
          styles.headingSM.lineHeight
        } ${styles.headingSM.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="h4" style={styles.headingSMRegular} {...args}>
        {`L HeadingSM Regular ${styles.headingSMRegular.fontSize}px/${
          styles.headingSMRegular.lineHeight
        } ${
          styles.headingSMRegular.fontSize / largeScreenFontSizeBase
        }rem`}{' '}
        <span className="text-error-default">DEPRECATED</span>
      </Text>
      <Text as="h4" style={styles.bodyLGMedium} {...args}>
        {`L BodyLG Medium ${styles.bodyLGMedium.fontSize}px/${
          styles.bodyLGMedium.lineHeight
        } ${styles.bodyLGMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMDBold} {...args}>
        {`L BodyMD Bold ${styles.bodyMDBold.fontSize}px/${
          styles.bodyMDBold.lineHeight
        } ${styles.bodyMDBold.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMDMedium} {...args}>
        {`L BodyMD Medium ${styles.bodyMDMedium.fontSize}px/${
          styles.bodyMDMedium.lineHeight
        } ${styles.bodyMDMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyMD} {...args}>
        {`L BodyMD ${styles.bodyMD.fontSize}px/${styles.bodyMD.lineHeight} ${
          styles.bodyMD.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodySMBold} {...args}>
        {`L BodySM Bold ${styles.bodySMBold.fontSize}px/${
          styles.bodySMBold.lineHeight
        } ${styles.bodySMBold.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodySMMedium} {...args}>
        {`L BodySM Medium ${styles.bodySMMedium.fontSize}px/${
          styles.bodySMMedium.lineHeight
        } ${styles.bodySMMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodySM} {...args}>
        {`L BodySM ${styles.bodySM.fontSize}px/${styles.bodySM.lineHeight} ${
          styles.bodySM.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
      <Text as="p" style={styles.bodyXSMedium} {...args}>
        {`L BodyXS Medium ${styles.bodyXSMedium.fontSize}px/${
          styles.bodyXSMedium.lineHeight
        } ${styles.bodyXSMedium.fontSize / largeScreenFontSizeBase}rem`}
      </Text>
      <Text as="p" style={styles.bodyXS} {...args}>
        {`L BodyXS ${styles.bodyXS.fontSize}px/${styles.bodyXS.lineHeight} ${
          styles.bodyXS.fontSize / largeScreenFontSizeBase
        }rem`}
      </Text>
    </>
  );
};

export const FontWeight: StoryFn<typeof Text> = (...args) => {
  const styles = {
    regular: {
      fontFamily: fontFamilies.sans,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.regular,
    },
    medium: {
      fontFamily: fontFamilies.sans,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.medium,
    },
    bold: {
      fontFamily: fontFamilies.sans,
      fontSize: fontSizes.fontSize4,
      lineHeight: `${lineHeights.lineHeight5}px`,
      fontWeight: fontWeights.bold,
    },
  };
  return (
    <>
      <Text as="h3" style={styles.regular} {...args}>
        Regular 400
      </Text>
      <Text as="h3" style={styles.medium} {...args}>
        Medium 500
      </Text>
      <Text as="h3" style={styles.bold} {...args}>
        Bold 700
      </Text>
    </>
  );
};

export const SmallScreenCSS: StoryFn<typeof Text> = (...args) => {
  const fontBase = 16;
  const styles = {
    DisplayMD: {
      fontFamily: 'var(--typography-s-display-md-font-family)',
      fontSize: 'var(--typography-s-display-md-font-size)',
      lineHeight: 'var(--typography-s-display-md-line-height)',
      fontWeight: 'var(--typography-s-display-md-font-weight)',
    },
    HeadingLG: {
      fontFamily: 'var(--typography-s-heading-lg-font-family)',
      fontSize: 'var(--typography-s-heading-lg-font-size)',
      lineHeight: 'var(--typography-s-heading-lg-line-height)',
      fontWeight: 'var(--typography-s-heading-lg-font-weight)',
    },
    HeadingMD: {
      fontFamily: 'var(--typography-s-heading-md-font-family)',
      fontSize: 'var(--typography-s-heading-md-font-size)',
      lineHeight: 'var(--typography-s-heading-md-line-height)',
      fontWeight: 'var(--typography-s-heading-md-font-weight)',
    },
    HeadingSM: {
      fontFamily: 'var(--typography-s-heading-sm-font-family)',
      fontSize: 'var(--typography-s-heading-sm-font-size)',
      lineHeight: 'var(--typography-s-heading-sm-line-height)',
      fontWeight: 'var(--typography-s-heading-sm-font-weight)',
    },
    'HeadingSM Regular': {
      fontFamily: 'var(--typography-s-heading-sm-regular-font-family)',
      fontSize: 'var(--typography-s-heading-sm-regular-font-size)',
      lineHeight: 'var(--typography-s-heading-sm-regular-line-height)',
      fontWeight: 'var(--typography-s-heading-sm-regular-font-weight)',
    },
    'BodyLG Medium': {
      fontFamily: 'var(--typography-s-body-lg-medium-font-family)',
      fontSize: 'var(--typography-s-body-lg-medium-font-size)',
      lineHeight: 'var(--typography-s-body-lg-medium-line-height)',
      fontWeight: 'var(--typography-s-body-lg-medium-font-weight)',
    },
    BodyMD: {
      fontFamily: 'var(--typography-s-body-md-font-family)',
      fontSize: 'var(--typography-s-body-md-font-size)',
      lineHeight: 'var(--typography-s-body-md-line-height)',
      fontWeight: 'var(--typography-s-body-md-font-weight)',
    },
    'BodyMD Medium': {
      fontFamily: 'var(--typography-s-body-md-medium-font-family)',
      fontSize: 'var(--typography-s-body-md-medium-font-size)',
      lineHeight: 'var(--typography-s-body-md-medium-line-height)',
      fontWeight: 'var(--typography-s-body-md-medium-font-weight)',
    },
    'BodyMD Bold': {
      fontFamily: 'var(--typography-s-body-md-bold-font-family)',
      fontSize: 'var(--typography-s-body-md-bold-font-size)',
      lineHeight: 'var(--typography-s-body-md-bold-line-height)',
      fontWeight: 'var(--typography-s-body-md-bold-font-weight)',
    },
    BodySM: {
      fontFamily: 'var(--typography-s-body-sm-font-family)',
      fontSize: 'var(--typography-s-body-sm-font-size)',
      lineHeight: 'var(--typography-s-body-sm-line-height)',
      fontWeight: 'var(--typography-s-body-sm-font-weight)',
    },
    'BodySM Medium': {
      fontFamily: 'var(--typography-s-body-sm-medium-font-family)',
      fontSize: 'var(--typography-s-body-sm-medium-font-size)',
      lineHeight: 'var(--typography-s-body-sm-medium-line-height)',
      fontWeight: 'var(--typography-s-body-sm-medium-font-weight)',
    },
    'BodySM Bold': {
      fontFamily: 'var(--typography-s-body-sm-bold-font-family)',
      fontSize: 'var(--typography-s-body-sm-bold-font-size)',
      lineHeight: 'var(--typography-s-body-sm-bold-line-height)',
      fontWeight: 'var(--typography-s-body-sm-bold-font-weight)',
    },
    BodyXS: {
      fontFamily: 'var(--typography-s-body-xs-font-family)',
      fontSize: 'var(--typography-s-body-xs-font-size)',
      lineHeight: 'var(--typography-s-body-xs-line-height)',
      fontWeight: 'var(--typography-s-body-xs-font-weight)',
      letterSpacing: 'var(--typography-s-body-xs-letter-spacing)',
    },
    'BodyXS Medium': {
      fontFamily: 'var(--typography-s-body-xs-medium-font-family)',
      fontSize: 'var(--typography-s-body-xs-medium-font-size)',
      lineHeight: 'var(--typography-s-body-xs-medium-line-height)',
      fontWeight: 'var(--typography-s-body-xs-medium-font-weight)',
      letterSpacing: 'var(--typography-s-body-xs-medium-letter-spacing)',
    },
  };

  const getCssVar = (variable) => {
    const strippedVar = variable.slice(4, -1);

    return getComputedStyle(document.documentElement)
      .getPropertyValue(strippedVar)
      .slice(0, -3);
  };

  return (
    <>
      {Object.values(styles).map((value, i) => {
        const title = Object.getOwnPropertyNames(styles)[i];
        let tag = 'p';

        if (i <= 4) {
          tag = `h${i + 1}`;
        }

        return (
          <Text as={tag} style={value} {...args} key={i}>
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

export const LargeScreenCSS: StoryFn<typeof Text> = (...args) => {
  const fontBase = 16;

  const styles = {
    DisplayMD: {
      fontFamily: 'var(--typography-l-display-md-font-family)',
      fontSize: 'var(--typography-l-display-md-font-size)',
      lineHeight: 'var(--typography-l-display-md-line-height)',
      fontWeight: 'var(--typography-l-display-md-font-weight)',
    },
    HeadingLG: {
      fontFamily: 'var(--typography-l-heading-lg-font-family)',
      fontSize: 'var(--typography-l-heading-lg-font-size)',
      lineHeight: 'var(--typography-l-heading-lg-line-height)',
      fontWeight: 'var(--typography-l-heading-lg-font-weight)',
    },
    HeadingMD: {
      fontFamily: 'var(--typography-l-heading-md-font-family)',
      fontSize: 'var(--typography-l-heading-md-font-size)',
      lineHeight: 'var(--typography-l-heading-md-line-height)',
      fontWeight: 'var(--typography-l-heading-md-font-weight)',
    },
    HeadingSM: {
      fontFamily: 'var(--typography-l-heading-sm-font-family)',
      fontSize: 'var(--typography-l-heading-sm-font-size)',
      lineHeight: 'var(--typography-l-heading-sm-line-height)',
      fontWeight: 'var(--typography-l-heading-sm-font-weight)',
    },
    'HeadingSM Regular': {
      fontFamily: 'var(--typography-l-heading-sm-regular-font-family)',
      fontSize: 'var(--typography-l-heading-sm-regular-font-size)',
      lineHeight: 'var(--typography-l-heading-sm-regular-line-height)',
      fontWeight: 'var(--typography-l-heading-sm-regular-font-weight)',
    },
    'BodyLG Medium': {
      fontFamily: 'var(--typography-l-body-lg-medium-font-family)',
      fontSize: 'var(--typography-l-body-lg-medium-font-size)',
      lineHeight: 'var(--typography-l-body-lg-medium-line-height)',
      fontWeight: 'var(--typography-l-body-lg-medium-font-weight)',
    },
    BodyMD: {
      fontFamily: 'var(--typography-l-body-md-font-family)',
      fontSize: 'var(--typography-l-body-md-font-size)',
      lineHeight: 'var(--typography-l-body-md-line-height)',
      fontWeight: 'var(--typography-l-body-md-font-weight)',
    },
    'BodyMD Medium': {
      fontFamily: 'var(--typography-l-body-md-medium-font-family)',
      fontSize: 'var(--typography-l-body-md-medium-font-size)',
      lineHeight: 'var(--typography-l-body-md-medium-line-height)',
      fontWeight: 'var(--typography-l-body-md-medium-font-weight)',
    },
    'BodyMD Bold': {
      fontFamily: 'var(--typography-l-body-md-bold-font-family)',
      fontSize: 'var(--typography-l-body-md-bold-font-size)',
      lineHeight: 'var(--typography-l-body-md-bold-line-height)',
      fontWeight: 'var(--typography-l-body-md-bold-font-weight)',
    },
    BodySM: {
      fontFamily: 'var(--typography-l-body-sm-font-family)',
      fontSize: 'var(--typography-l-body-sm-font-size)',
      lineHeight: 'var(--typography-l-body-sm-line-height)',
      fontWeight: 'var(--typography-l-body-sm-font-weight)',
    },
    'BodySM Medium': {
      fontFamily: 'var(--typography-l-body-sm-medium-font-family)',
      fontSize: 'var(--typography-l-body-sm-medium-font-size)',
      lineHeight: 'var(--typography-l-body-sm-medium-line-height)',
      fontWeight: 'var(--typography-l-body-sm-medium-font-weight)',
    },
    'BodySM Bold': {
      fontFamily: 'var(--typography-l-body-sm-bold-font-family)',
      fontSize: 'var(--typography-l-body-sm-bold-font-size)',
      lineHeight: 'var(--typography-l-body-sm-bold-line-height)',
      fontWeight: 'var(--typography-l-body-sm-bold-font-weight)',
    },
    BodyXS: {
      fontFamily: 'var(--typography-l-body-xs-font-family)',
      fontSize: 'var(--typography-l-body-xs-font-size)',
      lineHeight: 'var(--typography-l-body-xs-line-height)',
      fontWeight: 'var(--typography-l-body-xs-font-weight)',
      letterSpacing: 'var(--typography-l-body-xs-letter-spacing)',
    },
    'BodyXS Medium': {
      fontFamily: 'var(--typography-l-body-xs-medium-font-family)',
      fontSize: 'var(--typography-l-body-xs-medium-font-size)',
      lineHeight: 'var(--typography-l-body-xs-medium-line-height)',
      fontWeight: 'var(--typography-l-body-xs-medium-font-weight)',
      letterSpacing: 'var(--typography-l-body-xs-medium-letter-spacing)',
    },
  };

  const getCssVar = (variable) => {
    const strippedVar = variable.slice(4, -1);

    return getComputedStyle(document.documentElement)
      .getPropertyValue(strippedVar)
      .slice(0, -3)
      .trim();
  };

  return (
    <>
      {Object.values(styles).map((value, i) => {
        const title = Object.getOwnPropertyNames(styles)[i];
        let tag = 'p';

        if (i <= 4) {
          tag = `h${i + 1}`;
        }

        return (
          <Text as={tag} style={value} {...args} key={i}>
            {`L ${title} ${getCssVar(value.fontSize) * fontBase}px/${
              getCssVar(value.lineHeight) * fontBase
            }px

            ${getCssVar(value.fontSize)}rem/${getCssVar(value.lineHeight)}rem `}
            {title === 'HeadingSM Regular' && (
              <span className="text-error-default">DEPRECATED</span>
            )}
          </Text>
        );
      })}
    </>
  );
};
