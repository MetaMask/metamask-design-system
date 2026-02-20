import { TextFieldSize } from './TextField.types';

/**
 * Tailwind class map for TextField sizes.
 */
export const TWCLASSMAP_TEXTFIELD_SIZE: Record<TextFieldSize, string> = {
  [TextFieldSize.Sm]: 'h-8',
  [TextFieldSize.Md]: 'h-10',
  [TextFieldSize.Lg]: 'h-12',
};
