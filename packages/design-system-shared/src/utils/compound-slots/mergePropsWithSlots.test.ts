import { mergePropsWithSlots, pickProp } from './mergePropsWithSlots';

describe('pickProp', () => {
  describe('when explicit prop is defined', () => {
    it('returns the explicit value', () => {
      expect(pickProp('explicit', 'slot')).toBe('explicit');
      expect(pickProp('', 'slot')).toBe('');
      expect(pickProp(0, 1)).toBe(0);
    });
  });

  describe('when explicit prop is undefined', () => {
    it('returns the slot value', () => {
      expect(pickProp(undefined, 'slot')).toBe('slot');
    });
  });
});

describe('mergePropsWithSlots', () => {
  describe('when slot props overlap component props', () => {
    it('prefers explicit props over parsed slot values', () => {
      type Props = {
        title?: string;
        value?: string;
        children?: string;
      };

      const props: Props = { title: 'From prop', children: 'x' };
      const slotProps: Partial<Props> = {
        title: 'From slot',
        value: '100',
        children: 'ignored',
      };

      expect(mergePropsWithSlots(props, slotProps)).toStrictEqual({
        title: 'From prop',
        value: '100',
      });
    });
  });
});
