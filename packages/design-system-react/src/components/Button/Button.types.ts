import type { ButtonVariant } from '../../types';

import type { ButtonPrimaryProps } from './variants/ButtonPrimary';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary';

export type ButtonProps = {
  /**
   * Optional prop to control the variant of the Button
   *
   * @default ButtonVariant.Primary
   */
  variant?: ButtonVariant;
} & (
  | (Omit<ButtonPrimaryProps, 'ref'> & {
      variant?: 'primary';
    })
  | (Omit<ButtonSecondaryProps, 'ref'> & {
      variant?: 'secondary';
    })
  | (Omit<ButtonTertiaryProps, 'ref'> & {
      variant?: 'tertiary';
    })
);
