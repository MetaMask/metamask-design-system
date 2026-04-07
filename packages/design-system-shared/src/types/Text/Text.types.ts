import type { ReactNode } from 'react';

/**
 * Text - variant (ADR-0003)
 * Identical values across React and React Native platforms.
 */
export const TextVariant = {
  // Display Sizes
  DisplayLg: 'display-lg',
  DisplayMd: 'display-md',

  // Heading Sizes
  HeadingLg: 'heading-lg',
  HeadingMd: 'heading-md',
  HeadingSm: 'heading-sm',

  // Body Sizes
  BodyLg: 'body-lg',
  BodyMd: 'body-md',
  BodySm: 'body-sm',
  BodyXs: 'body-xs',

  // Special Typography Variants
  PageHeading: 'page-heading',
  SectionHeading: 'section-heading',
  ButtonLabelMd: 'button-label-md',
  ButtonLabelLg: 'button-label-lg',
  AmountDisplayLg: 'amount-display-lg',
} as const;

export type TextVariant = (typeof TextVariant)[keyof typeof TextVariant];

/**
 * Text - color (ADR-0003)
 * Common values shared across React and React Native platforms.
 * React extends this with hover/pressed states and Inherit.
 * React Native extends this with PrimaryAlternative.
 */
export const TextColor = {
  /** For default neutral text. */
  TextDefault: 'text-default',
  /** For softer contrast neutral text */
  TextAlternative: 'text-alternative',
  /** For the softest contrast neutral text (not accessible) */
  TextMuted: 'text-muted',
  /** For elements used on top of overlay/alternative. Used for text, icon or border */
  OverlayInverse: 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. Used for text, background, icon or border */
  PrimaryDefault: 'text-primary-default',
  /** For elements used on top of primary/default. Used for text, icon or border */
  PrimaryInverse: 'text-primary-inverse',
  /** For primary text in a pressed state. */
  PrimaryDefaultPressed: 'text-primary-default-pressed',
  /** For the critical alert semantic elements. Used for text, background, icon or border */
  ErrorDefault: 'text-error-default',
  /** For the stronger contrast error semantic elements. */
  ErrorAlternative: 'text-error-alternative',
  /** For elements used on top of error/default. Used for text, icon or border */
  ErrorInverse: 'text-error-inverse',
  /** For critical alert text in a pressed state. */
  ErrorDefaultPressed: 'text-error-default-pressed',
  /** For the positive semantic elements. Used for text, background, icon or border */
  SuccessDefault: 'text-success-default',
  /** For elements used on top of success/default. Used for text, icon or border */
  SuccessInverse: 'text-success-inverse',
  /** For positive text in a pressed state. */
  SuccessDefaultPressed: 'text-success-default-pressed',
  /** For the caution alert semantic elements. Used for text, background, icon or border */
  WarningDefault: 'text-warning-default',
  /** For elements used on top of warning/default. Used for text, icon or border */
  WarningInverse: 'text-warning-inverse',
  /** For caution text in a pressed state. */
  WarningDefaultPressed: 'text-warning-default-pressed',
  /** For informational read-only elements. Used for text, background, icon or border */
  InfoDefault: 'text-info-default',
  /** For elements used on top of info/default. Used for text, icon or border */
  InfoInverse: 'text-info-inverse',
  /** Make the text color transparent */
  Transparent: 'text-transparent',
} as const;

export type TextColor = (typeof TextColor)[keyof typeof TextColor];

/**
 * Text component shared props (ADR-0004).
 * Platform-independent props shared across React and React Native.
 * Color uses string to allow platform-specific extensions.
 */
export type TextPropsShared = {
  /**
   * Optional prop to change the font size of the component.
   * Different variants map to specific HTML elements by default.
   *
   * @default TextVariant.BodyMd
   */
  variant?: TextVariant;
  /**
   * The text content or elements to be rendered within the component.
   */
  children: ReactNode;
  /**
   * Optional prop that sets the color of the text using predefined theme colors.
   *
   * @default TextColor.TextDefault
   */
  color?: string;
};
