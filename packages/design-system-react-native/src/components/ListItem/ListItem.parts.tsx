import {
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { BoxRow } from '../BoxRow';
import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import type { TextProps } from '../Text/Text.types';

export type ListItemTextSlotProps = Pick<
  BoxRowProps,
  'startAccessory' | 'endAccessory' | 'textProps'
> & {
  children?: BoxRowProps['children'];
} & Partial<Omit<TextProps, 'children'>>;

export const ListItemTitle: React.FC<ListItemTextSlotProps> = ({
  children,
  startAccessory,
  endAccessory,
  textProps,
  ...inlineTextProps
}) => (
  <BoxRow startAccessory={startAccessory} endAccessory={endAccessory} gap={1}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextDefault,
        ...textProps,
        ...inlineTextProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemTitle.displayName = 'ListItem.Title';

export const ListItemDescription: React.FC<ListItemTextSlotProps> = ({
  children,
  startAccessory,
  endAccessory,
  textProps,
  ...inlineTextProps
}) => (
  <BoxRow startAccessory={startAccessory} endAccessory={endAccessory} gap={1}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodySm,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...textProps,
        ...inlineTextProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemDescription.displayName = 'ListItem.Description';

export const ListItemValue: React.FC<ListItemTextSlotProps> = ({
  children,
  startAccessory,
  endAccessory,
  textProps,
  ...inlineTextProps
}) => (
  <BoxRow startAccessory={startAccessory} endAccessory={endAccessory} gap={1}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextDefault,
        ...textProps,
        ...inlineTextProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemValue.displayName = 'ListItem.Value';

export const ListItemSubvalue: React.FC<ListItemTextSlotProps> = ({
  children,
  startAccessory,
  endAccessory,
  textProps,
  ...inlineTextProps
}) => (
  <BoxRow startAccessory={startAccessory} endAccessory={endAccessory} gap={1}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodySm,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...textProps,
        ...inlineTextProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemSubvalue.displayName = 'ListItem.Subvalue';
