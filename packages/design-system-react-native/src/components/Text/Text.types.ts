/* eslint-disable @typescript-eslint/no-shadow */
// Third party dependencies.
import type { TextProps as RNTextProps } from 'react-native';

/**
 * Text component variants.
 */
export enum TextVariant {
  // Display Sizes
  DisplayMd = 'display-md',

  // Heading Sizes
  HeadingLg = 'heading-lg',
  HeadingMd = 'heading-md',
  HeadingSm = 'heading-sm',

  // Body Sizes
  BodyLg = 'body-lg',
  BodyMd = 'body-md',
  BodySm = 'body-sm',
  BodyXs = 'body-xs',
}

/**
 * Text colors
 */
export enum TextColor {
  /** For default neutral text. */
  TextDefault = 'text-text-default',
  /** For softer contrast neutral text */
  TextAlternative = 'text-text-alternative',
  /** For the softest contrast neutral text (not accessible) */
  TextMuted = 'text-text-muted',
  /** For elements used on top of overlay/alternative. */
  OverlayInverse = 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. */
  PrimaryDefault = 'text-primary-default',
  /** For softer variants of primary text. */
  PrimaryAlternative = 'text-primary-alternative',
  /** For the weakest contrast primary text (not accessible). */
  PrimaryMuted = 'text-primary-muted',
  /** For elements used on top of primary/default. */
  PrimaryInverse = 'text-primary-inverse',
  /** For primary text in a pressed state. */
  PrimaryDefaultPressed = 'text-primary-defaultPressed',
  /** For muted primary text in a pressed state. */
  PrimaryMutedPressed = 'text-primary-mutedPressed',
  /** For critical alert text. */
  ErrorDefault = 'text-error-default',
  /** For stronger contrast error text. */
  ErrorAlternative = 'text-error-alternative',
  /** For the weakest contrast error text (not accessible). */
  ErrorMuted = 'text-error-muted',
  /** For elements used on top of error/default. */
  ErrorInverse = 'text-error-inverse',
  /** For critical alert text in a pressed state. */
  ErrorDefaultPressed = 'text-error-defaultPressed',
  /** For muted error text in a pressed state. */
  ErrorMutedPressed = 'text-error-mutedPressed',
  /** For caution alert text. */
  WarningDefault = 'text-warning-default',
  /** For the weakest contrast caution text (not accessible). */
  WarningMuted = 'text-warning-muted',
  /** For elements used on top of warning/default. */
  WarningInverse = 'text-warning-inverse',
  /** For caution text in a pressed state. */
  WarningDefaultPressed = 'text-warning-defaultPressed',
  /** For muted caution text in a pressed state. */
  WarningMutedPressed = 'text-warning-mutedPressed',
  /** For positive semantic text. */
  SuccessDefault = 'text-success-default',
  /** For the weakest contrast positive text (not accessible). */
  SuccessMuted = 'text-success-muted',
  /** For elements used on top of success/default. */
  SuccessInverse = 'text-success-inverse',
  /** For positive text in a pressed state. */
  SuccessDefaultPressed = 'text-success-defaultPressed',
  /** For muted positive text in a pressed state. */
  SuccessMutedPressed = 'text-success-mutedPressed',
  /** For informational read-only text. */
  InfoDefault = 'text-info-default',
  /** For the weakest contrast informational text (not accessible). */
  InfoMuted = 'text-info-muted',
  /** For elements used on top of info/default. */
  InfoInverse = 'text-info-inverse',
  /** Make the text color transparent. */
  Transparent = 'text-transparent',
}

export enum FontWeight {
  /**
   * Weight - 700
   */
  Bold = '700',
  /**
   * Weight - 500
   */
  Medium = '500',
  /**
   * Weight - 400
   */
  Normal = '400',
}

export enum FontStyle {
  Italic = 'italic',
  Normal = 'normal',
}
/**
 * Text component props.
 */
export type TextProps = {
  /**
   * Optional enum to select between Typography variants.
   * @default BodyMD
   */
  variant?: TextVariant;
  /**
   * Text to be displayed.
   */
  children: React.ReactNode;
  /**
   * Optional prop to add color to text.
   */
  color?: TextColor;
  /**
   * Optional prop to adjust the weight of the font.
   */
  fontWeight?: FontWeight;
  /**
   * Optional prop to adjust the style of the font.
   */
  fontStyle?: FontStyle;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & RNTextProps;
