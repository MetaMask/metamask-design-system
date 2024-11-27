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
  TextDefault = 'text-default',
  /** For softer contrast neutral text */
  TextAlternative = 'text-alternative',
  /** For the softest contrast neutral text (not accessible) */
  TextMuted = 'text-muted',
  /** For elements used on top of overlay/alternative. Used for text, icon or border */
  OverlayInverse = 'overlay-inverse',
  /** For interactive, active, and selected semantics. Used for text, background, icon or border */
  PrimaryDefault = 'primary-default',
  /** For elements used on top of primary/default. Used for text, icon or border */
  PrimaryInverse = 'primary-inverse',
  /** For the critical alert semantic elements. Used for text, background, icon or border */
  ErrorDefault = 'error-default',
  /** For the stronger contrast error semantic elements. */
  ErrorAlternative = 'error-alternative',
  /** For elements used on top of error/default. Used for text, icon or border */
  ErrorInverse = 'error-inverse',
  /** For the positive semantic elements. Used for text, background, icon or border */
  SuccessDefault = 'success-default',
  /** For elements used on top of success/default. Used for text, icon or border */
  SuccessInverse = 'success-inverse',
  /** For the caution alert semantic elements. Used for text, background, icon or border */
  WarningDefault = 'warning-default',
  /** For elements used on top of warning/default. Used for text, icon or border */
  WarningInverse = 'warning-inverse',
  /** For informational read-only elements. Used for text, background, icon or border */
  InfoDefault = 'info-default',
  /** For elements used on top of info/default. Used for text, icon or border */
  InfoInverse = 'info-inverse',
  /** Make the text color transparent */
  Transparent = 'transparent',
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
