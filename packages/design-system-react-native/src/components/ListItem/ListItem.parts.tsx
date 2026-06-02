import {
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { BoxRow } from '../BoxRow';
import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import { TextOrChildren } from '../temp-components/TextOrChildren';

export type ListItemTextSlotProps = BoxRowProps;

export const ListItemTitle: React.FC<ListItemTextSlotProps> = ({
  children,
  textProps,
  ...rest
}) => (
  <BoxRow gap={1} {...rest}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextDefault,
        ...textProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemTitle.displayName = 'ListItem.Title';

export const ListItemDescription: React.FC<ListItemTextSlotProps> = ({
  children,
  textProps,
  ...rest
}) => (
  <BoxRow gap={1} {...rest}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodySm,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...textProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemDescription.displayName = 'ListItem.Description';

export const ListItemValue: React.FC<ListItemTextSlotProps> = ({
  children,
  textProps,
  ...rest
}) => (
  <BoxRow gap={1} {...rest}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodyMd,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextDefault,
        ...textProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemValue.displayName = 'ListItem.Value';

export const ListItemSubvalue: React.FC<ListItemTextSlotProps> = ({
  children,
  textProps,
  ...rest
}) => (
  <BoxRow gap={1} {...rest}>
    <TextOrChildren
      textProps={{
        variant: TextVariant.BodySm,
        fontWeight: FontWeight.Medium,
        color: TextColor.TextAlternative,
        ...textProps,
      }}
    >
      {children}
    </TextOrChildren>
  </BoxRow>
);
ListItemSubvalue.displayName = 'ListItem.Subvalue';
