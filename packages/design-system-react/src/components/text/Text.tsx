import { Slot } from '@radix-ui/react-slot';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { TEXT_CLASS_MAP, TEXT_DEFAULT_TAG_MAP } from './Text.constants';
import type { TextProps } from './Text.types';
import { TextVariant, TextColor } from './Text.types';

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
  asChild,
  color = TextColor.TextDefault,
  style,
}) => {
  // When asChild is true, use Radix Slot to merge props onto the child component.
  // Otherwise, render the semantic HTML element mapped to this variant (e.g. h1-h4, p).
  const Component = asChild ? Slot : TEXT_DEFAULT_TAG_MAP[variant];

  const mergedClassName = twMerge(
    color,
    TEXT_CLASS_MAP[variant],
    fontWeight,
    fontStyle,
    textTransform,
    textAlign,
    overflowWrap,
    ellipsis && 'truncate',
    className,
  );

  return (
    <Component className={mergedClassName} style={style}>
      {children}
    </Component>
  );
};
