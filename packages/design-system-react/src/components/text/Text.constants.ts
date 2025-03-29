import { TextVariant } from './Text.types';

export const CLASSMAP_TEXT_VARIANT_FONTSTYLE: Record<TextVariant, string> = {
  [TextVariant.DisplayLg]: 'text-[2.5rem] md:text-[4rem]',
  [TextVariant.DisplayMd]:
    'text-s-display-md leading-s-display-md tracking-s-display-md md:text-l-display-md',
  [TextVariant.HeadingLg]:
    'text-s-heading-lg leading-s-heading-lg tracking-s-heading-lg md:text-l-heading-lg',
  [TextVariant.HeadingMd]:
    'text-s-heading-md leading-s-heading-md tracking-s-heading-md md:text-l-heading-md',
  [TextVariant.HeadingSm]:
    'text-s-heading-sm leading-s-heading-sm tracking-s-heading-sm md:text-l-heading-sm',
  [TextVariant.BodyLg]:
    'text-s-body-lg leading-s-body-lg tracking-s-body-lg md:text-l-body-lg',
  [TextVariant.BodyMd]:
    'text-s-body-md leading-s-body-md tracking-s-body-md md:text-l-body-md',
  [TextVariant.BodySm]:
    'text-s-body-sm leading-s-body-sm tracking-s-body-sm md:text-l-body-sm',
  [TextVariant.BodyXs]:
    'text-s-body-xs leading-s-body-xs tracking-s-body-xs md:text-l-body-xs',
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
};
