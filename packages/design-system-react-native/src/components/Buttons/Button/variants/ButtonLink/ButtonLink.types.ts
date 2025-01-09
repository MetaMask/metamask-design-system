import type { ButtonBaseProps } from '../../../../../base-components/ButtonBase';

/**
 * ButtonLink component props.
 */
export type ButtonLinkProps = {
  /**
   * Optional prop to show the pressed state of the button.
   * @default false
   */
  isPressed?: boolean;
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
