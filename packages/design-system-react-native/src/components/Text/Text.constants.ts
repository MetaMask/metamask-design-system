/* eslint-disable import/prefer-default-export */

import type { TextProps } from './Text.types';
import { FontWeight, TextColor, TextVariant } from './Text.types';

// Defaults
export const DEFAULT_TEXT_VARIANT = TextVariant.BodyMd;
export const DEFAULT_TEXT_COLOR = TextColor.TextDefault;

// Mappings
export const MAPPING_FONTWEIGHT_TO_FONTFAMILYSTYLECLASSNAME: {
  [key in FontWeight]: string;
} = {
  [FontWeight.Regular]: '-regular',
  [FontWeight.Medium]: '-medium',
  [FontWeight.Bold]: '-bold',
};
