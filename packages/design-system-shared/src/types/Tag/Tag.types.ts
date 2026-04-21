import type { ReactNode } from 'react';

/**
 * Tag severity values (ADR-0003).
 * Shared across platforms so Figma / React / React Native stay aligned.
 */
export const TagSeverity = {
  Neutral: 'neutral',
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
} as const;

export type TagSeverity = (typeof TagSeverity)[keyof typeof TagSeverity];

/**
 * Tag component shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type TagPropsShared = {
  /**
   * Semantic severity (background, default text color for string children, and icon tint).
   * Aligns with `BannerAlert` and `IconAlert`, which use `severity` for the same class of states.
   *
   * @default TagSeverity.Neutral
   */
  severity?: TagSeverity;
  /**
   * Content inside the tag. String children are wrapped in design-system `Text` with tag typography; other nodes render unchanged.
   */
  children?: ReactNode;
  /**
   * Optional node at the start of the tag when no start icon is set (e.g. custom glyph or badge).
   */
  startAccessory?: ReactNode;
  /**
   * Optional node at the end of the tag when no end icon is set.
   */
  endAccessory?: ReactNode;
};
