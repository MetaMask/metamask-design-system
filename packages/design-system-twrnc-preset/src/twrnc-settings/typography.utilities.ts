import type { FontStyle, FontWeight } from './typography.types';

/**
 * Helper function to determine the font family based on the font weight and style.
 *
 * @param fontWeight - The weight of the font as a string (e.g., '400', '500', 'bold').
 * Default is '400'.
 * @param fontStyle - The style of the font as a string (e.g., 'normal', 'italic').
 * Default is 'normal'.
 * @returns A string representing the font family name constructed based on the weight
 * and style provided.
 * @example
 * getFontFamilyFromWeightAndStyle('400', 'normal');
 * Returns: 'CentraNo1-Book'
 *
 * getFontFamilyFromWeightAndStyle('700', 'italic');
 * Returns: 'CentraNo1-BoldItalic'
 *
 * getFontFamilyFromWeightAndStyle('500');
 * Returns: 'CentraNo1-Medium'
 */
export const getFontFamilyFromWeightAndStyle = (
  fontWeight: FontWeight = '400',
  fontStyle: FontStyle = 'normal',
): string => {
  const weightMap: { [key in FontWeight]: string } = {
    '100': 'Book',
    '200': 'Book',
    '300': 'Book',
    '400': 'Book',
    '500': 'Medium',
    '600': 'Medium',
    '700': 'Bold',
    '800': 'Bold',
    '900': 'Bold',
    normal: 'Book',
    bold: 'Bold',
  };

  const styleSuffix = fontStyle === 'italic' ? 'Italic' : '';

  const fontSuffix = weightMap[fontWeight];

  return `CentraNo1-${fontSuffix}${styleSuffix}`;
};
