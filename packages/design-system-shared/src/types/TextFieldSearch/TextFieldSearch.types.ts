/**
 * TextFieldSearch shared props (ADR-0004).
 *
 * Layers search-specific chrome on top of the host `TextField`. The clear
 * button's click handler and platform-specific `ButtonIcon` props stay on
 * the platform layer (web vs. React Native event types differ).
 */
export type TextFieldSearchPropsShared = {
  /**
   * When true (default), a clear button is rendered after the input when
   * `value` is truthy. Set to `false` to hide the clear button entirely.
   *
   * @default true
   */
  showClearButton?: boolean;
};
