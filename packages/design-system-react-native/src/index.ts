import { withThemeProvider } from '@metamask/design-system-twrnc-preset';

import TextComponent from './components/Text';

export const Text = withThemeProvider(TextComponent);
export {
  TextVariant,
  TextColor,
  FontWeight,
  FontStyle,
} from './components/Text';
