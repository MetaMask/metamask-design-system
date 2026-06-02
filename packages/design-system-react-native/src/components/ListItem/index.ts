import type { FC } from 'react';

import { ListItemRoot } from './ListItem';
import { ListItemDescription, ListItemSubvalue, ListItemTitle, ListItemValue } from './ListItem.parts';
import type { ListItemProps } from './ListItem.types';

export {
  ListItemDescription,
  ListItemSubvalue,
  ListItemTitle,
  ListItemValue,
};

type ListItemCompoundComponent = FC<ListItemProps> & {
  Description: typeof ListItemDescription;
  Subvalue: typeof ListItemSubvalue;
  Title: typeof ListItemTitle;
  Value: typeof ListItemValue;
};

// RN/Metro: Object.assign is acceptable here because (a) Metro does not use RSC
// and (b) all sub-components are also exported as flat named exports above for
// consumers who need individually tree-shakeable imports.
// Web package: use the Chakra-style namespace facade instead of Object.assign.
export const ListItem = Object.assign(ListItemRoot, {
  Description: ListItemDescription,
  Subvalue: ListItemSubvalue,
  Title: ListItemTitle,
  Value: ListItemValue,
}) as ListItemCompoundComponent;

export type { ListItemProps } from './ListItem.types';
export type { ListItemTextSlotProps } from './ListItem.parts';
