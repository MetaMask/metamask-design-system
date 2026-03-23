import React from 'react';

import { IconColor, IconSize } from '../../types';
import { Icon } from '../Icon';
import { ListItemBase } from '../ListItemBase';

import type { InfoListItemProps } from './InfoListItem.types';

const DEFAULT_START_ICON_SIZE = IconSize.Lg;

export const InfoListItem: React.FC<InfoListItemProps> = ({
  startIconProps,
  ...listItemBaseProps
}) => {
  const startAccessory =
    startIconProps?.name != null ? (
      <Icon
        name={startIconProps.name}
        size={DEFAULT_START_ICON_SIZE}
        color={IconColor.IconDefault}
        {...startIconProps}
      />
    ) : undefined;

  return (
    <ListItemBase startAccessory={startAccessory} {...listItemBaseProps} />
  );
};

InfoListItem.displayName = 'InfoListItem';
