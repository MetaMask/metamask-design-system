/**
 * ListItem render-in-place sub-components.
 *
 * Each export is a real React component that renders actual native views,
 * making them visible in the iOS/Android native element inspector breadcrumb.
 *
 * Inspector breadcrumb (example):
 *   ListItem > Pressable > ListItemTitle > BoxRow > Text > RCTText ✓
 *
 * Usage (dot notation via index.ts):
 *   <ListItem.Title endAccessory={<Icon />}>Account 1</ListItem.Title>
 *   <ListItem.Description>Secondary</ListItem.Description>
 *
 * Usage (flat named imports):
 *   import { ListItemTitle } from '@metamask/design-system-react-native';
 *
 * Layout note: sub-components render in-place inside ListItem's children slot.
 * The engineer controls layout using Box, flex, and Tailwind classnames.
 * Avatar, start/end accessories, and top/bottom accessories are structural
 * concerns — pass them as flat props on ListItem rather than as sub-components.
 */
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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Props accepted by ListItem text sub-components. */
export type ListItemTextSlotProps = Pick<
  BoxRowProps,
  'startAccessory' | 'endAccessory' | 'textProps'
> & {
  children?: BoxRowProps['children'];
} & Partial<Omit<TextProps, 'children'>>;

// ---------------------------------------------------------------------------
// Text sub-components (render BoxRow + TextOrChildren, visible in inspector)
// ---------------------------------------------------------------------------

/**
 * Renders the title row of a ListItem. Accepts accessories and Text styling
 * props in addition to children.
 *
 * Inspector: ListItemTitle > BoxRow > Text > RCTText
 */
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

/**
 * Renders the description row of a ListItem (smaller, muted text).
 *
 * Inspector: ListItemDescription > BoxRow > Text > RCTText
 */
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

/**
 * Renders the value row of a ListItem.
 *
 * Inspector: ListItemValue > BoxRow > Text > RCTText
 */
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

/**
 * Renders the subvalue row of a ListItem (smaller, muted text).
 *
 * Inspector: ListItemSubvalue > BoxRow > Text > RCTText
 */
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
