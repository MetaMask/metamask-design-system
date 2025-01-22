import type { ButtonBaseProps } from '../../../../primitives/ButtonBase';

/**
 * ButtonPrimary component props.
 */
export type ButtonPrimaryProps = {
  /**
   * Optional prop to show the danger state of the button.
   * @default false
   */
  isDanger?: boolean;
  /**
   * Optional prop to show the inverse state of the button, which is reserved for buttons on colored backgrounds.
   * @default false
   */
  isInverse?: boolean;
} & ButtonBaseProps;
