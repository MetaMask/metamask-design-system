import { TextVariant } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import {
  TWCLASSMAP_TEXT_VARIANT_FONTSTYLE,
  TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT,
} from '../Text/Text.constants';

import type { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      textVariant = TextVariant.BodyMd,
      isDisabled = false,
      isReadonly = false,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const mergedClassName = twMerge(
      'bg-default text-default w-full rounded border outline-none transition-colors',
      'focus:border-primary-default border-transparent focus:outline-none',
      'placeholder:text-alternative',
      TWCLASSMAP_TEXT_VARIANT_FONTSTYLE[textVariant],
      TWCLASSMAP_TEXT_VARIANT_FONTWEIGHT[textVariant],
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    );

    return (
      <input
        ref={ref}
        className={mergedClassName}
        style={style}
        {...rest}
        disabled={isDisabled}
        readOnly={isReadonly}
      />
    );
  },
);

Input.displayName = 'Input';
