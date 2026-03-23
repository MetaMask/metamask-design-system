import type { IconProps } from '../Icon';
import type { ListItemBaseProps } from '../ListItemBase';

export type InfoListItemProps = Omit<ListItemBaseProps, 'startAccessory'> & {
  startIconProps?: Partial<IconProps>;
};
