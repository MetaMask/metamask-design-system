import type { ButtonPropsShared } from '@metamask/design-system-shared';

import type { ButtonPrimaryProps } from './variants/ButtonPrimary/index.js';
import type { ButtonSecondaryProps } from './variants/ButtonSecondary/index.js';
import type { ButtonTertiaryProps } from './variants/ButtonTertiary/index.js';

/**
 * Button component props.
 */
export type ButtonProps = ButtonPropsShared &
  (ButtonTertiaryProps | ButtonPrimaryProps | ButtonSecondaryProps);
