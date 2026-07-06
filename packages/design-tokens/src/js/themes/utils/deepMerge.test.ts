import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('merges nested objects without mutating the base', () => {
    const base = {
      background: { default: '#121314', muted: '#e2e2ff1b' },
      text: { default: '#ffffff' },
    };
    const overrides = {
      background: { default: '#000000' },
    };

    const merged = deepMerge(base, overrides);

    expect(merged).toStrictEqual({
      background: { default: '#000000', muted: '#e2e2ff1b' },
      text: { default: '#ffffff' },
    });
    expect(base.background.default).toBe('#121314');
  });

  it('skips undefined override keys and replaces leaf values', () => {
    const base = {
      count: 1,
      label: 'grey',
      nested: { kept: true, replaced: 'before' },
    };

    const merged = deepMerge(base, {
      count: 2,
      label: undefined,
      nested: { replaced: 'after' },
    });

    expect(merged).toStrictEqual({
      count: 2,
      label: 'grey',
      nested: { kept: true, replaced: 'after' },
    });
  });
});
