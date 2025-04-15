import React from 'react';

import { ButtonVariant } from '../../types';
import { ButtonPrimary } from './variants/ButtonPrimary';
import type { ButtonPrimaryProps } from './variants/ButtonPrimary';
import { ButtonSecondary } from './variants/ButtonSecondary';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary';
import { ButtonTertiary } from './variants/ButtonTertiary';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary';
import type { ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
