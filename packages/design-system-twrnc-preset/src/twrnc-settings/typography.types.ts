/**
 * Different Typography variants to be used as twrnc classNames
 */
export type TypographyVariant =
  | 'display-md'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs';

/**
 * Different FontFamily variants to be used as twrnc classNames
 */
export type FontFamilyVariant =
  | TypographyVariant
  | 'display-md-medium'
  | 'display-md-bold'
  | 'display-md-italic'
  | 'display-md-medium-italic'
  | 'display-md-bold-italic'
  | 'heading-lg-medium'
  | 'heading-lg-bold'
  | 'heading-lg-italic'
  | 'heading-lg-medium-italic'
  | 'heading-lg-bold-italic'
  | 'heading-md-medium'
  | 'heading-md-bold'
  | 'heading-md-italic'
  | 'heading-md-medium-italic'
  | 'heading-md-bold-italic'
  | 'heading-sm-medium'
  | 'heading-sm-bold'
  | 'heading-sm-italic'
  | 'heading-sm-medium-italic'
  | 'heading-sm-bold-italic'
  | 'body-lg-medium'
  | 'body-lg-bold'
  | 'body-lg-italic'
  | 'body-lg-medium-italic'
  | 'body-lg-bold-italic'
  | 'body-md-medium'
  | 'body-md-bold'
  | 'body-md-italic'
  | 'body-md-medium-italic'
  | 'body-md-bold-italic'
  | 'body-sm-medium'
  | 'body-sm-bold'
  | 'body-sm-italic'
  | 'body-sm-medium-italic'
  | 'body-sm-bold-italic'
  | 'body-xs-medium'
  | 'body-xs-bold'
  | 'body-xs-italic'
  | 'body-xs-medium-italic'
  | 'body-xs-bold-italic'
  | 'medium'
  | 'bold'
  | 'italic'
  | 'medium-italic'
  | 'bold-italic';

/**
 * Different FontWeight and FontStyle to be used to calculate the FontFamily
 * in getFontFamilyFromWeightAndStyle
 */
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

/**
 * Props for TypographyTailwindConfig
 * @example
 * // {
 * //   fontSize: {
 * //     'display-md': {
 * //       fontFamily: 'EuclidCircularB-Bold',
 * //       fontSize: '32',
 * //       fontWeight: '700',
 * //       letterSpacing: '0',
 * //       lineHeight: '40px',
 * //     },
 * //   },
 * //   fontFamily: {
 * //     sans: [
 * //       'EuclidCircularB',
 * //       'Helvetica Neue',
 * //       'Helvetica',
 * //       'Arial',
 * //       'sans-serif',
 * //     ],
 * //     'display-md': 'EuclidCircularB',
 * //   },
 * //   letterSpacing: {
 * //     'display-md': '0',
 * //   },
 * //   fontWeight: {
 * //     'display-md': '400',
 * //   },
 * //   lineHeight: {
 * //     'display-md': '40px',
 * //   },
 * // }
 */
export type TypographyTailwindConfigProps = {
  fontSize: Record<
    TypographyVariant,
    [
      number,
      {
        lineHeight: string; // Make sure to include units - "40px" instead of "40"
        letterSpacing: string;
        fontWeight: string;
      },
    ]
  >;
  fontFamily: {
    sans: string[];
  } & Record<FontFamilyVariant, string>;
  letterSpacing: Record<TypographyVariant, string>;
  lineHeight: Record<TypographyVariant, string>; // Make sure to include units - "40px" instead of "40"
};
