/**
 * IconSemantic - semantic (ADR-0003)
 */
export const IconSemanticSemantic = {
  /**
   * Informational semantic (info icon, primary color)
   */
  Info: 'info',
  /**
   * Positive / confirmation semantic
   */
  Success: 'success',
  /**
   * Caution semantic
   */
  Warning: 'warning',
  /**
   * Critical error semantic
   */
  Error: 'error',
} as const;
export type IconSemanticSemantic =
  (typeof IconSemanticSemantic)[keyof typeof IconSemanticSemantic];

/**
 * IconSemantic shared props (ADR-0004)
 */
export type IconSemanticPropsShared = {
  /**
   * Maps to a fixed icon and theme color for alerts and messaging.
   */
  semantic: IconSemanticSemantic;
};
