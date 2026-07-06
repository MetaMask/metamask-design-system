import type { ButtonPropsShared } from '@metamask/design-system-shared';

import type { ButtonPrimaryProps } from './variants/ButtonPrimary';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary';

/**
 * Button component props.
 */
export type ButtonProps = ButtonPropsShared &
  (ButtonTertiaryProps | ButtonPrimaryProps | ButtonSecondaryProps);
