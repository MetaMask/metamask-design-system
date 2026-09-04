import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { borderRadius } from '@metamask/design-tokens';
import { renderHook } from '@testing-library/react-native';

// Each numeric alias and the Tailwind name that carries the same value.
const ALIASED_NAMES: [string, string][] = [
  ['2', 'sm'],
  ['4', ''],
  ['6', 'md'],
  ['8', 'lg'],
  ['12', 'xl'],
  ['16', '2xl'],
  ['24', '3xl'],
];

describe('Border radius utilities', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeEach(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  it.each(Object.entries(borderRadius))(
    'resolves rounded-%s to %ipx',
    (token, value) => {
      expect(tw.style(`rounded-${token}`)).toStrictEqual({
        borderRadius: value,
      });
    },
  );

  it.each(ALIASED_NAMES)(
    'rounded-%s resolves to the same value as the Tailwind name it aliases',
    (alias, tailwindName) => {
      const tailwindClass = tailwindName
        ? `rounded-${tailwindName}`
        : 'rounded';

      expect(tw.style(`rounded-${alias}`)).toStrictEqual(
        tw.style(tailwindClass),
      );
    },
  );

  it('supports corner-specific variants', () => {
    expect(tw.style('rounded-t-24')).toStrictEqual({
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    });
  });
});
