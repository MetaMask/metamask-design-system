import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { FontFamily, TextColor, TextVariant } from '../../types';
import { twMerge } from '../../utils/tw-merge';

import {
  CLASSMAP_FONTFAMILY_WEIGHT_OVERRIDE,
  CLASSMAP_TEXT_VARIANT_FONTSTYLE,
  CLASSMAP_TEXT_VARIANT_FONTWEIGHT,
  MAP_TEXT_VARIANT_TAG,
} from './Text.constants';
import type { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({
  variant = TextVariant.BodyMd,
  children,
  className,
  fontWeight,
  fontFamily = FontFamily.Default,
  fontStyle,
  textTransform,
  textAlign,
  overflowWrap,
  ellipsis,
  asChild,
  color = TextColor.TextDefault,
  style,
  ...props
}) => {
  // When asChild is true, use Radix Slot to merge props onto the child component.
  // Otherwise, render the semantic HTML element mapped to this variant (e.g. h1-h4, p).
  const Component = asChild ? Slot : MAP_TEXT_VARIANT_TAG[variant];

  // Apply font family weight override if needed (e.g., Hero font only has regular weight)
  const effectiveFontWeight =
    CLASSMAP_FONTFAMILY_WEIGHT_OVERRIDE[fontFamily] ||
    fontWeight ||
    CLASSMAP_TEXT_VARIANT_FONTWEIGHT[variant];

  const mergedClassName = `${twMerge(
    color,
    CLASSMAP_TEXT_VARIANT_FONTSTYLE[variant],
    effectiveFontWeight,
    fontStyle,
    fontFamily,
    textTransform,
    textAlign,
    overflowWrap,
    ellipsis && 'truncate',
    className,
  )}`;

  return (
    <Component className={mergedClassName} style={style} {...props}>
      {children}
    </Component>
  );
};
