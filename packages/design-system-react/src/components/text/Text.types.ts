export type TextProps = {
  /**
   * Changes the font size of the component. The Text component uses responsive font sizes.
   * Different variants map to specific HTML elements by default.
   * @default TextVariant.BodyMd
   */
  variant?: TextVariant;
  /**
   * The text content or elements to be rendered within the component.
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes to be applied to the Text component.
   */
  className?: string;
  /**
   * Controls the font weight of the text.
   * - Normal: 400
   * - Medium: 500
   * - Bold: 700
   */
  fontWeight?: FontWeight;
  /**
   * Controls the font style of the text.
   * Options: Normal, Italic
   */
  fontStyle?: FontStyle;
  /**
   * Applies text transformation to the content.
   * Options: Uppercase, Lowercase, Capitalize, Normal
   */
  textTransform?: TextTransform;
  /**
   * Controls the text alignment within its container.
   * Options: Left, Center, Right, Justify
   */
  textAlign?: TextAlign;
  /**
   * Determines how text should wrap when it reaches the edge of its container.
   * Options: BreakWord, Anywhere, Normal
   */
  overflowWrap?: OverflowWrap;
  /**
   * When true, adds an ellipsis (...) when text overflows its container.
   * @default false
   */
  ellipsis?: boolean;
  /**
   * Changes the root HTML element of the Text component.
   * Uses semantic HTML tags like h1, p, span, etc.
   */
  as?: ValidTag;
  /**
   * Sets the color of the text using predefined theme colors.
   * @default TextColor.TextDefault
   */
  color?: TextColor;
};
export enum TextVariant {
  // Display Sizes
  DisplayLg = 'display-lg',
  DisplayMd = 'display-md',

  // Heading Sizes
  HeadingLg = 'heading-lg',
  HeadingMd = 'heading-md',
  HeadingSm = 'heading-sm',

  // Font Sizes
  BodyLg = 'body-lg',
  BodyMd = 'body-md',
  BodySm = 'body-sm',
  BodyXs = 'body-xs',
}

export enum TextColor {
  TextDefault = 'text-default',
  TextAlternative = 'text-alternative',
  TextMuted = 'text-muted',
  OverlayInverse = 'text-overlay-inverse',
  PrimaryDefault = 'text-primary-default',
  PrimaryInverse = 'text-primary-inverse',
  ErrorDefault = 'text-error-default',
  ErrorAlternative = 'text-error-alternative',
  ErrorInverse = 'text-error-inverse',
  SuccessDefault = 'text-success-default',
  SuccessInverse = 'text-success-inverse',
  WarningDefault = 'text-warning-default',
  WarningInverse = 'text-warning-inverse',
  InfoDefault = 'text-info-default',
  InfoInverse = 'text-info-inverse',
  Inherit = 'text-inherit',
  Transparent = 'text-transparent',
}

export enum TextAlign {
  Left = 'text-left',
  Center = 'text-center',
  Right = 'text-right',
  Justify = 'text-justify',
}

export type ValidTag =
  | 'dd'
  | 'div'
  | 'dt'
  | 'em'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'
  | 'p'
  | 'span'
  | 'strong'
  | 'ul'
  | 'label'
  | 'input'
  | 'header'
  | 'a'
  | 'button';

export enum FontWeight {
  Bold = 'font-bold',
  Medium = 'font-medium',
  Normal = 'font-normal',
}

export enum OverflowWrap {
  BreakWord = 'break-words',
  Anywhere = 'break-all',
  Normal = 'break-normal',
}

export enum FontStyle {
  Italic = 'italic',
  Normal = 'not-italic',
}

export enum TextTransform {
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
  Capitalize = 'capitalize',
  Normal = 'normal-case',
}
