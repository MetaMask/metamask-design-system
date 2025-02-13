import React from 'react';

import type { ButtonProps } from './Button.types';
import { ButtonVariant } from './Button.types';
import ButtonPrimary from './variants/ButtonPrimary';
import ButtonSecondary from './variants/ButtonSecondary';
import ButtonTertiary from './variants/ButtonTertiary';

const Button = (buttonProps: ButtonProps) => {
  const { variant, ...restProps } = buttonProps;

  switch (variant) {
    case ButtonVariant.Tertiary:
      return <ButtonTertiary {...restProps} />;
    case ButtonVariant.Primary:
      return <ButtonPrimary {...restProps} />;
    case ButtonVariant.Secondary:
      return <ButtonSecondary {...restProps} />;
    default:
      throw new Error(
        `Invalid Button Variant: ${variant}. Expected one of: ${Object.values(ButtonVariant).join(', ')}`,
      );
  }
};

export default Button;
