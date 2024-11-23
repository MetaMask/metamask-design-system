export type TypographyVariant =
  | 'display-md'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs';

export type FontFamilyVariant =
  | TypographyVariant
  | 'display-md-bold'
  | 'display-md-italic'
  | 'display-md-bold-italic'
  | 'heading-lg-bold'
  | 'heading-lg-italic'
  | 'heading-lg-bold-italic'
  | 'heading-md-bold'
  | 'heading-md-italic'
  | 'heading-md-bold-italic'
  | 'heading-sm-bold'
  | 'heading-sm-italic'
  | 'heading-sm-bold-italic'
  | 'body-lg-bold'
  | 'body-lg-italic'
  | 'body-lg-bold-italic'
  | 'body-md-bold'
  | 'body-md-italic'
  | 'body-md-bold-italic'
  | 'body-sm-bold'
  | 'body-sm-italic'
  | 'body-sm-bold-italic'
  | 'body-xs-bold'
  | 'body-xs-italic'
  | 'body-xs-bold-italic'
  | 'bold'
  | 'italic'
  | 'bold-italic';

export type TypographyTailwindConfigProps = {
  fontSize: Record<
    TypographyVariant,
    [
      number,
      {
        lineHeight: string;
        letterSpacing: string;
        fontWeight: string;
      },
    ]
  >;
  fontFamily: {
    sans: string[];
  } & Record<FontFamilyVariant, string>;
  letterSpacing: Record<TypographyVariant, string>;
  lineHeight: Record<TypographyVariant, string>;
};

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold';
export type FontStyle = 'normal' | 'italic';
