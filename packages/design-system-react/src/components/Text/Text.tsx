import {
  FontFamily,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';

import {
  TWCLASSMAP_TEXT_VARIANT_FONTSTYLE,
  TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT,
  TWCLASSMAP_TEXT_FONTFAMILY,
  TWCLASSMAP_TEXT_FONTSTYLE,
  TWCLASSMAP_TEXT_FONTWEIGHT,
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

  const mergedClassName = `${twMerge(
    color,
    TWCLASSMAP_TEXT_VARIANT_FONTSTYLE[variant],
    fontWeight
      ? TWCLASSMAP_TEXT_FONTWEIGHT[fontWeight]
      : TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT[variant],
    fontStyle ? TWCLASSMAP_TEXT_FONTSTYLE[fontStyle] : undefined,
    TWCLASSMAP_TEXT_FONTFAMILY[fontFamily],
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
