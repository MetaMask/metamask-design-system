import React from 'react';

import { ButtonVariant } from '../../types';

import type { ButtonProps } from './Button.types';
import { ButtonPrimary } from './variants/ButtonPrimary';
import { ButtonSecondary } from './variants/ButtonSecondary';
import { ButtonTertiary } from './variants/ButtonTertiary';

export const Button = (buttonProps: ButtonProps) => {
  const { variant = ButtonVariant.Primary, ...restProps } = buttonProps;

  switch (variant) {
    case ButtonVariant.Tertiary:
      return <ButtonTertiary {...restProps} />;
    case ButtonVariant.Primary:
      return <ButtonPrimary {...restProps} />;
    case ButtonVariant.Secondary:
      return <ButtonSecondary {...restProps} />;
    default:
      throw new Error(
        `Invalid Button Variant: ${String(variant)}. Expected one of: ${Object.values(ButtonVariant).join(', ')}`,
      );
  }
};
