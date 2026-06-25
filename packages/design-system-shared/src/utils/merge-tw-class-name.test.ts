import { mergeTwClassName } from './merge-tw-class-name';

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
