/* eslint-disable @typescript-eslint/no-shadow */
// Third party dependencies.
import type { TextProps as RNTextProps } from 'react-native';

import {
  TextVariant,
  TextColor,
  FontWeight,
  FontFamily,
  FontStyle,
} from '../../types';

/**
 * Text component props.
 */
export type TextProps = {
  /**
   * Optional enum to select between Typography variants.
   * @default BodyMD
   */
  variant?: TextVariant;
  /**
   * Text to be displayed.
   */
  children: React.ReactNode;
  /**
   * Optional prop to add color to text.
   */
  color?: TextColor;
  /**
   * Optional prop to control the font weight of the text.
   * - Normal: 400
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
   * Optional prop to adjust the style of the font.
   */
  fontStyle?: FontStyle;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & RNTextProps;
