import type { ButtonPrimaryProps } from '../button-primary';
import type { ButtonSecondaryProps } from '../button-secondary';
import type { ButtonTertiaryProps } from '../button-tertiary';

export enum ButtonVariant {
  /**
   * Primary button variant - used for primary actions
   */
  Primary = 'primary',
  /**
   * Secondary button variant - used for secondary actions
   */
  Secondary = 'secondary',
  /**
   * Tertiary button variant - used for tertiary-like actions
   */
  Tertiary = 'tertiary',
}

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
