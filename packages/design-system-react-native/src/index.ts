import { withThemeProvider } from '@metamask/design-system-twrnc-preset';

import AvatarAccountComponent from './components/AvatarAccount';
export const AvatarAccount = withThemeProvider(AvatarAccountComponent);
export {
  AvatarAccountProps,
  AvatarAccountVariant,
  AvatarAccountSize,
} from './components/AvatarAccount';

import AvatarBaseComponent from './primitives/AvatarBase';
export const AvatarBase = withThemeProvider(AvatarBaseComponent);
export { AvatarBaseProps, AvatarBaseSize } from './primitives/AvatarBase';

import AvatarFaviconComponent from './components/AvatarFavicon';
export const AvatarFavicon = withThemeProvider(AvatarFaviconComponent);
export {
  AvatarFaviconProps,
  AvatarFaviconSize,
} from './components/AvatarFavicon';

import AvatarGroupComponent from './components/AvatarGroup';
export const AvatarGroup = withThemeProvider(AvatarGroupComponent);
export {
  AvatarGroupProps,
  AvatarGroupSize,
  AvatarGroupVariant,
} from './components/AvatarGroup';

import AvatarIconComponent from './components/AvatarIcon';
export const AvatarIcon = withThemeProvider(AvatarIconComponent);
export {
  AvatarIconProps,
  AvatarIconSeverity,
  AvatarIconSize,
} from './components/AvatarIcon';

import AvatarNetworkComponent from './components/AvatarNetwork';
export const AvatarNetwork = withThemeProvider(AvatarNetworkComponent);
export {
  AvatarNetworkProps,
  AvatarNetworkSize,
} from './components/AvatarNetwork';

import AvatarTokenComponent from './components/AvatarToken';
export const AvatarToken = withThemeProvider(AvatarTokenComponent);
export { AvatarTokenProps, AvatarTokenSize } from './components/AvatarToken';

import BadgeNetworkComponent from './components/BadgeNetwork';
export const BadgeNetwork = withThemeProvider(BadgeNetworkComponent);
export { BadgeNetworkProps } from './components/BadgeNetwork';

import BadgeStatusComponent from './components/BadgeStatus';
export const BadgeStatus = withThemeProvider(BadgeStatusComponent);
export {
  BadgeStatusProps,
  BadgeStatusStatus,
  BadgeStatusSize,
} from './components/BadgeStatus';

import BlockiesComponent from './primitives/Blockies';
export const Blockies = BlockiesComponent;
export { BlockiesProps } from './primitives/Blockies';

import ButtonAnimatedComponent from './primitives/ButtonAnimated';
export const ButtonAnimated = withThemeProvider(ButtonAnimatedComponent);
export { ButtonAnimatedProps } from './primitives/ButtonAnimated';

import ButtonBaseComponent from './primitives/ButtonBase';
export const ButtonBase = withThemeProvider(ButtonBaseComponent);
export { ButtonBaseProps, ButtonBaseSize } from './primitives/ButtonBase';

import ButtonComponent from './components/Button';
export const Button = withThemeProvider(ButtonComponent);
export { ButtonProps, ButtonSize, ButtonVariant } from './components/Button';

import ButtonIconComponent from './components/ButtonIcon';
export const ButtonIcon = withThemeProvider(ButtonIconComponent);
export { ButtonIconProps, ButtonIconSize } from './components/ButtonIcon';

import IconComponent from './components/Icon';
export const Icon = withThemeProvider(IconComponent);
export { IconColor, IconName, IconProps, IconSize } from './components/Icon';

import JazziconComponent from './primitives/Jazzicon';
export const Jazzicon = JazziconComponent;
export { JazziconProps } from './primitives/Jazzicon';

import TextButtonComponent from './components/TextButton';
export const TextButton = withThemeProvider(TextButtonComponent);
export { TextButtonProps } from './components/TextButton';

import TextComponent from './components/Text';
export const Text = withThemeProvider(TextComponent);
export {
  FontWeight,
  FontStyle,
  TextColor,
  TextProps,
  TextVariant,
} from './components/Text';

import TextOrChildrenComponent from './primitives/TextOrChildren';
export const TextOrChildren = withThemeProvider(TextOrChildrenComponent);
export { TextOrChildrenProps } from './primitives/TextOrChildren/';
