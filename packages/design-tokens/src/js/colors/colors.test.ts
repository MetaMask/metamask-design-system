import { lightTheme, darkTheme } from '../themes';
import { colors } from './colors';

describe('Colors', () => {
  describe('light theme', () => {
    it('should match lightTheme colors', () => {
      expect(colors.light).toStrictEqual({
        ...lightTheme.colors,
      });
    });

    it('should contain all lightTheme color properties', () => {
      const lightThemeKeys = Object.keys(lightTheme.colors);
      const colorKeys = Object.keys(colors.light);
      expect(colorKeys).toStrictEqual(lightThemeKeys);
    });
  });

  describe('dark theme', () => {
    it('should match darkTheme colors', () => {
      expect(colors.dark).toStrictEqual({
        ...darkTheme.colors,
      });
    });

    it('should contain all darkTheme color properties', () => {
      const darkThemeKeys = Object.keys(darkTheme.colors);
      const colorKeys = Object.keys(colors.dark);
      expect(colorKeys).toStrictEqual(darkThemeKeys);
    });
  });
});
