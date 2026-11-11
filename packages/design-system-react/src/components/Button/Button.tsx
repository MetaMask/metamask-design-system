import { ButtonVariant } from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';

import type { ButtonProps } from './Button.types.js';
import { ButtonPrimary } from './variants/ButtonPrimary/index.js';
import type { ButtonPrimaryProps } from './variants/ButtonPrimary/index.js';
import { ButtonSecondary } from './variants/ButtonSecondary/index.js';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary/index.js';
import { ButtonTertiary } from './variants/ButtonTertiary/index.js';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary/index.js';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = ButtonVariant.Primary, ...props }, ref) => {
    switch (variant) {
      case ButtonVariant.Primary:
        return <ButtonPrimary ref={ref} {...(props as ButtonPrimaryProps)} />;
      case ButtonVariant.Secondary:
        return (
          <ButtonSecondary ref={ref} {...(props as ButtonSecondaryProps)} />
        );
      case ButtonVariant.Tertiary:
        return <ButtonTertiary ref={ref} {...(props as ButtonTertiaryProps)} />;
      default:
        return <ButtonPrimary ref={ref} {...(props as ButtonPrimaryProps)} />;
    }
  },
);

Button.displayName = 'Button';
