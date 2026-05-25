import { FontWeight, TextVariant } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Text } from '../Text';

import type { LabelProps } from './Label.types';

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, className, children, ...textProps }, ref) => (
    <Text
      variant={TextVariant.BodyMd}
      fontWeight={FontWeight.Medium}
      {...textProps}
      asChild
      className={twMerge(
        'inline-flex items-center',
        // Mirror the legacy `mm-label--html-for` cursor affordance: when the
        // label is associated with an input, clicking it focuses the input,
        // so signal the interactive surface with a pointer cursor.
        htmlFor && 'cursor-pointer',
        className,
      )}
    >
      <label ref={ref} htmlFor={htmlFor}>
        {children}
      </label>
    </Text>
  ),
);

Label.displayName = 'Label';
