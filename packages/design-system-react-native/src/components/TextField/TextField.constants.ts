import { TextFieldSize } from './TextField.types';

// Defaults
export const DEFAULT_TEXTFIELD_SIZE = TextFieldSize.Md;

// Size to Tailwind height class mapping
export const TEXTFIELD_SIZE_TO_TW: Record<TextFieldSize, string> = {
  [TextFieldSize.Sm]: 'h-8',
  [TextFieldSize.Md]: 'h-10',
  [TextFieldSize.Lg]: 'h-12',
};
