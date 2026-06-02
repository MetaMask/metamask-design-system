import { createElement, useState } from 'react';
import { act, create } from 'react-test-renderer';

import { createCompoundSlotSystem } from './createCompoundSlotSystem';
import { parseCompoundSlots } from './parseCompoundSlots';
import { useCompoundSlots } from './useCompoundSlots';

const TestSlotId = {
  Title: 'Title',
} as const;

type TestProps = {
  title?: string;
  children?: React.ReactNode;
};

type ParsedTestProps = {
  title?: string;
};

describe('useCompoundSlots', () => {
  const { slots, isSlotElement, hasSlotChildren } = createCompoundSlotSystem({
    slotIds: TestSlotId,
    displayNamePrefix: 'Test',
  });

  const parse = (children: React.ReactNode): ParsedTestProps =>
    parseCompoundSlots(
      children,
      isSlotElement,
      {
        Title: (target, slotProps) => {
          target.title = (slotProps as { children?: string }).children;
        },
      },
      {} as ParsedTestProps,
    );

  describe('when slot children are present', () => {
    it('partitions non-slot children when enabled', () => {
      let result!: ReturnType<
        typeof useCompoundSlots<TestProps, ParsedTestProps>
      >;

      function Consumer() {
        result = useCompoundSlots<TestProps, ParsedTestProps>({
          props: {
            children: [
              createElement(slots.Title, {}, 'From slot'),
              createElement('span', null, 'Below content'),
            ],
          },
          isSlotElement,
          hasSlotChildren,
          parse,
          partitionNonSlots: true,
        });
        return null;
      }

      act(() => {
        create(createElement(Consumer));
      });

      expect(result.hasSlots).toBe(true);
      expect(result.mergedProps).toStrictEqual({ title: 'From slot' });
      expect(result.children).toHaveLength(1);
    });

    it('returns null children when only slot children exist', () => {
      let result!: ReturnType<
        typeof useCompoundSlots<TestProps, ParsedTestProps>
      >;

      function Consumer() {
        result = useCompoundSlots<TestProps, ParsedTestProps>({
          props: {
            children: createElement(slots.Title, {}, 'From slot'),
          },
          isSlotElement,
          hasSlotChildren,
          parse,
        });
        return null;
      }

      act(() => {
        create(createElement(Consumer));
      });

      expect(result.hasSlots).toBe(true);
      expect(result.mergedProps).toStrictEqual({ title: 'From slot' });
      expect(result.children).toBeNull();
    });

    it('returns null children when partitionNonSlots is enabled with only slots', () => {
      let result!: ReturnType<
        typeof useCompoundSlots<TestProps, ParsedTestProps>
      >;

      function Consumer() {
        result = useCompoundSlots<TestProps, ParsedTestProps>({
          props: {
            children: createElement(slots.Title, {}, 'From slot'),
          },
          isSlotElement,
          hasSlotChildren,
          parse,
          partitionNonSlots: true,
        });
        return null;
      }

      act(() => {
        create(createElement(Consumer));
      });

      expect(result.children).toBeNull();
    });
  });

  describe('when no slot children are present', () => {
    it('returns props without children and partitioned children when enabled', () => {
      let result!: ReturnType<
        typeof useCompoundSlots<TestProps, ParsedTestProps>
      >;

      function Consumer() {
        result = useCompoundSlots<TestProps, ParsedTestProps>({
          props: {
            title: 'From prop',
            children: createElement('span', null, 'Below content'),
          },
          isSlotElement,
          hasSlotChildren,
          parse,
          partitionNonSlots: true,
        });
        return null;
      }

      act(() => {
        create(createElement(Consumer));
      });

      expect(result.hasSlots).toBe(false);
      expect(result.mergedProps).toStrictEqual({ title: 'From prop' });
      expect(result.children).not.toBeNull();
    });

    it('returns null children when input children are absent', () => {
      let result!: ReturnType<
        typeof useCompoundSlots<TestProps, ParsedTestProps>
      >;

      function Consumer() {
        result = useCompoundSlots<TestProps, ParsedTestProps>({
          props: { title: 'From prop' },
          isSlotElement,
          hasSlotChildren,
          parse,
          partitionNonSlots: true,
        });
        return null;
      }

      act(() => {
        create(createElement(Consumer));
      });

      expect(result.hasSlots).toBe(false);
      expect(result.children).toBeNull();
    });
  });

  describe('memoization', () => {
    it('does not re-parse when props reference is stable across re-renders', () => {
      const parseSpy = jest.fn(parse);
      let setTick: (value: number) => void = () => undefined;
      const stableProps = {
        children: createElement(slots.Title, {}, 'From slot'),
      };

      function Consumer() {
        const [, setState] = useState(0);
        setTick = setState;

        useCompoundSlots<TestProps, ParsedTestProps>({
          props: stableProps,
          isSlotElement,
          hasSlotChildren,
          parse: parseSpy,
        });
        return null;
      }

      let tree!: ReturnType<typeof create>;

      act(() => {
        tree = create(createElement(Consumer));
      });

      expect(parseSpy).toHaveBeenCalledTimes(1);

      act(() => {
        setTick(1);
      });

      expect(parseSpy).toHaveBeenCalledTimes(1);

      tree.unmount();
    });
  });
});
