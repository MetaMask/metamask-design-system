import { createElement } from 'react';

import { createCompoundSlotSystem } from './createCompoundSlotSystem';
import { partitionChildren } from './partitionChildren';

const TestSlotId = {
  Title: 'Title',
} as const;

describe('partitionChildren', () => {
  const { slots, isSlotElement } = createCompoundSlotSystem({
    slotIds: TestSlotId,
    displayNamePrefix: 'Test',
  });

  describe('when children are a mix of slot and non-slot nodes', () => {
    it('splits matched and rest arrays', () => {
      const slotChild = createElement(slots.Title, {}, 'Label');
      const restChild = createElement('span', null, 'Footer');

      const { matched, rest } = partitionChildren(
        [slotChild, restChild],
        isSlotElement,
      );

      expect(matched).toHaveLength(1);
      expect(isSlotElement(matched[0])).toBe(true);
      expect(rest).toHaveLength(1);
      expect(isSlotElement(rest[0])).toBe(false);
    });
  });

  describe('when children include null or undefined', () => {
    it('omits nullish entries via Children.toArray', () => {
      const slotChild = createElement(slots.Title, {}, 'Label');

      const { matched, rest } = partitionChildren(
        [null, slotChild, undefined],
        isSlotElement,
      );

      expect(matched).toHaveLength(1);
      expect(isSlotElement(matched[0])).toBe(true);
      expect(rest).toHaveLength(0);
    });
  });
});
