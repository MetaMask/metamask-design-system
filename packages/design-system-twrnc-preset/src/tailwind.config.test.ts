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

    expect(lightConfig).not.toStrictEqual(darkConfig);
    expect(lightConfig).toHaveProperty('theme');
    expect(darkConfig).toHaveProperty('theme');
  });

  it('handles invalid theme gracefully', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {
        // Empty implementation
      });

    const config = generateTailwindConfig('invalid-theme' as Theme);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Theme colors not found.');
    expect(config).toStrictEqual({});

    consoleErrorSpy.mockRestore();
  });

  it('config structure is consistent between themes', () => {
    const lightConfig = generateTailwindConfig(Theme.Light);
    const darkConfig = generateTailwindConfig(Theme.Dark);

    expect(lightConfig).toHaveProperty('theme.extend');
    expect(darkConfig).toHaveProperty('theme.extend');

    const lightExtend = (lightConfig as Record<string, unknown>)
      .theme as Record<string, unknown>;
    const darkExtend = (darkConfig as Record<string, unknown>).theme as Record<
      string,
      unknown
    >;

    expect(lightExtend).toBeDefined();
    expect(darkExtend).toBeDefined();
    expect(
      Object.keys(lightExtend.extend as Record<string, unknown>),
    ).toStrictEqual(Object.keys(darkExtend.extend as Record<string, unknown>));
  });

  it('generates valid twrnc config object', () => {
    const config = generateTailwindConfig(Theme.Light);

    expect(typeof config).toBe('object');
    expect(config).not.toBeNull();
    expect(Array.isArray(config)).toBe(false);
  });

  it('maintains color values for each theme', () => {
    const lightConfig = generateTailwindConfig(Theme.Light);
    const darkConfig = generateTailwindConfig(Theme.Dark);

    const lightColors = (lightConfig as Record<string, unknown>)
      .theme as Record<string, unknown>;
    const lightExtendColors = (lightColors.extend as Record<string, unknown>)
      .colors as Record<string, string>;
    expect(lightExtendColors['background-default']).toBe('#ffffff');
    expect(lightExtendColors['text-default']).toBe('#24272a');

    const darkColors = (darkConfig as Record<string, unknown>).theme as Record<
      string,
      unknown
    >;
    const darkExtendColors = (darkColors.extend as Record<string, unknown>)
      .colors as Record<string, string>;
    expect(darkExtendColors['background-default']).toBe('#24272a');
    expect(darkExtendColors['text-default']).toBe('#ffffff');
  });
});
