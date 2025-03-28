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
 * {
 *   fontSize: {
 *     'display-md': {
 *       fontFamily: 'CentraNo1-Bold',
 *       fontSize: '32',
 *       fontWeight: '700',
 *       letterSpacing: '0',
 *       lineHeight: '40px',
 *     },
 *   },
 *   fontFamily: {
 *     sans: [
 *       'CentraNo1',
 *       'Helvetica Neue',
 *       'Helvetica',
 *       'Arial',
 *       'sans-serif',
 *     ],
 *     'display-md': 'CentraNo1',
 *   },
 *   letterSpacing: {
 *     'display-md': '0',
 *   },
 *   fontWeight: {
 *     'display-md': '400',
 *   },
 *   lineHeight: {
 *     'display-md': '40px',
 *   },
 * }
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
    centrano1: string;
    'centrano1-regular': string;
    'centrano1-regular-italic': string;
    'centrano1-medium': string;
    'centrano1-medium-italic': string;
    'centrano1-bold': string;
    'centrano1-bold-italic': string;
    mmsans: string;
    'mmsans-regular': string;
    'mmsans-medium': string;
    'mmsans-bold': string;
    mmpoly: string;
    'mmpoly-regular': string;
  };
  letterSpacing: Record<TypographyVariant, string>;
  lineHeight: Record<TypographyVariant, string>; // Make sure to include units - "40px" instead of "40"
};
