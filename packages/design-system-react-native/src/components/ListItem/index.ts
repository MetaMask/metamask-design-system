import type { FC } from 'react';

import { ListItemRoot } from './ListItem';
import {
  ListItemAvatar,
  ListItemBottomAccessory,
  ListItemDescription,
  ListItemEndAccessory,
  ListItemStartAccessory,
  ListItemSubvalue,
  ListItemTitle,
  ListItemTopAccessory,
  ListItemValue,
} from './ListItem.slots';
import type { ListItemProps } from './ListItem.types';

export {
  ListItemAvatar,
  ListItemBottomAccessory,
  ListItemDescription,
  ListItemEndAccessory,
  ListItemStartAccessory,
  ListItemSubvalue,
  ListItemTitle,
  ListItemTopAccessory,
  ListItemValue,
};

type ListItemCompoundComponent = FC<ListItemProps> & {
  Avatar: typeof ListItemAvatar;
  BottomAccessory: typeof ListItemBottomAccessory;
  Description: typeof ListItemDescription;
  EndAccessory: typeof ListItemEndAccessory;
  StartAccessory: typeof ListItemStartAccessory;
  Subvalue: typeof ListItemSubvalue;
  Title: typeof ListItemTitle;
  TopAccessory: typeof ListItemTopAccessory;
  Value: typeof ListItemValue;
};

const createListItemCompound = (
  root: FC<ListItemProps>,
): ListItemCompoundComponent => {
  const ListItem = root as ListItemCompoundComponent;

  ListItem.Avatar = ListItemAvatar;
  ListItem.BottomAccessory = ListItemBottomAccessory;
  ListItem.Description = ListItemDescription;
  ListItem.EndAccessory = ListItemEndAccessory;
  ListItem.StartAccessory = ListItemStartAccessory;
  ListItem.Subvalue = ListItemSubvalue;
  ListItem.Title = ListItemTitle;
  ListItem.TopAccessory = ListItemTopAccessory;
  ListItem.Value = ListItemValue;

  return ListItem;
};

export const ListItem = createListItemCompound(ListItemRoot);

export type { ListItemProps } from './ListItem.types';
export type { ListItemTextSlotProps } from './ListItem.slots';
