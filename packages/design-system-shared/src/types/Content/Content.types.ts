import type { ReactNode } from 'react';

/**
 * Vertical alignment options for the Content row.
 */
export const ContentVerticalAlignment = {
  Top: 'top',
  Center: 'center',
} as const;

export type ContentVerticalAlignment =
  (typeof ContentVerticalAlignment)[keyof typeof ContentVerticalAlignment];

/**
 * Content shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type ContentPropsShared = {
  /**
   * Optional node rendered before the content row (e.g. leading icon), via
   * `BoxRow.startAccessory` — before `avatar`.
   */
  startAccessory?: ReactNode;
  /**
   * Optional node rendered after the content row (e.g. chevron), via
   * `BoxRow.endAccessory` — after the value/subvalue column.
   */
  endAccessory?: ReactNode;
  /**
   * Optional content above the content row. When set (with `bottomAccessory` or
   * alone), root is `BoxColumn` with this as `topAccessory`.
   */
  topAccessory?: ReactNode;
  /**
   * Optional content below the content row. When set (with `topAccessory` or
   * alone), root is `BoxColumn` with this as `bottomAccessory`.
   */
  bottomAccessory?: ReactNode;
  /**
   * Vertical alignment of the row (avatar, text columns, and value column).
   *
   * Prefer `center` when the row is one or two lines tall—the usual list-item case.
   * Prefer `top` when the row is taller (for example three or more lines of text,
   * or overall row height of 88dp or more) so the avatar and trailing content
   * align with the first line.
   *
   * @default ContentVerticalAlignment.Center
   */
  verticalAlignment?: ContentVerticalAlignment;
  /** Optional leading visual (e.g. avatar), rendered in a 40px-wide centered slot. */
  avatar?: ReactNode;
  /** Optional title (string or node). Default text: BodyMd, Medium, TextDefault. */
  title?: ReactNode;
  /** Optional node rendered before the title. */
  titleStartAccessory?: ReactNode;
  /** Optional node rendered after the title. */
  titleEndAccessory?: ReactNode;
  /** Optional description (string or node). Default text: BodySm, Medium, TextAlternative. */
  description?: ReactNode;
  /** Optional node rendered before the description. */
  descriptionStartAccessory?: ReactNode;
  /** Optional node rendered after the description. */
  descriptionEndAccessory?: ReactNode;
  /** Optional value (string or node). Default text: BodyMd, Medium, TextDefault. */
  value?: ReactNode;
  /** Optional node rendered before the value. */
  valueStartAccessory?: ReactNode;
  /** Optional node rendered after the value. */
  valueEndAccessory?: ReactNode;
  /** Optional subvalue (string or node). Default text: BodySm, Medium, TextAlternative. */
  subvalue?: ReactNode;
  /** Optional node rendered before the subvalue. */
  subvalueStartAccessory?: ReactNode;
  /** Optional node rendered after the subvalue. */
  subvalueEndAccessory?: ReactNode;
};
