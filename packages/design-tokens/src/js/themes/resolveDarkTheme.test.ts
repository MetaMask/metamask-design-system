import { darkTheme } from './darkTheme';
import { pureBlackDarkTheme } from './pureBlackDarkTheme';
import { resolveDarkTheme } from './resolveDarkTheme';

describe('resolveDarkTheme', () => {
  it('returns canonical darkTheme regardless of isPureBlack', () => {
    expect(resolveDarkTheme(false)).toBe(darkTheme);
    expect(resolveDarkTheme()).toBe(darkTheme);
    expect(resolveDarkTheme(true)).toBe(darkTheme);
    expect(resolveDarkTheme(true)).toBe(pureBlackDarkTheme);
  });

  it('uses OLED background.default on canonical dark', () => {
    expect(resolveDarkTheme(false).colors.background.default).toBe('#000000');
    expect(resolveDarkTheme(true).colors.background.default).toBe('#000000');
  });
});

describe('pureBlackDarkTheme', () => {
  it('is an alias of darkTheme after the OLED fold', () => {
    expect(pureBlackDarkTheme).toBe(darkTheme);
    expect(pureBlackDarkTheme.colors).toStrictEqual(darkTheme.colors);
  });
});
