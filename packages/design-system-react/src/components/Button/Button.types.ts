import type { ButtonPropsShared, ButtonVariant } from '@metamask/design-system-shared';

import type { ButtonPrimaryProps } from './variants/ButtonPrimary';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary';

export type ButtonProps = ButtonPropsShared & (
  | (Omit<ButtonPrimaryProps, 'ref'> & {
      variant?: typeof ButtonVariant.Primary;
    })
  | (Omit<ButtonSecondaryProps, 'ref'> & {
      variant?: typeof ButtonVariant.Secondary;
    })
  | (Omit<ButtonTertiaryProps, 'ref'> & {
      variant?: typeof ButtonVariant.Tertiary;
    })
);
