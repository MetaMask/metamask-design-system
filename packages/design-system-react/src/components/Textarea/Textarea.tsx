import React, { forwardRef } from 'react';

import { TextVariant } from '../../types';
import { twMerge } from '../../utils/tw-merge';
import {
  CLASSMAP_TEXT_VARIANT_FONTSTYLE,
  CLASSMAP_TEXT_VARIANT_FONTWEIGHT,
} from '../Text/Text.constants';

import { CLASSMAP_TEXTAREA_RESIZE, TextareaResize } from './Textarea.constants';
import type { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      textVariant = TextVariant.BodyMd,
      isDisabled = false,
      isReadOnly = false,
      isError = false,
      resize = TextareaResize.Vertical,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const mergedClassName = twMerge(
      'w-full rounded border bg-default text-default outline-none transition-colors',
      'px-3 py-2',
      'placeholder:text-alternative',
      isError
        ? 'border-error-default focus:border-error-default'
        : 'border-transparent focus:border-primary-default',
      CLASSMAP_TEXTAREA_RESIZE[resize],
      CLASSMAP_TEXT_VARIANT_FONTSTYLE[textVariant],
      CLASSMAP_TEXT_VARIANT_FONTWEIGHT[textVariant],
      isDisabled && 'cursor-not-allowed opacity-50',
      className,
    );

    return (
      <textarea
        ref={ref}
        className={mergedClassName}
        style={style}
        {...rest}
        disabled={isDisabled}
        readOnly={isReadOnly}
        aria-invalid={isError || undefined}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
