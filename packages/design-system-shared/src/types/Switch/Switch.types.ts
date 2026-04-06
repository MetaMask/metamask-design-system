/**
 * Switch component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type SwitchPropsShared = {
  /**
   * Required prop to determine whether the switch is currently on.
   * This component is fully controlled, so you must manage this state
   * in your parent component.
   */
  isOn: boolean;

  /**
   * Optional prop that when true, disables the switch.
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Optional label prop that renders text beside the switch.
   */
  label?: string;
};
