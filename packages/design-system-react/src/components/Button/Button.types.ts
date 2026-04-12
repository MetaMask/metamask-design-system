import type { ButtonVariant } from '@metamask/design-system-shared';

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
      variant?: Extract<ButtonVariant, 'primary'>;
    })
  | (Omit<ButtonSecondaryProps, 'ref'> & {
      variant?: Extract<ButtonVariant, 'secondary'>;
    })
  | (Omit<ButtonTertiaryProps, 'ref'> & {
      variant?: Extract<ButtonVariant, 'tertiary'>;
    })
);
