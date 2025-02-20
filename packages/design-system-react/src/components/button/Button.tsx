import React from 'react';

import { ButtonTertiary } from '../button-tertiary';
import { ButtonPrimary } from '../button-primary';
import { ButtonSecondary } from '../button-secondary';
import type { ButtonTertiaryProps } from '../button-tertiary';
import type { ButtonPrimaryProps } from '../button-primary';
import type { ButtonSecondaryProps } from '../button-secondary';
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
