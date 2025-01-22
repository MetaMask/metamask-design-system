import { ButtonBaseSize } from '../../primitives/ButtonBase';
import type { ButtonPrimaryProps } from './variants/ButtonPrimary';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary';

export const ButtonSize = ButtonBaseSize;

/**
 * Button variants.
 */
export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

/**
 * Button component props.
 */
export type ButtonProps = (
  | ButtonTertiaryProps
  | ButtonPrimaryProps
  | ButtonSecondaryProps
) & {
  /**
   * Variant of Button.
   */
  variant: ButtonVariant;
};
