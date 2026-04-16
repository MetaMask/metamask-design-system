import type { ReactNode } from 'react';

/**
 * Tag semantic variant (ADR-0003).
 * Shared across platforms so Figma / React / React Native stay aligned.
 */
export const TagVariant = {
  Neutral: 'neutral',
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
} as const;

export type TagVariant = (typeof TagVariant)[keyof typeof TagVariant];

/**
 * Tag component shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type TagPropsShared = {
  /**
   * Semantic severity (background and default text color for label / plain-text children).
   * Aligns with `BannerAlert` and `IconAlert`, which use `severity` for the same class of states.
   *
   * @default TagVariant.Neutral
   */
  severity?: TagVariant;
  /**
   * Label string; when set, shown instead of string/number `children`. Matches Figma `Label` in Code Connect.
   */
  label?: string;
  /**
   * Content inside the tag. String and number children use the Tag text styling; use `label` for a dedicated string prop.
   */
  children?: ReactNode;
};
