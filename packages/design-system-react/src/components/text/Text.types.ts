export type TextProps = {
  /**
   * Optional prop for inline styles
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to change the font size of the component. The Text component uses responsive font sizes.
   * Different variants map to specific HTML elements by default.
   * @default TextVariant.BodyMd
   */
  variant?: TextVariant;
  /**
   * The text content or elements to be rendered within the component.
   */
  children: React.ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the Text component.
   */
  className?: string;
  /**
   * Optional prop to control the font weight of the text.
   * - Regular: 400
   * - Medium: 500
   * - Bold: 700
   */
  fontWeight?: FontWeight;
  /**
   * Optional prop to adjust the font family.
   *  - Default: CentraNo1
   *  - Accent: MMSans
   *  - Hero: MMPoly
   */
  fontFamily?: FontFamily;
  /**
   * Optional prop to control the font style of the text.
   * Options: Normal, Italic
   */
  fontStyle?: FontStyle;
  /**
   * Optional prop to apply text transformation to the content.
   * Options: Uppercase, Lowercase, Capitalize, Normal
   */
  textTransform?: TextTransform;
  /**
   * Optional prop to control the text alignment within its container.
   * Options: Left, Center, Right, Justify
   */
  textAlign?: TextAlign;
  /**
   * Optional prop to determine how text should wrap when it reaches the edge of its container.
   * Options: BreakWord, Anywhere, Normal
   */
  overflowWrap?: OverflowWrap;
  /**
   * Optional prop that when true, adds an ellipsis (...) when text overflows its container.
   * @default false
   */
  ellipsis?: boolean;
  /**
   * Optional boolean that determines if the component should merge its props onto its immediate child
   * instead of rendering a default DOM element.
   * @default false
   */
  asChild?: boolean;
  /**
   * Optional prop that sets the color of the text using predefined theme colors.
   * @default TextColor.TextDefault
   */
  color?: TextColor;
  /**
   * Optional prop for testing purposes
   */
  'data-testid'?: string;
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
  /** For default neutral text. */
  TextDefault = 'text-default',
  /** For softer contrast neutral text */
  TextAlternative = 'text-alternative',
  /** For the softest contrast neutral text (not accessible) */
  TextMuted = 'text-muted',
  /** For elements used on top of overlay/alternative. Used for text, icon or border */
  OverlayInverse = 'text-overlay-inverse',
  /** For interactive, active, and selected semantics. Used for text, background, icon or border */
  PrimaryDefault = 'text-primary-default',
  /** For elements used on top of primary/default. Used for text, icon or border */
  PrimaryInverse = 'text-primary-inverse',
  /** For the critical alert semantic elements. Used for text, background, icon or border */
  ErrorDefault = 'text-error-default',
  /** For the stronger contrast error semantic elements. */
  ErrorAlternative = 'text-error-alternative',
  /** For elements used on top of error/default. Used for text, icon or border */
  ErrorInverse = 'text-error-inverse',
  /** For the positive semantic elements. Used for text, background, icon or border */
  SuccessDefault = 'text-success-default',
  /** For elements used on top of success/default. Used for text, icon or border */
  SuccessInverse = 'text-success-inverse',
  /** For the caution alert semantic elements. Used for text, background, icon or border */
  WarningDefault = 'text-warning-default',
  /** For elements used on top of warning/default. Used for text, icon or border */
  WarningInverse = 'text-warning-inverse',
  /** For informational read-only elements. Used for text, background, icon or border */
  InfoDefault = 'text-info-default',
  /** For elements used on top of info/default. Used for text, icon or border */
  InfoInverse = 'text-info-inverse',
  /** Inherit the color of the parent element */
  Inherit = 'text-inherit',
  /** Make the text color transparent */
  Transparent = 'text-transparent',
}

export enum TextAlign {
  Left = 'text-left',
  Center = 'text-center',
  Right = 'text-right',
  Justify = 'text-justify',
}

export enum FontWeight {
  /**
   * Weight - 700
   */
  Bold = 'font-bold',
  /**
   * Weight - 500
   */
  Medium = 'font-medium',
  /**
   * Weight - 400
   */
  Regular = 'font-regular',
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

export enum FontFamily {
  Default = 'font-default',
  Accent = 'font-accent',
  Hero = 'font-hero',
}
