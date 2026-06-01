import { Children } from 'react';
import type { ReactNode } from 'react';

import type { SlotElement } from './createCompoundSlotSystem';

export type SlotElementPredicate<TSlotId extends string> = (
  child: ReactNode,
) => child is SlotElement<TSlotId>;

export type CompoundSlotHandlers<TSlotId extends string, TParsed> = Partial<
  Record<TSlotId, (parsed: TParsed, slotProps: unknown) => void>
>;

export const parseCompoundSlots = <TSlotId extends string, TParsed>(
  children: ReactNode,
  isSlotElement: SlotElementPredicate<TSlotId>,
  handlers: CompoundSlotHandlers<TSlotId, TParsed>,
  initialParsed: TParsed,
): TParsed => {
  const parsed = initialParsed;

  Children.forEach(children, (child) => {
    if (!isSlotElement(child)) {
      return;
    }

    const slotComponent = child.type;
    const handler = handlers[slotComponent.slotId];

    if (handler) {
      handler(parsed, child.props);
    }
  });

  return parsed;
};
