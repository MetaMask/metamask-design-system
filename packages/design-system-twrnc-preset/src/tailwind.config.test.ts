import { generateTailwindConfig } from './tailwind.config';
import { Theme } from './Theme.types';

// Mock the colors and typography modules since we're testing the config generation logic
jest.mock('./colors', () => ({
  themeColors: {
    light: {
      'background-default': '#ffffff',
      'background-muted': '#f2f4f6',
      'text-default': '#24272a',
      'text-muted': '#6a737d',
      'border-default': '#d6d9dc',
      'border-muted': '#bbc0c5',
      'primary-default': '#0376c9',
      'error-default': '#d73a49',
    },
    dark: {
      'background-default': '#24272a',
      'background-muted': '#1c1e21',
      'text-default': '#ffffff',
      'text-muted': '#9fa6ad',
      'border-default': '#495057',
      'border-muted': '#6c757d',
      'primary-default': '#1098fc',
      'error-default': '#f85149',
    },
  },
}));

jest.mock('./typography', () => ({
  typographyTailwindConfig: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
    },
    fontFamily: {
      sans: ['System', 'sans-serif'],
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
    },
  },
}));

describe('generateTailwindConfig', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('generates config for light theme', () => {
    const config = generateTailwindConfig(Theme.Light);

    expect(config).toBeDefined();
    expect(typeof config).toBe('object');
    expect(config).toHaveProperty('theme');
  });

  it('generates config for dark theme', () => {
    const config = generateTailwindConfig(Theme.Dark);

    expect(config).toBeDefined();
    expect(typeof config).toBe('object');
    expect(config).toHaveProperty('theme');
  });

  it('includes color properties in the config', () => {
    const config = generateTailwindConfig(Theme.Light);

    expect(config).toHaveProperty('theme.extend.colors');
    expect(config).toHaveProperty('theme.extend.textColor');
    expect(config).toHaveProperty('theme.extend.backgroundColor');
    expect(config).toHaveProperty('theme.extend.borderColor');
  });

  it('includes typography configuration', () => {
    const config = generateTailwindConfig(Theme.Light);

    expect(config).toHaveProperty('theme.extend.fontSize');
    expect(config).toHaveProperty('theme.extend.fontFamily');
    expect(config).toHaveProperty('theme.extend.letterSpacing');
    expect(config).toHaveProperty('theme.extend.lineHeight');
  });

  it('generates different configs for different themes', () => {
    const lightConfig = generateTailwindConfig(Theme.Light);
    const darkConfig = generateTailwindConfig(Theme.Dark);

    expect(lightConfig).not.toEqual(darkConfig);
    expect(lightConfig).toHaveProperty('theme');
    expect(darkConfig).toHaveProperty('theme');
  });

  it('handles invalid theme gracefully', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // @ts-expect-error - Testing invalid theme
    const config = generateTailwindConfig('invalid-theme');

    expect(consoleErrorSpy).toHaveBeenCalledWith('Theme colors not found.');
    expect(config).toEqual({});

    consoleErrorSpy.mockRestore();
  });

  it('config structure is consistent between themes', () => {
    const lightConfig = generateTailwindConfig(Theme.Light);
    const darkConfig = generateTailwindConfig(Theme.Dark);

    // Both should have the same structure
    expect(lightConfig).toHaveProperty('theme.extend');
    expect(darkConfig).toHaveProperty('theme.extend');

    // Get the extend objects
    const lightExtend = (lightConfig as any).theme?.extend;
    const darkExtend = (darkConfig as any).theme?.extend;

    if (lightExtend && darkExtend) {
      expect(Object.keys(lightExtend)).toEqual(Object.keys(darkExtend));
    }
  });

  it('generates valid twrnc config object', () => {
    const config = generateTailwindConfig(Theme.Light);

    // Should be a valid object that twrnc can use
    expect(typeof config).toBe('object');
    expect(config).not.toBeNull();
    expect(Array.isArray(config)).toBe(false);
  });

  it('maintains color values for each theme', () => {
    const lightConfig = generateTailwindConfig(Theme.Light);
    const darkConfig = generateTailwindConfig(Theme.Dark);

    // Light theme should have light colors
    const lightColors = (lightConfig as any).theme?.extend?.colors;
    expect(lightColors?.['background-default']).toBe('#ffffff');
    expect(lightColors?.['text-default']).toBe('#24272a');

    // Dark theme should have dark colors
    const darkColors = (darkConfig as any).theme?.extend?.colors;
    expect(darkColors?.['background-default']).toBe('#24272a');
    expect(darkColors?.['text-default']).toBe('#ffffff');
  });
});
