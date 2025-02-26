import { withThemeProvider } from '@metamask/design-system-twrnc-preset';

import ButtonComponent from './components/Button';
export const Button = withThemeProvider(ButtonComponent);
export { ButtonProps, ButtonSize, ButtonVariant } from './components/Button';

import ButtonIconComponent from './components/ButtonIcon';
export const ButtonIcon = withThemeProvider(ButtonIconComponent);
export { ButtonIconProps, ButtonIconSize } from './components/ButtonIcon';

import IconComponent from './components/Icon';
export const Icon = withThemeProvider(IconComponent);
export { IconColor, IconName, IconProps, IconSize } from './components/Icon';

import TextComponent from './components/Text';
export const Text = withThemeProvider(TextComponent);
export {
  FontWeight,
  FontStyle,
  TextColor,
  TextProps,
  TextVariant,
} from './components/Text';

import TextButtonComponent from './components/TextButton';
export const TextButton = withThemeProvider(TextButtonComponent);
export { TextButtonProps } from './components/TextButton';
