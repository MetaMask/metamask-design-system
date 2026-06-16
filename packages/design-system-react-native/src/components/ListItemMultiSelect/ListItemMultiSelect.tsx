import React from 'react';

import { Checkbox } from '../Checkbox';
import { ListItem } from '../ListItem';

import type { ListItemMultiSelectProps } from './ListItemMultiSelect.types';

const noopChange = () => undefined;

const mergeTwClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

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
