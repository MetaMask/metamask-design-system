import { createElement, useContext } from 'react';
import { act, create } from 'react-test-renderer';

import { SegmentButtonVariant } from '../../types/SegmentButton/SegmentButton.types';

import type { SegmentGroupContextValue } from '.';
import { SegmentGroupContext } from '.';

describe('SegmentGroupContext', () => {
  it('uses displayName for React DevTools', () => {
    expect(SegmentGroupContext.displayName).toBe('SegmentGroupContext');
  });

  describe('when read outside a Provider', () => {
    it('yields null to consumers', () => {
      function Consumer() {
        const value = useContext(SegmentGroupContext);
        return createElement('span', null, value === null ? 'empty' : 'set');
      }

      let root!: ReturnType<typeof create>;
      act(() => {
        root = create(createElement(Consumer));
      });

      expect(root.toJSON()).toMatchObject({
        type: 'span',
        children: ['empty'],
      });
    });
  });

  describe('when provided by SegmentGroupContext.Provider', () => {
    it('exposes value and onChange to consumers', () => {
      const onChange = jest.fn();
      const providerValue: SegmentGroupContextValue = {
        value: 'segment-b',
        onChange,
      };

      function Consumer() {
        const ctx = useContext(SegmentGroupContext);
        if (!ctx) {
          return createElement('span', null, 'missing');
        }
        return createElement('span', null, ctx.value);
      }

      let root!: ReturnType<typeof create>;
      act(() => {
        root = create(
          createElement(
            SegmentGroupContext.Provider,
            { value: providerValue },
            createElement(Consumer),
          ),
        );
      });

      expect(root.toJSON()).toMatchObject({
        type: 'span',
        children: ['segment-b'],
      });
    });

    it('exposes optional variant when set', () => {
      const providerValue: SegmentGroupContextValue = {
        value: 'a',
        onChange: jest.fn(),
        variant: SegmentButtonVariant.Secondary,
      };

      function Consumer() {
        const ctx = useContext(SegmentGroupContext);
        return createElement(
          'span',
          null,
          ctx?.variant === SegmentButtonVariant.Secondary
            ? 'secondary'
            : 'other',
        );
      }

      let root!: ReturnType<typeof create>;
      act(() => {
        root = create(
          createElement(
            SegmentGroupContext.Provider,
            { value: providerValue },
            createElement(Consumer),
          ),
        );
      });

      expect(root.toJSON()).toMatchObject({
        type: 'span',
        children: ['secondary'],
      });
    });
  });
});
