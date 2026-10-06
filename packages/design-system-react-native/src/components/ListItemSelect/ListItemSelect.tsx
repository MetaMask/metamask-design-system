import { mergeTwClassName } from '@metamask/design-system-shared';
import React from 'react';

import { Icon, IconColor, IconName, IconSize } from '../Icon/index.js';
import { ListItem } from '../ListItem/index.js';

import type { ListItemSelectProps } from './ListItemSelect.types.js';

export const ListItemSelect = ({
  isSelected,
  showSelectedIcon = false,
  endAccessory,
  accessoryGap = 3,
  twClassName,
  ...props
}: ListItemSelectProps) => {
  const showCheck = isSelected && showSelectedIcon;
  const resolvedEndAccessory = showCheck ? (
    <Icon
      name={IconName.Check}
      size={IconSize.Lg}
      color={IconColor.IconDefault}
    />
  ) : (
    endAccessory
  );

  const resolvedTwClassName = isSelected
    ? mergeTwClassName('bg-background-muted', twClassName)
    : twClassName;

  return (
    <ListItem
      isInteractive
      twClassName={resolvedTwClassName}
      endAccessory={resolvedEndAccessory}
      accessoryGap={accessoryGap}
      {...props}
    />
  );
};

ListItemSelect.displayName = 'ListItemSelect';
