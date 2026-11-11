import { mergeTwClassName } from '@metamask/design-system-shared';
import React from 'react';

import { Checkbox } from '../Checkbox/index.js';
import { ListItem } from '../ListItem/index.js';

import type { ListItemMultiSelectProps } from './ListItemMultiSelect.types.js';

const noopChange = () => undefined;

export const ListItemMultiSelect = ({
  isSelected,
  accessoryGap = 3,
  twClassName,
  ...props
}: ListItemMultiSelectProps) => {
  const resolvedTwClassName = isSelected
    ? mergeTwClassName('bg-background-muted', twClassName)
    : twClassName;

  return (
    <ListItem
      isInteractive
      twClassName={resolvedTwClassName}
      endAccessory={
        <Checkbox
          isSelected={isSelected}
          onChange={noopChange}
          label=""
          pointerEvents="none"
        />
      }
      accessoryGap={accessoryGap}
      {...props}
    />
  );
};

ListItemMultiSelect.displayName = 'ListItemMultiSelect';
