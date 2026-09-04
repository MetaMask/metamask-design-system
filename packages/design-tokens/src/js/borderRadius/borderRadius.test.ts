import { readFileSync } from 'fs';
import { resolve } from 'path';

import { borderRadius } from './borderRadius';

describe('borderRadius', () => {
  it('maps every token name to its pixel value', () => {
    expect(borderRadius).toStrictEqual({
      none: 0,
      2: 2,
      4: 4,
      6: 6,
      8: 8,
      12: 12,
      16: 16,
      24: 24,
      full: 9999,
    });
  });

  it('names every numeric step after its own value', () => {
    const numericSteps = Object.entries(borderRadius).filter(
      ([token]) => !Number.isNaN(Number(token)),
    );

    expect(numericSteps).not.toHaveLength(0);
    numericSteps.forEach(([token, value]) => {
      expect(Number(token)).toBe(value);
    });
  });
});

describe('border-radius.css', () => {
  const css = readFileSync(
    resolve(__dirname, '../../css/border-radius.css'),
    'utf8',
  );

  it.each(Object.entries(borderRadius))(
    'defines --radius-%s as %ipx',
    (token, value) => {
      expect(css).toContain(`--radius-${token}: ${value}px;`);
    },
  );

  it('does not define radius variables outside the scale', () => {
    const declared = [...css.matchAll(/--radius-([\w-]+):/gu)].map(
      ([, token]) => token,
    );

    expect(declared.sort()).toStrictEqual(Object.keys(borderRadius).sort());
  });
});
