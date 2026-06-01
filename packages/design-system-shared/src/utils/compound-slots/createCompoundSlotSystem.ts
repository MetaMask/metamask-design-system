import type { FC, ReactElement, ReactNode } from 'react';
import { Children, isValidElement } from 'react';

export type SlotComponent<TSlotId extends string, TProps> = FC<TProps> & {
  slotId: TSlotId;
};

export type SlotElement<
  TSlotId extends string,
  TProps = unknown,
> = ReactElement<TProps, SlotComponent<TSlotId, TProps>>;

type SlotIdsRecord = Record<string, string>;

type SlotIdsFromRecord<T extends SlotIdsRecord> = T[keyof T];

type SlotsFromRecord<T extends SlotIdsRecord> = {
  [K in keyof T]: SlotComponent<T[K], unknown>;
};

export type CreateCompoundSlotSystemConfig<TSlotIds extends SlotIdsRecord> = {
  slotIds: TSlotIds;
  displayNamePrefix: string;
};

export type CompoundSlotSystem<TSlotIds extends SlotIdsRecord> = {
  slots: SlotsFromRecord<TSlotIds>;
  slotIdSet: Set<string>;
  isSlotElement: (
    child: ReactNode,
  ) => child is SlotElement<SlotIdsFromRecord<TSlotIds>>;
  hasSlotChildren: (children: ReactNode) => boolean;
};

const createSlotComponent = <TSlotId extends string>(
  slotId: TSlotId,
  displayName: string,
): SlotComponent<TSlotId, unknown> => {
  const Slot = ((_props: unknown) => null) as SlotComponent<TSlotId, unknown>;
  Slot.slotId = slotId;
  Slot.displayName = displayName;
  return Slot;
};

export const createCompoundSlotSystem = <TSlotIds extends SlotIdsRecord>({
  slotIds,
  displayNamePrefix,
}: CreateCompoundSlotSystemConfig<TSlotIds>): CompoundSlotSystem<TSlotIds> => {
  const slotIdSet = new Set<string>(Object.values(slotIds));

  const slots = Object.fromEntries(
    Object.entries(slotIds).map(([key, slotId]) => [
      key,
      createSlotComponent(slotId, `${displayNamePrefix}.${String(key)}`),
    ]),
  ) as SlotsFromRecord<TSlotIds>;

  const isSlotComponent = (
    type: unknown,
  ): type is SlotComponent<SlotIdsFromRecord<TSlotIds>, unknown> =>
    typeof type === 'function' &&
    'slotId' in type &&
    slotIdSet.has(
      (type as SlotComponent<SlotIdsFromRecord<TSlotIds>, unknown>).slotId,
    );

  const isSlotElement = (
    child: ReactNode,
  ): child is SlotElement<SlotIdsFromRecord<TSlotIds>> => {
    if (!isValidElement(child)) {
      return false;
    }
    return isSlotComponent(child.type);
  };

  const hasSlotChildren = (children: ReactNode): boolean =>
    Children.toArray(children).some(isSlotElement);

  return {
    slots,
    slotIdSet,
    isSlotElement,
    hasSlotChildren,
  };
};
