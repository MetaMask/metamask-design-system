import type { ReactNode } from 'react';

/**
 * Content layout variant (ADR-0003).
 */
export const ContentVariant = {
  /** Title (+ optional value) only. 48px min row height, vertically centered. */
  OneLine: 'one-line',
  /** Title + description and/or value + subvalue. 72px min row height, vertically centered. */
  TwoLines: 'two-lines',
  /** Three or more lines of text. 88px min row height, top-aligned. */
  MultiLine: 'multi-line',
} as const;

export type ContentVariant =
  (typeof ContentVariant)[keyof typeof ContentVariant];

/**
 * Content shared props (ADR-0004).
 * Platform-independent properties shared across React and React Native.
 */
export type ContentPropsShared = {
  /**
   * Layout variant controlling row min-height, vertical alignment, and which
   * secondary slots render.
   *
   * - `one-line` — 48px min height (incl. ListItem padding), centered;
   *   `description` and `subvalue` are omitted.
   * - `two-lines` — 72px min height, centered; all slots render.
   * - `multi-line` — 88px min height, top-aligned; all slots render.
   *
   * @default ContentVariant.TwoLines
   */
  variant?: ContentVariant;
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
