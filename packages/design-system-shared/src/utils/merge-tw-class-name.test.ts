import { mergeTwClassName, resolveClassName } from './merge-tw-class-name';

describe('mergeTwClassName', () => {
  it('returns base when extra is undefined', () => {
    expect(mergeTwClassName('px-2', undefined)).toBe('px-2');
  });

  it('returns base when extra is empty string', () => {
    expect(mergeTwClassName('px-2', '')).toBe('px-2');
  });

  it('returns merged classes when extra is provided', () => {
    expect(mergeTwClassName('px-2', 'border-b')).toBe('px-2 border-b');
  });
});

describe('resolveClassName', () => {
  it('joins base, twClassName and className in that order', () => {
    expect(resolveClassName('px-2', 'mt-1', 'mt-4')).toBe('px-2 mt-1 mt-4');
  });

  it('skips empty parts', () => {
    expect(resolveClassName('', undefined, 'mt-4')).toBe('mt-4');
  });
});
