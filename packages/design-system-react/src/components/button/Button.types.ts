import { ButtonVariant } from '../../types';
import type { ButtonPrimaryProps } from '../button-primary';
import type { ButtonSecondaryProps } from '../button-secondary';
import type { ButtonTertiaryProps } from '../button-tertiary';

export type ButtonProps = {
  /**
   * Optional prop to control the variant of the Button
   * @default ButtonVariant.Primary
   */
  variant?: ButtonVariant;
} & (
  | (Omit<ButtonPrimaryProps, 'ref'> & {
      variant?: ButtonVariant.Primary;
    })
  | (Omit<ButtonSecondaryProps, 'ref'> & {
      variant?: ButtonVariant.Secondary;
    })
  | (Omit<ButtonTertiaryProps, 'ref'> & {
      variant?: ButtonVariant.Tertiary;
    })
);
