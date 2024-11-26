/* eslint-disable import/prefer-default-export */

// Internal dependencies.
import type { TextProps } from './Text.types';
import { TextColor, TextVariant } from './Text.types';

// Defaults
export const DEFAULT_TEXT_VARIANT = TextVariant.BodyMd;
export const DEFAULT_TEXT_COLOR = TextColor.TextDefault;

// Sample consts
export const SAMPLE_TEXT_PROPS: TextProps = {
  variant: DEFAULT_TEXT_VARIANT,
  children: 'Sample Text',
  color: DEFAULT_TEXT_COLOR,
};
