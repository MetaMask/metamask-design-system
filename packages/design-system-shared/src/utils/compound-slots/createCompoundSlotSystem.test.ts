import { createElement } from 'react';

import type { SlotElement } from './createCompoundSlotSystem';
import { createCompoundSlotSystem } from './createCompoundSlotSystem';

const TestSlotId = {
  Title: 'Title',
  Footer: 'Footer',
} as const;

describe('createCompoundSlotSystem', () => {
  const { slots, isSlotElement, hasSlotChildren } = createCompoundSlotSystem({
    slotIds: TestSlotId,
    displayNamePrefix: 'Test',
  });

  describe('when slot components are created', () => {
    it('assigns slotId and displayName to each marker', () => {
      expect(slots.Title.slotId).toBe('Title');
      expect(slots.Title.displayName).toBe('Test.Title');
      expect(slots.Footer.slotId).toBe('Footer');
      expect(slots.Footer.displayName).toBe('Test.Footer');
    });

    it('renders null from marker components', () => {
      expect(slots.Title({})).toBeNull();
    });
  });

  describe('when isSlotElement is called', () => {
    it('returns true for a matching slot element', () => {
      const element = createElement(slots.Title, {}, 'Label');

      expect(isSlotElement(element)).toBe(true);
    });

    it('returns false for non-slot elements', () => {
      const element = createElement('span', null, 'Label');

      expect(isSlotElement(element)).toBe(false);
    });

    it('returns false for non-element nodes', () => {
      expect(isSlotElement('text')).toBe(false);
      expect(isSlotElement(null)).toBe(false);
    });

    it('returns false for components with unknown slotId', () => {
      const UnknownSlot = Object.assign(() => null, { slotId: 'Unknown' });

      expect(isSlotElement(createElement(UnknownSlot, null))).toBe(false);
    });
  });

  describe('when hasSlotChildren is called', () => {
    it('returns true when at least one child is a slot element', () => {
      const children = [
        createElement(slots.Title, {}, 'Label'),
        createElement('span', null, 'Other'),
      ];

      expect(hasSlotChildren(children)).toBe(true);
    });

    it('returns false when no children are slot elements', () => {
      expect(hasSlotChildren(createElement('span', null, 'Other'))).toBe(false);
    });
  });
});

