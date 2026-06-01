import { createElement } from 'react';

import { createCompoundSlotSystem } from './createCompoundSlotSystem';
import { parseCompoundSlots } from './parseCompoundSlots';

const TestSlotId = {
  Title: 'Title',
  Value: 'Value',
} as const;

describe('parseCompoundSlots', () => {
  const { slots, isSlotElement } = createCompoundSlotSystem({
    slotIds: TestSlotId,
    displayNamePrefix: 'Test',
  });

  describe('when children include slot elements', () => {
    it('invokes handlers for each slot and ignores non-slot nodes', () => {
      type Parsed = { title?: string; value?: string };

      const parsed = parseCompoundSlots(
        [
          createElement(slots.Title, {}, 'Label'),
          createElement('span', null, 'Ignored'),
          createElement(slots.Value, {}, '100'),
        ],
        isSlotElement,
        {
          Title: (target, slotProps) => {
            target.title = (slotProps as { children?: string }).children;
          },
          Value: (target, slotProps) => {
            target.value = (slotProps as { children?: string }).children;
          },
        },
        {} as Parsed,
      );

      expect(parsed).toEqual({ title: 'Label', value: '100' });
    });

    it('skips slots without handlers', () => {
      type Parsed = { title?: string };

      const parsed = parseCompoundSlots(
        createElement(slots.Value, {}, '100'),
        isSlotElement,
        {
          Title: (target, slotProps) => {
            target.title = (slotProps as { children?: string }).children;
          },
        },
        {} as Parsed,
      );

      expect(parsed).toEqual({});
    });
  });
});
