import { themeColors } from './colors';
import { Theme } from './Theme.types';

describe('colors', () => {
  describe('themeColors', () => {
    it('has colors for both light and dark themes', () => {
      expect(themeColors).toHaveProperty(Theme.Light);
      expect(themeColors).toHaveProperty(Theme.Dark);
      expect(typeof themeColors[Theme.Light]).toBe('object');
      expect(typeof themeColors[Theme.Dark]).toBe('object');
    });

    it('flattens nested color objects with kebab-case keys', () => {
      const lightColors = themeColors[Theme.Light];

      expect(lightColors).toHaveProperty('background-default');
      expect(lightColors).toHaveProperty('background-alternative');
      expect(lightColors).toHaveProperty('text-default');
      expect(lightColors).toHaveProperty('primary-default');
      expect(lightColors).toHaveProperty('error-default');
      expect(lightColors).toHaveProperty('shadow-default');
    });

    it('contains expected color values for light theme', () => {
      const lightColors = themeColors[Theme.Light];

      expect(lightColors['background-default']).toBeDefined();
      expect(lightColors['background-alternative']).toBeDefined();
      expect(lightColors['text-default']).toBeDefined();
      expect(lightColors['primary-default']).toBeDefined();
      expect(lightColors['error-default']).toBeDefined();

      expect(lightColors['background-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
      expect(lightColors['text-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
      expect(lightColors['primary-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
      expect(lightColors['error-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
    });

    it('contains expected color values for dark theme', () => {
      const darkColors = themeColors[Theme.Dark];

      expect(darkColors['background-default']).toBeDefined();
      expect(darkColors['background-alternative']).toBeDefined();
      expect(darkColors['text-default']).toBeDefined();
      expect(darkColors['primary-default']).toBeDefined();
      expect(darkColors['error-default']).toBeDefined();

      expect(darkColors['background-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
      expect(darkColors['text-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
      expect(darkColors['primary-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
      expect(darkColors['error-default']).toMatch(
        /^#[0-9A-F]{6}([0-9A-F]{2})?$/iu,
      );
    });

    it('has different colors between light and dark themes', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      expect(lightColors['background-default']).not.toBe(
        darkColors['background-default'],
      );
      expect(lightColors['text-default']).not.toBe(darkColors['text-default']);
      expect(lightColors['primary-default']).not.toBe(
        darkColors['primary-default'],
      );
    });

    it('has consistent structure between themes', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      const lightKeys = Object.keys(lightColors).sort();
      const darkKeys = Object.keys(darkColors).sort();

      expect(lightKeys).toStrictEqual(darkKeys);
      expect(lightKeys.length).toBeGreaterThan(0);
    });

    it('converts camelCase to kebab-case in color keys', () => {
      const lightColors = themeColors[Theme.Light];

      expect(lightColors).toHaveProperty('background-alternative');
      expect(lightColors).toHaveProperty('text-alternative');
      expect(lightColors).toHaveProperty('primary-alternative');
      expect(lightColors).toHaveProperty('error-alternative');

      const keys = Object.keys(lightColors);
      const hasCamelCase = keys.some((key) => /[A-Z]/u.test(key));
      expect(hasCamelCase).toBe(false);
    });

    it('includes muted color variants', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      expect(lightColors).toHaveProperty('background-muted');
      expect(lightColors).toHaveProperty('text-muted');
      expect(lightColors).toHaveProperty('primary-muted');
      expect(lightColors).toHaveProperty('error-muted');

      expect(darkColors).toHaveProperty('background-muted');
      expect(darkColors).toHaveProperty('text-muted');
      expect(darkColors).toHaveProperty('primary-muted');
      expect(darkColors).toHaveProperty('error-muted');
    });

    it('includes shadow colors', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      expect(lightColors).toHaveProperty('shadow-default');
      expect(lightColors).toHaveProperty('shadow-primary');
      expect(lightColors).toHaveProperty('shadow-error');

      expect(darkColors).toHaveProperty('shadow-default');
      expect(darkColors).toHaveProperty('shadow-primary');
      expect(darkColors).toHaveProperty('shadow-error');
    });

    it('has all color values as strings', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      Object.values(lightColors).forEach((color) => {
        expect(typeof color).toBe('string');
        expect(color).toMatch(/^#[0-9A-F]{6}([0-9A-F]{2})?$/iu);
      });

      Object.values(darkColors).forEach((color) => {
        expect(typeof color).toBe('string');
        expect(color).toMatch(/^#[0-9A-F]{6}([0-9A-F]{2})?$/iu);
      });
    });

    it('filters out non-string and non-object values during flattening', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      const lightKeys = Object.keys(lightColors);
      const darkKeys = Object.keys(darkColors);

      expect(lightKeys.length).toBeGreaterThan(10);
      expect(darkKeys.length).toBeGreaterThan(10);

      lightKeys.forEach((key) => {
        expect(typeof lightColors[key]).toBe('string');
      });
      darkKeys.forEach((key) => {
        expect(typeof darkColors[key]).toBe('string');
      });
    });
  });
});
