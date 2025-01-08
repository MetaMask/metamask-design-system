import type { ButtonLinkProps } from '../button-link';
import type { ButtonPrimaryProps } from '../button-primary';
import type { ButtonSecondaryProps } from '../button-secondary';

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
   * Link button variant - used for link-like actions
   */
  Link = 'link',
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
  | (Omit<ButtonLinkProps, 'ref'> & {
      variant?: ButtonVariant.Link;
    })
);
