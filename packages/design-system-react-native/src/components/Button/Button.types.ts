import type { ButtonVariant } from '@metamask/design-system-shared';

import type { ButtonPrimaryProps } from './variants/ButtonPrimary';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary';

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
  variant?: ButtonVariant;
};
