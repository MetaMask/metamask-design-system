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
 * // Returns: 'EuclidCircularB-Regular'
 *
 * getFontFamilyFromWeightAndStyle('700', 'italic');
 * // Returns: 'EuclidCircularB-BoldItalic'
 *
 * getFontFamilyFromWeightAndStyle('500');
 * // Returns: 'EuclidCircularB-Medium'
 */
export const getFontFamilyFromWeightAndStyle = (
  fontWeight: FontWeight = '400',
  fontStyle: FontStyle = 'normal',
): string => {
  const weightMap: { [key in FontWeight]: string } = {
    '100': 'Regular',
    '200': 'Regular',
    '300': 'Regular',
    '400': 'Regular',
    '500': 'Medium',
    '600': 'Medium',
    '700': 'Bold',
    '800': 'Bold',
    '900': 'Bold',
    normal: 'Regular',
    bold: 'Bold',
  };

  const styleSuffix = fontStyle === 'italic' ? 'Italic' : '';

  const fontSuffix = weightMap[fontWeight];

  return `EuclidCircularB-${fontSuffix}${styleSuffix}`;
};
