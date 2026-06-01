/**
 * ListItem compound-slot definitions, parsing, and public slot exports.
 *
 * Flow (orchestrated in ListItem.tsx via `useCompoundSlots`):
 *
 * 1. Authoring — `<ListItem.Title>`, `<ListItem.Avatar>`, … are marker components
 *    (`listItemSlots`) that render null but carry a `slotId`.
 * 2. Parse — `parseListItemSlots(children)` walks slot elements and builds
 *    `ParsedListItemSlotProps` (Content-shaped props: `title`, `avatar`, …).
 * 3. Merge — `mergeListItemPropsWithSlots(props, parsed)` combines explicit ListItem
 *    props with parsed slot values; explicit props win when both are set.
 * 4. Render — ListItem passes merged Content props to `<Content />` as props only.
 *    Non-slot `children` are returned separately for rendering below Content.
 *
 * Slot markers are attached to the root in `index.ts` as `ListItem.Title`, etc.
 */
import {
  createCompoundSlotSystem,
  mergePropsWithSlots,
  parseCompoundSlots,
} from '@metamask/design-system-shared';
import type { CompoundSlotHandlers } from '@metamask/design-system-shared';
import type { ReactNode } from 'react';

import type { BoxRowProps } from '../BoxRow/BoxRow.types';
import type { ContentProps } from '../Content/Content.types';
import type { TextProps } from '../Text/Text.types';

// ---------------------------------------------------------------------------
// 1. Slot identifiers
// ---------------------------------------------------------------------------

export const ListItemSlotId = {
  Avatar: 'Avatar',
  Title: 'Title',
  Description: 'Description',
  Value: 'Value',
  Subvalue: 'Subvalue',
  StartAccessory: 'StartAccessory',
  EndAccessory: 'EndAccessory',
  TopAccessory: 'TopAccessory',
  BottomAccessory: 'BottomAccessory',
} as const;

export type ListItemSlotId =
  (typeof ListItemSlotId)[keyof typeof ListItemSlotId];

// ---------------------------------------------------------------------------
// 2. Slot marker components (`ListItem.Title`, …)
// ---------------------------------------------------------------------------

const {
  slots: listItemSlots,
  isSlotElement: isListItemSlotElement,
  hasSlotChildren: hasListItemSlotChildren,
} = createCompoundSlotSystem({
  slotIds: ListItemSlotId,
  displayNamePrefix: 'ListItem',
});

export { isListItemSlotElement, hasListItemSlotChildren, listItemSlots };

export const ListItemAvatar = listItemSlots.Avatar;
export const ListItemTitle = listItemSlots.Title;
export const ListItemDescription = listItemSlots.Description;
export const ListItemValue = listItemSlots.Value;
export const ListItemSubvalue = listItemSlots.Subvalue;
export const ListItemStartAccessory = listItemSlots.StartAccessory;
export const ListItemEndAccessory = listItemSlots.EndAccessory;
export const ListItemTopAccessory = listItemSlots.TopAccessory;
export const ListItemBottomAccessory = listItemSlots.BottomAccessory;

// ---------------------------------------------------------------------------
// 3. Slot input props (what each marker accepts)
// ---------------------------------------------------------------------------

/** Text row slots mirror BoxRow: content + accessories + text styling. */
export type ListItemTextSlotProps = Pick<
  BoxRowProps,
  'startAccessory' | 'endAccessory' | 'textProps'
> & {
  children?: BoxRowProps['children'];
} & Partial<Omit<TextProps, 'children'>>;

/** Maps each slot id to the props accepted on its marker component. */
export type ListItemSlotPropsMap = {
  [ListItemSlotId.Avatar]: { children?: ReactNode };
  [ListItemSlotId.Title]: ListItemTextSlotProps;
  [ListItemSlotId.Description]: ListItemTextSlotProps;
  [ListItemSlotId.Value]: ListItemTextSlotProps;
  [ListItemSlotId.Subvalue]: ListItemTextSlotProps;
  [ListItemSlotId.StartAccessory]: { children?: ReactNode };
  [ListItemSlotId.EndAccessory]: { children?: ReactNode };
  [ListItemSlotId.TopAccessory]: { children?: ReactNode };
  [ListItemSlotId.BottomAccessory]: { children?: ReactNode };
};

/**
 * Collapses `textProps` and inline Text props from a text slot into `*Props` fields.
 *
 * @param props - Props from a ListItem text slot marker.
 * @returns Merged Text props for Content `*Props` fields.
 */
export const pickTextPropsFromListItemTextSlot = (
  props: ListItemTextSlotProps,
): Partial<Omit<TextProps, 'children'>> => {
  const {
    children: _children,
    startAccessory: _startAccessory,
    endAccessory: _endAccessory,
    textProps,
    ...inlineTextProps
  } = props;

  return { ...textProps, ...inlineTextProps };
};

// ---------------------------------------------------------------------------
// 4. Parsed output (Content props produced by parsing)
// ---------------------------------------------------------------------------

export type ParsedListItemSlotProps = Pick<
  ContentProps,
  | 'avatar'
  | 'title'
  | 'titleProps'
  | 'titleStartAccessory'
  | 'titleEndAccessory'
  | 'description'
  | 'descriptionProps'
  | 'descriptionStartAccessory'
  | 'descriptionEndAccessory'
  | 'value'
  | 'valueProps'
  | 'valueStartAccessory'
  | 'valueEndAccessory'
  | 'subvalue'
  | 'subvalueProps'
  | 'subvalueStartAccessory'
  | 'subvalueEndAccessory'
  | 'startAccessory'
  | 'endAccessory'
  | 'topAccessory'
  | 'bottomAccessory'
>;

// ---------------------------------------------------------------------------
// 5. Handlers — slot element props → ParsedListItemSlotProps
// ---------------------------------------------------------------------------

type ListItemTextSlotId =
  | typeof ListItemSlotId.Title
  | typeof ListItemSlotId.Description
  | typeof ListItemSlotId.Value
  | typeof ListItemSlotId.Subvalue;

const applyTextSlot = (
  target: ParsedListItemSlotProps,
  slotId: ListItemTextSlotId,
  props: ListItemTextSlotProps,
) => {
  const textProps = pickTextPropsFromListItemTextSlot(props);

  switch (slotId) {
    case ListItemSlotId.Title:
      target.title = props.children;
      target.titleStartAccessory = props.startAccessory;
      target.titleEndAccessory = props.endAccessory;
      target.titleProps = textProps;
      break;
    case ListItemSlotId.Description:
      target.description = props.children;
      target.descriptionStartAccessory = props.startAccessory;
      target.descriptionEndAccessory = props.endAccessory;
      target.descriptionProps = textProps;
      break;
    case ListItemSlotId.Value:
      target.value = props.children;
      target.valueStartAccessory = props.startAccessory;
      target.valueEndAccessory = props.endAccessory;
      target.valueProps = textProps;
      break;
    case ListItemSlotId.Subvalue:
      target.subvalue = props.children;
      target.subvalueStartAccessory = props.startAccessory;
      target.subvalueEndAccessory = props.endAccessory;
      target.subvalueProps = textProps;
      break;
    default:
      break;
  }
};

const listItemSlotHandlers = {
  [ListItemSlotId.Avatar]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.Avatar],
  ) => {
    parsed.avatar = slotProps.children;
  },
  [ListItemSlotId.StartAccessory]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.StartAccessory],
  ) => {
    parsed.startAccessory = slotProps.children;
  },
  [ListItemSlotId.EndAccessory]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.EndAccessory],
  ) => {
    parsed.endAccessory = slotProps.children;
  },
  [ListItemSlotId.TopAccessory]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.TopAccessory],
  ) => {
    parsed.topAccessory = slotProps.children;
  },
  [ListItemSlotId.BottomAccessory]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.BottomAccessory],
  ) => {
    parsed.bottomAccessory = slotProps.children;
  },
  [ListItemSlotId.Title]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.Title],
  ) => {
    applyTextSlot(parsed, ListItemSlotId.Title, slotProps);
  },
  [ListItemSlotId.Description]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.Description],
  ) => {
    applyTextSlot(parsed, ListItemSlotId.Description, slotProps);
  },
  [ListItemSlotId.Value]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.Value],
  ) => {
    applyTextSlot(parsed, ListItemSlotId.Value, slotProps);
  },
  [ListItemSlotId.Subvalue]: (
    parsed: ParsedListItemSlotProps,
    slotProps: ListItemSlotPropsMap[typeof ListItemSlotId.Subvalue],
  ) => {
    applyTextSlot(parsed, ListItemSlotId.Subvalue, slotProps);
  },
};

// ---------------------------------------------------------------------------
// 6. Public parse / merge API (consumed by `useCompoundSlots` in ListItem.tsx)
// ---------------------------------------------------------------------------

export const parseListItemSlots = (
  children: ReactNode,
): ParsedListItemSlotProps =>
  parseCompoundSlots(
    children,
    isListItemSlotElement,
    listItemSlotHandlers as CompoundSlotHandlers<
      ListItemSlotId,
      ParsedListItemSlotProps
    >,
    {} as ParsedListItemSlotProps,
  );

export const mergeListItemPropsWithSlots = <
  TProps extends ContentProps & { children?: ReactNode },
>(
  props: TProps,
  slotProps: ParsedListItemSlotProps,
): Omit<TProps, 'children'> =>
  mergePropsWithSlots(
    props as Record<string, unknown>,
    slotProps as Partial<Record<string, unknown>>,
  ) as Omit<TProps, 'children'>;
