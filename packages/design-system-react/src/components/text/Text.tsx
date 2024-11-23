import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from '../../utils/tw-merge';
import { TextVariant, TextProps, TextColor } from './Text.types';
import { TEXT_CLASS_MAP, TEXT_DEFAULT_TAG_MAP } from './Text.constants';

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
