export type TextProps = {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  textTransform?: TextTransform;
  textAlign?: TextAlign;
  overflowWrap?: OverflowWrap;
  ellipsis?: boolean;
  as?: ValidTag;
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
