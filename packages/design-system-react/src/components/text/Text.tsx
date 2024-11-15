import React from 'react';
import { twMerge } from '../../utils/tw-merge';

import { TextVariant, TextProps, TextColor } from './Text.types';

// Mapping from TextVariant to Tailwind class names
const typographyClassMap: Record<TextVariant, string> = {
  [TextVariant.DisplayLg]:
    'text-[2.5rem] md:text-[4rem] font-bold md:font-medium',
  [TextVariant.DisplayMd]:
    'text-s-display-md font-s-display-md leading-s-display-md tracking-s-display-md md:text-l-display-md md:font-medium',
  [TextVariant.HeadingLg]:
    'text-s-heading-lg font-s-heading-lg leading-s-heading-lg tracking-s-heading-lg md:text-l-heading-lg',
  [TextVariant.HeadingMd]:
    'text-s-heading-md font-s-heading-md leading-s-heading-md tracking-s-heading-md md:text-l-heading-md',
  [TextVariant.HeadingSm]:
    'text-s-heading-sm font-s-heading-sm leading-s-heading-sm tracking-s-heading-sm md:text-l-heading-sm',
  [TextVariant.BodyLg]:
    'text-s-body-lg font-s-body-lg leading-s-body-lg tracking-s-body-lg md:text-l-body-lg',
  [TextVariant.BodyMd]:
    'text-s-body-md font-s-body-md leading-s-body-md tracking-s-body-md md:text-l-body-md',
  [TextVariant.BodySm]:
    'text-s-body-sm font-s-body-sm leading-s-body-sm tracking-s-body-sm',
  [TextVariant.BodyXs]:
    'text-s-body-xs font-s-body-xs leading-s-body-xs tracking-s-body-xs',
};

// Mapping for default HTML tags based on variant
const defaultTagMap: Record<TextVariant, keyof JSX.IntrinsicElements> = {
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

export const Text: React.FC<TextProps> = ({
  variant = TextVariant.BodyMd,
  children,
  className,
  fontWeight,
  fontStyle,
  textTransform,
  textAlign,
  overflowWrap,
  ellipsis,
  as,
  color = TextColor.TextDefault,
}) => {
  // Use provided 'as' prop or fall back to the default tag for the variant
  const Tag = as || defaultTagMap[variant];

  const mergedClassName = twMerge(
    color,
    typographyClassMap[variant],
    fontWeight,
    fontStyle,
    textTransform,
    textAlign,
    overflowWrap,
    ellipsis && 'truncate',
    className,
  );

  return <Tag className={mergedClassName}>{children}</Tag>;
};
