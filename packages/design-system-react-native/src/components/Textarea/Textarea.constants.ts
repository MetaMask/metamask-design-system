import { typography } from '@metamask/design-tokens';

import { TextVariant } from '../../types';

/**
 * Typographic metrics for Textarea: same tokens as `text-*` utilities but **without** `lineHeight`.
 * React Native `TextInput` with multiline aligns text more predictably when line height is not set
 * from the design-system paragraph specs.
 */
export const MAP_TEXT_VARIANT_TEXTAREA_METRICS: Record<
  TextVariant,
  { fontSize: number; letterSpacing: number }
> = {
  [TextVariant.DisplayLg]: {
    fontSize: typography.sDisplayLG.fontSize,
    letterSpacing: typography.sDisplayLG.letterSpacing,
  },
  [TextVariant.DisplayMd]: {
    fontSize: typography.sDisplayMD.fontSize,
    letterSpacing: typography.sDisplayMD.letterSpacing,
  },
  [TextVariant.HeadingLg]: {
    fontSize: typography.sHeadingLG.fontSize,
    letterSpacing: typography.sHeadingLG.letterSpacing,
  },
  [TextVariant.HeadingMd]: {
    fontSize: typography.sHeadingMD.fontSize,
    letterSpacing: typography.sHeadingMD.letterSpacing,
  },
  [TextVariant.HeadingSm]: {
    fontSize: typography.sHeadingSM.fontSize,
    letterSpacing: typography.sHeadingSM.letterSpacing,
  },
  [TextVariant.BodyLg]: {
    fontSize: typography.sBodyLGMedium.fontSize,
    letterSpacing: typography.sBodyLGMedium.letterSpacing,
  },
  [TextVariant.BodyMd]: {
    fontSize: typography.sBodyMD.fontSize,
    letterSpacing: typography.sBodyMD.letterSpacing,
  },
  [TextVariant.BodySm]: {
    fontSize: typography.sBodySM.fontSize,
    letterSpacing: typography.sBodySM.letterSpacing,
  },
  [TextVariant.BodyXs]: {
    fontSize: typography.sBodyXS.fontSize,
    letterSpacing: typography.sBodyXS.letterSpacing,
  },
  [TextVariant.PageHeading]: {
    fontSize: typography.sPageHeading.fontSize,
    letterSpacing: typography.sPageHeading.letterSpacing,
  },
  [TextVariant.SectionHeading]: {
    fontSize: typography.sSectionHeading.fontSize,
    letterSpacing: typography.sSectionHeading.letterSpacing,
  },
  [TextVariant.ButtonLabelMd]: {
    fontSize: typography.sButtonLabelMd.fontSize,
    letterSpacing: typography.sButtonLabelMd.letterSpacing,
  },
  [TextVariant.ButtonLabelLg]: {
    fontSize: typography.sButtonLabelLg.fontSize,
    letterSpacing: typography.sButtonLabelLg.letterSpacing,
  },
  [TextVariant.AmountDisplayLg]: {
    fontSize: typography.sAmountDisplayLg.fontSize,
    letterSpacing: typography.sAmountDisplayLg.letterSpacing,
  },
};

/**
 * Default number of lines displayed in the Textarea.
 */
export const TEXTAREA_DEFAULT_NUMBER_OF_LINES = 4;
