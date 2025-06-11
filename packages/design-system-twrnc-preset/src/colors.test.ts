import { themeColors } from './colors';
import { Theme } from './Theme.types';

// Mock the design tokens to ensure consistent testing
jest.mock('@metamask/design-tokens', () => ({
  lightTheme: {
    colors: {
      background: {
        default: '#FFFFFF',
        alternative: '#F2F4F6',
        muted: '#FCFCFC',
      },
      text: {
        default: '#24272A',
        alternative: '#535A61',
        muted: '#9FA6AD',
      },
      primary: {
        default: '#0376C9',
        alternative: '#0260A4',
        muted: '#037DD680',
      },
      error: {
        default: '#D73A49',
        alternative: '#B92534',
        muted: '#D73A4980',
      },
      shadow: {
        default: '#00000026',
        primary: '#037DD633',
        error: '#CA354280',
      },
      edge: {
        nullValue: null,
        numberValue: 42,
        booleanValue: true,
        undefinedValue: undefined,
      },
    },
  },
  darkTheme: {
    colors: {
      background: {
        default: '#24272A',
        alternative: '#1C1E21',
        muted: '#2C2E31',
      },
      text: {
        default: '#FFFFFF',
        alternative: '#D6D9DC',
        muted: '#9FA6AD',
      },
      primary: {
        default: '#1098FC',
        alternative: '#5DBBF5',
        muted: '#1098FC80',
      },
      error: {
        default: '#F85149',
        alternative: '#FF6A63',
        muted: '#F8514980',
      },
      shadow: {
        default: '#00000080',
        primary: '#1098FC33',
        error: '#FF6A6380',
      },
      edge: {
        nullValue: null,
        numberValue: 42,
        booleanValue: true,
        undefinedValue: undefined,
      },
    },
  },
}));

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

      // Check that nested objects are flattened
      expect(lightColors).toHaveProperty('background-default');
      expect(lightColors).toHaveProperty('background-alternative');
      expect(lightColors).toHaveProperty('text-default');
      expect(lightColors).toHaveProperty('primary-default');
      expect(lightColors).toHaveProperty('error-default');
      expect(lightColors).toHaveProperty('shadow-default');
    });

    it('contains expected color values for light theme', () => {
      const lightColors = themeColors[Theme.Light];

      expect(lightColors['background-default']).toBe('#FFFFFF');
      expect(lightColors['background-alternative']).toBe('#F2F4F6');
      expect(lightColors['text-default']).toBe('#24272A');
      expect(lightColors['primary-default']).toBe('#0376C9');
      expect(lightColors['error-default']).toBe('#D73A49');
    });

    it('contains expected color values for dark theme', () => {
      const darkColors = themeColors[Theme.Dark];

      expect(darkColors['background-default']).toBe('#24272A');
      expect(darkColors['background-alternative']).toBe('#1C1E21');
      expect(darkColors['text-default']).toBe('#FFFFFF');
      expect(darkColors['primary-default']).toBe('#1098FC');
      expect(darkColors['error-default']).toBe('#F85149');
    });

    it('has different colors between light and dark themes', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      // Background colors should be different
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

      // Both themes should have the same color keys
      expect(lightKeys).toEqual(darkKeys);
      expect(lightKeys.length).toBeGreaterThan(0);
    });

    it('converts camelCase to kebab-case in color keys', () => {
      const lightColors = themeColors[Theme.Light];

      // Check that camelCase properties are converted to kebab-case
      expect(lightColors).toHaveProperty('background-alternative');
      expect(lightColors).toHaveProperty('text-alternative');
      expect(lightColors).toHaveProperty('primary-alternative');
      expect(lightColors).toHaveProperty('error-alternative');

      // Ensure no camelCase keys exist
      const keys = Object.keys(lightColors);
      const hasCamelCase = keys.some((key) => /[A-Z]/.test(key));
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
        expect(color).toMatch(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i); // Valid hex color
      });

      Object.values(darkColors).forEach((color) => {
        expect(typeof color).toBe('string');
        expect(color).toMatch(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i); // Valid hex color
      });
    });

    it('handles edge cases in color flattening', () => {
      const lightColors = themeColors[Theme.Light];
      const darkColors = themeColors[Theme.Dark];

      // The edge values in our mock should be filtered out since they're not strings
      // or valid nested objects, so these keys should not exist in the flattened result
      expect(lightColors).not.toHaveProperty('edge-null-value');
      expect(lightColors).not.toHaveProperty('edge-number-value');
      expect(lightColors).not.toHaveProperty('edge-boolean-value');
      expect(lightColors).not.toHaveProperty('edge-undefined-value');

      expect(darkColors).not.toHaveProperty('edge-null-value');
      expect(darkColors).not.toHaveProperty('edge-number-value');
      expect(darkColors).not.toHaveProperty('edge-boolean-value');
      expect(darkColors).not.toHaveProperty('edge-undefined-value');
    });

    it('filters out non-string and non-object values during flattening', () => {
      // This test verifies that the flattenColors function correctly handles
      // edge cases where values are neither strings nor valid objects
      const lightColors = themeColors[Theme.Light];

      // Count only valid string color values (should exclude the edge cases)
      const validColorKeys = Object.keys(lightColors).filter((key) => {
        return (
          lightColors[key] &&
          typeof lightColors[key] === 'string' &&
          lightColors[key].startsWith('#')
        );
      });

      // Should have all the expected color values but none of the edge case values
      expect(validColorKeys.length).toBeGreaterThan(10);
      expect(validColorKeys.every((key) => !key.includes('edge'))).toBe(true);
    });
  });
});
