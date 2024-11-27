/* eslint-disable import/prefer-default-export */

import type { TextProps } from './Text.types';
import { FontWeight, TextColor, TextVariant } from './Text.types';

// Defaults
export const DEFAULT_TEXT_VARIANT = TextVariant.BodyMd;
export const DEFAULT_TEXT_COLOR = TextColor.TextDefault;

// Mappings
export const MAPPING_FONTWEIGHT_TO_FONTFAMILYSTYLE: {
  [key in FontWeight]: string;
} = {
  [FontWeight.Normal]: 'Regular',
  [FontWeight.Medium]: 'Medium',
  [FontWeight.Bold]: 'Bold',
};

// Sample consts
export const SAMPLE_TEXT_PROPS: TextProps = {
  variant: DEFAULT_TEXT_VARIANT,
  children: 'Sample Text',
  color: DEFAULT_TEXT_COLOR,
};
