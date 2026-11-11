import { ButtonVariant } from '@metamask/design-system-shared';
import React from 'react';

import type { ButtonProps } from './Button.types.js';
import { ButtonPrimary } from './variants/ButtonPrimary/index.js';
import { ButtonSecondary } from './variants/ButtonSecondary/index.js';
import { ButtonTertiary } from './variants/ButtonTertiary/index.js';

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
