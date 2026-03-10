/**
 * ButtonFilter component shared props (ADR-0004)
 * Platform-independent state shared across React and React Native.
 */
export type ButtonFilterPropsShared = {
  /**
   * Whether the filter button is in an active state.
   *
   * @default false
   */
  isActive?: boolean;
};
