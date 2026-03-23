import type { AvatarTokenProps } from '../AvatarToken';
import type { ListItemBaseProps } from '../ListItemBase';

export type TokenListItemProps = Omit<ListItemBaseProps, 'startAccessory'> & {
  avatarTokenProps: Partial<AvatarTokenProps>;
};
