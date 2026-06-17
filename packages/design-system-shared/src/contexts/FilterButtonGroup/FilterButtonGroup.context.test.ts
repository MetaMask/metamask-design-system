import { createElement, useContext } from 'react';
import { act, create } from 'react-test-renderer';

import { ButtonBaseSize } from '../../types/ButtonBase/ButtonBase.types';
import { FilterButtonVariant } from '../../types/FilterButton/FilterButton.types';

import type { FilterButtonGroupContextValue } from '.';
import { FilterButtonGroupContext } from '.';

describe('FilterButtonGroupContext', () => {
  it('uses displayName for React DevTools', () => {
    expect(FilterButtonGroupContext.displayName).toBe(
      'FilterButtonGroupContext',
    );
  });

  describe('when read outside a Provider', () => {
    it('yields null to consumers', () => {
      function Consumer() {
        const value = useContext(FilterButtonGroupContext);
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

  describe('when provided by FilterButtonGroupContext.Provider', () => {
    it('exposes value and onChange to consumers', () => {
      const onChange = jest.fn();
      const providerValue: FilterButtonGroupContextValue = {
        value: 'filter-b',
        onChange,
      };

      function Consumer() {
        const ctx = useContext(FilterButtonGroupContext);
        if (!ctx) {
          return createElement('span', null, 'missing');
        }
        return createElement('span', null, ctx.value);
      }

      let root!: ReturnType<typeof create>;
      act(() => {
        root = create(
          createElement(
            FilterButtonGroupContext.Provider,
            { value: providerValue },
            createElement(Consumer),
          ),
        );
      });

      expect(root.toJSON()).toMatchObject({
        type: 'span',
        children: ['filter-b'],
      });
    });

    it('exposes optional variant when set', () => {
      const providerValue: FilterButtonGroupContextValue = {
        value: 'a',
        onChange: jest.fn(),
        variant: FilterButtonVariant.Secondary,
      };

      function Consumer() {
        const ctx = useContext(FilterButtonGroupContext);
        return createElement(
          'span',
          null,
          ctx?.variant === FilterButtonVariant.Secondary
            ? 'secondary'
            : 'other',
        );
      }

      let root!: ReturnType<typeof create>;
      act(() => {
        root = create(
          createElement(
            FilterButtonGroupContext.Provider,
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

    it('exposes optional size and isEqualWidth when set', () => {
      const providerValue: FilterButtonGroupContextValue = {
        value: 'a',
        onChange: jest.fn(),
        size: ButtonBaseSize.Md,
        isEqualWidth: true,
      };

      function Consumer() {
        const ctx = useContext(FilterButtonGroupContext);
        return createElement(
          'span',
          null,
          `${ctx?.size ?? 'none'}-${ctx?.isEqualWidth ? 'equal' : 'auto'}`,
        );
      }

      let root!: ReturnType<typeof create>;
      act(() => {
        root = create(
          createElement(
            FilterButtonGroupContext.Provider,
            { value: providerValue },
            createElement(Consumer),
          ),
        );
      });

      expect(root.toJSON()).toMatchObject({
        type: 'span',
        children: ['md-equal'],
      });
    });
  });
});
