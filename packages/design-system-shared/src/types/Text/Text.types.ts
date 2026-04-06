/**
 * Text - variant
 * Convert from enum to const object (ADR-0003)
 */
export const TextVariant = {
  // Display Sizes
  /** Large display text */
  DisplayLg: 'display-lg',
  /** Medium display text */
  DisplayMd: 'display-md',

  // Heading Sizes
  /** Large heading */
  HeadingLg: 'heading-lg',
  /** Medium heading */
  HeadingMd: 'heading-md',
  /** Small heading */
  HeadingSm: 'heading-sm',

  // Font Sizes
  /** Large body text */
  BodyLg: 'body-lg',
  /** Medium body text (default) */
  BodyMd: 'body-md',
  /** Small body text */
  BodySm: 'body-sm',
  /** Extra small body text */
  BodyXs: 'body-xs',

  // Special Typography Variants
  /** Page heading variant */
  PageHeading: 'page-heading',
  /** Section heading variant */
  SectionHeading: 'section-heading',
  /** Medium button label */
  ButtonLabelMd: 'button-label-md',
  /** Large button label */
  ButtonLabelLg: 'button-label-lg',
  /** Large amount display */
  AmountDisplayLg: 'amount-display-lg',
} as const;
export type TextVariant = (typeof TextVariant)[keyof typeof TextVariant];
