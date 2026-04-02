import { MAP_TEXT_VARIANT_INPUT_METRICS } from '../Input/Input.constants';

/**
 * Typographic metrics for Textarea: same tokens as `text-*` utilities but **without** `lineHeight`.
 * React Native `TextInput` with multiline aligns text more predictably when line height is not set
 * from the design-system paragraph specs.
 */
export const MAP_TEXT_VARIANT_TEXTAREA_METRICS = MAP_TEXT_VARIANT_INPUT_METRICS;

/**
 * Default number of lines displayed in the Textarea.
 */
export const TEXTAREA_DEFAULT_NUMBER_OF_LINES = 4;
