import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_VARIANT } from './Text.constants';
import type { TextProps } from './Text.types';
import { FontWeight, FontStyle } from './Text.types';

export const generateClassNames = ({
  variant = DEFAULT_TEXT_VARIANT,
  color = DEFAULT_TEXT_COLOR,
  fontWeight = FontWeight.Normal,
  fontStyle = FontStyle.Normal,
  twClassNames = '',
}: Partial<TextProps>): string => {
  const isBold = fontWeight === FontWeight.Bold;
  const isItalic = fontStyle === FontStyle.Italic;
  const textClassname = `text-${variant}`;
  const fontFamilyClassname = `font-${variant}${isBold ? '-bold' : ''}${
    isItalic ? '-italic' : ''
  }`;
  const textColorClassname = `text-${color}`;
  const mergedClassnames =
    `${textClassname} ${fontFamilyClassname} ${textColorClassname} ${twClassNames}`.trim();

  return mergedClassnames;
};
