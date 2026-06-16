import React from 'react';

import { Box } from '../Box';
import { Checkbox } from '../Checkbox';
import { ListItem } from '../ListItem';
import type { ListItemMultiSelectProps } from './ListItemMultiSelect.types';

const mergeTwClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const ListItemMultiSelect = ({
  isSelected,
  accessoryGap = 3,
  twClassName,
  ...rest
}: ListItemMultiSelectProps) => {
  const resolvedTwClassName = isSelected
    ? mergeTwClassName('bg-background-muted', twClassName)
    : twClassName;

  return (
    <ListItem
      isInteractive
      twClassName={resolvedTwClassName}
      endAccessory={
        <Box pointerEvents="none">
          <Checkbox isSelected={isSelected} onChange={() => {}} label="" />
        </Box>
      }
      accessoryGap={accessoryGap}
      {...rest}
    />
  );
};

ListItemMultiSelect.displayName = 'ListItemMultiSelect';
