import type { ReactNode } from 'react';

/**
 * Checkbox component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type CheckboxPropsShared = {
  /**
   * Required prop to determine whether the checkbox is currently selected.
   * This component is fully controlled, so you must manage this state
   * in your parent component.
   */
  isSelected: boolean;
  /**
   * Optional prop that when true, disables the checkbox.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop that when true, displays the invalid/error state of the checkbox.
   *
   * @default false
   */
  isInvalid?: boolean;
  /**
   * Optional label prop that renders text or a React node as a label beside the checkbox.
   */
  label?: ReactNode | string;
  /**
   * Required callback for when the checked state changes.
   * Use this to update your state.
   */
  onChange: (isSelected: boolean) => void;
};
