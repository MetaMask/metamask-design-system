import React from 'react';

import { ButtonTertiary } from '../ButtonTertiary';
import { ButtonPrimary } from '../ButtonPrimary';
import { ButtonSecondary } from '../ButtonSecondary';
import type { ButtonTertiaryProps } from '../ButtonTertiary';
import type { ButtonPrimaryProps } from '../ButtonPrimary';
import type { ButtonSecondaryProps } from '../ButtonSecondary';
import type { ButtonProps } from './Button.types';
import { ButtonVariant } from './Button.types';

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
