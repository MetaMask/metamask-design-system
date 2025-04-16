import { withThemeProvider } from '@metamask/design-system-twrnc-preset';

import AvatarAccountComponent from './components/AvatarAccount';
export const AvatarAccount = withThemeProvider(AvatarAccountComponent);
export {
  AvatarAccountProps,
  AvatarAccountVariant,
  AvatarAccountSize,
} from './components/AvatarAccount';

import AvatarBaseComponent from './components/AvatarBase';
export const AvatarBase = withThemeProvider(AvatarBaseComponent);
export { AvatarBaseProps, AvatarBaseSize } from './components/AvatarBase';

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

import BadgeCountComponent from './components/BadgeCount';
export const BadgeCount = withThemeProvider(BadgeCountComponent);
export { BadgeCountProps, BadgeCountSize } from './components/BadgeCount';

import BadgeIconComponent from './components/BadgeIcon';
export const BadgeIcon = withThemeProvider(BadgeIconComponent);
export { BadgeIconProps } from './components/BadgeIcon';

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

import BlockiesComponent from './components/temp-components/Blockies';
export const Blockies = BlockiesComponent;
export { BlockiesProps } from './components/temp-components/Blockies';

import ButtonAnimatedComponent from './components/temp-components/ButtonAnimated';
export const ButtonAnimated = withThemeProvider(ButtonAnimatedComponent);
export { ButtonAnimatedProps } from './components/temp-components/ButtonAnimated';

import ButtonBaseComponent from './components/ButtonBase';
export const ButtonBase = withThemeProvider(ButtonBaseComponent);
export { ButtonBaseProps, ButtonBaseSize } from './components/ButtonBase';

import ButtonComponent from './components/Button';
export const Button = withThemeProvider(ButtonComponent);
export { ButtonProps, ButtonSize, ButtonVariant } from './components/Button';

import ButtonIconComponent from './components/ButtonIcon';
export const ButtonIcon = withThemeProvider(ButtonIconComponent);
export { ButtonIconProps, ButtonIconSize } from './components/ButtonIcon';

import IconComponent from './components/Icon';
export const Icon = withThemeProvider(IconComponent);
export { IconColor, IconName, IconProps, IconSize } from './components/Icon';

import JazziconComponent from './components/temp-components/Jazzicon';
export const Jazzicon = JazziconComponent;
export { JazziconProps } from './components/temp-components/Jazzicon';

import TextButtonComponent from './components/TextButton';
export const TextButton = withThemeProvider(TextButtonComponent);
export { TextButtonProps } from './components/TextButton';

import TextComponent from './components/Text';
export const Text = withThemeProvider(TextComponent);
export {
  FontWeight,
  FontFamily,
  FontStyle,
  TextColor,
  TextProps,
  TextVariant,
} from './components/Text';

import TextOrChildrenComponent from './components/temp-components/TextOrChildren';
export const TextOrChildren = withThemeProvider(TextOrChildrenComponent);
export { TextOrChildrenProps } from './components/temp-components/TextOrChildren';
