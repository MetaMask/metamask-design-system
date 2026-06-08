import {
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Text } from '../Text';

import type { TextButtonProps } from './TextButton.types';

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      children,
      className,
      variant = TextVariant.BodyMd,
      fontWeight = FontWeight.Medium,
      fontFamily,
      fontStyle,
      textTransform,
      textAlign,
      overflowWrap,
      ellipsis,
      style,
      onClick,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const mergedClassName = twMerge(
      'inline cursor-pointer appearance-none border-0 bg-transparent p-0 text-primary-default',
      'hover:text-primary-default-hover hover:underline hover:decoration-primary-default-hover hover:decoration-2 hover:underline-offset-4',
      'active:text-primary-default-pressed active:decoration-primary-default-pressed',
      className,
    );

    return (
      <Text
        asChild
        variant={variant}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        fontStyle={fontStyle}
        textTransform={textTransform}
        textAlign={textAlign}
        overflowWrap={overflowWrap}
        ellipsis={ellipsis}
        color={TextColor.PrimaryDefault}
        className={mergedClassName}
        style={style}
      >
        <button ref={ref} type={type} onClick={onClick} {...rest}>
          {children}
        </button>
      </Text>
    );
  },
);

TextButton.displayName = 'TextButton';
