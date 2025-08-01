import { TextVariant } from '../../types';

export const CLASSMAP_TEXT_VARIANT_FONTSTYLE: Record<TextVariant, string> = {
  [TextVariant.DisplayLg]:
    'text-s-display-lg leading-s-display-lg tracking-s-display-lg md:text-l-display-lg md:leading-l-display-lg md:tracking-l-display-lg',
  [TextVariant.DisplayMd]:
    'text-s-display-md leading-s-display-md tracking-s-display-md md:text-l-display-md md:leading-l-display-md md:tracking-l-display-md',
  [TextVariant.HeadingLg]:
    'text-s-heading-lg leading-s-heading-lg tracking-s-heading-lg md:text-l-heading-lg md:leading-l-heading-lg md:tracking-l-heading-lg',
  [TextVariant.HeadingMd]:
    'text-s-heading-md leading-s-heading-md tracking-s-heading-md md:text-l-heading-md md:leading-l-heading-md md:tracking-l-heading-md',
  [TextVariant.HeadingSm]:
    'text-s-heading-sm leading-s-heading-sm tracking-s-heading-sm md:text-l-heading-sm md:leading-l-heading-sm md:tracking-l-heading-sm',
  [TextVariant.BodyLg]:
    'text-s-body-lg leading-s-body-lg tracking-s-body-lg md:text-l-body-lg md:leading-l-body-lg md:tracking-l-body-lg',
  [TextVariant.BodyMd]:
    'text-s-body-md leading-s-body-md tracking-s-body-md md:text-l-body-md md:leading-l-body-md md:tracking-l-body-md',
  [TextVariant.BodySm]:
    'text-s-body-sm leading-s-body-sm tracking-s-body-sm md:text-l-body-sm md:leading-l-body-sm md:tracking-l-body-sm',
  [TextVariant.BodyXs]:
    'text-s-body-xs leading-s-body-xs tracking-s-body-xs md:text-l-body-xs md:leading-l-body-xs md:tracking-l-body-xs',
  [TextVariant.PageHeading]:
    'text-s-page-heading leading-s-page-heading tracking-s-page-heading md:text-l-page-heading md:leading-l-page-heading md:tracking-l-page-heading',
  [TextVariant.SectionHeading]:
    'text-s-section-heading leading-s-section-heading tracking-s-section-heading md:text-l-section-heading md:leading-l-section-heading md:tracking-l-section-heading',
  [TextVariant.ButtonLabelMd]:
    'text-s-button-label-md leading-s-button-label-md tracking-s-button-label-md md:text-l-button-label-md md:leading-l-button-label-md md:tracking-l-button-label-md',
  [TextVariant.ButtonLabelLg]:
    'text-s-button-label-lg leading-s-button-label-lg tracking-s-button-label-lg md:text-l-button-label-lg md:leading-l-button-label-lg md:tracking-l-button-label-lg',
  [TextVariant.AmountDisplayLg]:
    'text-s-amount-display-lg leading-s-amount-display-lg tracking-s-amount-display-lg md:text-l-amount-display-lg md:leading-l-amount-display-lg md:tracking-l-amount-display-lg',
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
