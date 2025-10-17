import { TextVariant } from '../../types';

export const CLASSMAP_TEXT_VARIANT_FONTSTYLE: Record<TextVariant, string> = {
  [TextVariant.DisplayLg]: 'text-display-lg',
  [TextVariant.DisplayMd]: 'text-display-md',
  [TextVariant.HeadingLg]: 'text-heading-lg',
  [TextVariant.HeadingMd]: 'text-heading-md',
  [TextVariant.HeadingSm]: 'text-heading-sm',
  [TextVariant.BodyLg]: 'text-body-lg',
  [TextVariant.BodyMd]: 'text-body-md',
  [TextVariant.BodySm]: 'text-body-sm',
  [TextVariant.BodyXs]: 'text-body-xs',
  [TextVariant.PageHeading]: 'text-page-heading',
  [TextVariant.SectionHeading]: 'text-section-heading',
  [TextVariant.ButtonLabelMd]: 'text-button-label-md',
  [TextVariant.ButtonLabelLg]: 'text-button-label-lg',
  [TextVariant.AmountDisplayLg]: 'text-amount-display-lg',
};

export const CLASSMAP_TEXT_VARIANT_FONTWEIGHT: Record<TextVariant, string> = {
  [TextVariant.DisplayLg]: 'font-bold md:font-medium',
  [TextVariant.DisplayMd]: 'font-bold md:font-medium',
  [TextVariant.HeadingLg]: 'font-bold',
  [TextVariant.HeadingMd]: 'font-bold',
  [TextVariant.HeadingSm]: 'font-bold',
  [TextVariant.BodyLg]: 'font-medium',
  [TextVariant.BodyMd]: 'font-regular',
  [TextVariant.BodySm]: 'font-regular',
  [TextVariant.BodyXs]: 'font-regular',
  [TextVariant.PageHeading]: 'font-bold',
  [TextVariant.SectionHeading]: 'font-bold',
  [TextVariant.ButtonLabelMd]: 'font-medium',
  [TextVariant.ButtonLabelLg]: 'font-medium',
  [TextVariant.AmountDisplayLg]: 'font-bold md:font-medium',
};

export const MAP_TEXT_VARIANT_TAG: Record<
  TextVariant,
  keyof JSX.IntrinsicElements
> = {
  [TextVariant.DisplayLg]: 'h1',
  [TextVariant.DisplayMd]: 'h1',
  [TextVariant.HeadingLg]: 'h2',
  [TextVariant.HeadingMd]: 'h3',
  [TextVariant.HeadingSm]: 'h4',
  [TextVariant.BodyLg]: 'p',
  [TextVariant.BodyMd]: 'p',
  [TextVariant.BodySm]: 'p',
  [TextVariant.BodyXs]: 'p',
  [TextVariant.PageHeading]: 'h1',
  [TextVariant.SectionHeading]: 'h2',
  [TextVariant.ButtonLabelMd]: 'span',
  [TextVariant.ButtonLabelLg]: 'span',
  [TextVariant.AmountDisplayLg]: 'span',
};
