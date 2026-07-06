import { darkTheme } from './darkTheme';
import { pureBlackDarkTheme } from './pureBlackDarkTheme';
import { resolveDarkTheme } from './resolveDarkTheme';

describe('resolveDarkTheme', () => {
  it('returns grey darkTheme when isPureBlack is false', () => {
    expect(resolveDarkTheme(false)).toBe(darkTheme);
    expect(resolveDarkTheme()).toBe(darkTheme);
  });

  it('returns pureBlackDarkTheme when isPureBlack is true', () => {
    expect(resolveDarkTheme(true)).toBe(pureBlackDarkTheme);
    expect(resolveDarkTheme(true).colors.background.default).toBe('#000000');
  });
});
