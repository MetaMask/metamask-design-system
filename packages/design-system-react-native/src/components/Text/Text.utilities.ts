/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
import {
  DEFAULT_TEXT_COLOR,
  DEFAULT_TEXT_VARIANT,
  MAPPING_FONTWEIGHT_TO_FONTFAMILYSTYLECLASSNAME,
} from './Text.constants';
import type { TextProps } from './Text.types';
import { FontWeight, FontStyle, FontFamily } from './Text.types';

/**
 * Generates a combined string of Tailwind CSS class names for the Text component
 * based on the provided props. This utility simplifies the process of combining
 * typography, color, font weight, and style classes, ensuring consistency with the
 * design system.
 *
 * @param variant - Specifies the typography variant (e.g., body, heading, display).
 * @param color - Specifies the text color based on the design system's color tokens.
 * @param fontWeight - Specifies the font weight (e.g., normal, bold).
 * @param fontFamily - Specifies the font family ('e.g. default, hero, accent)
 * @param fontStyle - Specifies the font style (e.g., normal, italic).
 * @param twClassName - Additional custom Tailwind class names to be appended to the generated classes.
 * @returns A string of combined Tailwind CSS class names.
 *
 * Example:
 * ```
 * const classNames = generateTextClassNames({
 *   variant: TextVariant.BodyMd,
 *   color: TextColor.PrimaryDefault,
 *   fontWeight: FontWeight.Bold,
 *   fontFamily: FontFamily.Default,
 *   fontStyle: FontStyle.Italic,
 *   twClassName: 'text-center underline',
 * });
 *
 * console.log(classNames);
 * // Output: "text-body-md font-default-bold-italic text-primary-default text-center underline"
 * ```
 */
export const generateTextClassNames = ({
  variant = DEFAULT_TEXT_VARIANT,
  color = DEFAULT_TEXT_COLOR,
  fontWeight = FontWeight.Regular,
  fontFamily = FontFamily.Default,
  fontStyle = FontStyle.Normal,
  twClassName = '',
}: Partial<TextProps>): string => {
  const isItalic = fontStyle === FontStyle.Italic;
  const textClassname = `text-${variant}`;
  const fontFamilyClassname = `font-${fontFamily}${MAPPING_FONTWEIGHT_TO_FONTFAMILYSTYLECLASSNAME[fontWeight]}${
    isItalic && fontFamily === FontFamily.Default ? '-italic' : ''
  }`;
  const textColorClassname = `${color}`;
  const mergedClassnames =
    `${textClassname} ${fontFamilyClassname} ${textColorClassname} ${twClassName}`.trim();

  return mergedClassnames;
};
