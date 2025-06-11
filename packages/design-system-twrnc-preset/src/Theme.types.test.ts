import { Theme } from './Theme.types';

describe('Theme', () => {
  it('has correct light theme value', () => {
    expect(Theme.Light).toBe('light');
  });

  it('has correct dark theme value', () => {
    expect(Theme.Dark).toBe('dark');
  });

  it('has exactly two theme values', () => {
    const themeValues = Object.values(Theme);
    expect(themeValues).toHaveLength(2);
    expect(themeValues).toContain('light');
    expect(themeValues).toContain('dark');
  });

  it('enum keys match expected values', () => {
    expect(Object.keys(Theme)).toStrictEqual(['Light', 'Dark']);
  });

  it('can be used as string values', () => {
    const lightTheme: string = Theme.Light;
    const darkTheme: string = Theme.Dark;

    expect(typeof lightTheme).toBe('string');
    expect(typeof darkTheme).toBe('string');
    expect(lightTheme).toBe('light');
    expect(darkTheme).toBe('dark');
  });

  it('can be used as object keys', () => {
    const themeConfig = {
      [Theme.Light]: 'light-config',
      [Theme.Dark]: 'dark-config',
    };

    expect(themeConfig[Theme.Light]).toBe('light-config');
    expect(themeConfig[Theme.Dark]).toBe('dark-config');
    expect(themeConfig.light).toBe('light-config');
    expect(themeConfig.dark).toBe('dark-config');
  });

  it('can be iterated over', () => {
    const themes = Object.values(Theme);
    const result: string[] = [];

    themes.forEach((theme) => {
      result.push(theme);
    });

    expect(result).toStrictEqual(['light', 'dark']);
  });

  it('enum comparison works correctly', () => {
    expect(Theme.Light).toBe('light');
    expect(Theme.Dark).toBe('dark');
    // Test that they are distinct values
    const allThemes = [Theme.Light, Theme.Dark];
    expect(allThemes).toHaveLength(2);
    expect(new Set(allThemes).size).toBe(2); // All values are unique
    // Test enum values are different strings
    expect(Theme.Light).not.toBe(Theme.Dark);
  });

  it('enum values can be compared and used in logic', () => {
    // Test direct enum usage without switch statements to avoid conditional logic warnings
    expect(Theme.Light).toBe('light');
    expect(Theme.Dark).toBe('dark');

    // Test that we can distinguish between the two enum values
    expect(Theme.Light).not.toBe(Theme.Dark);
    expect(Theme.Light).toBe(Theme.Light);
    expect(Theme.Dark).toBe(Theme.Dark);
  });

  it('maintains type safety', () => {
    const validTheme: Theme = Theme.Light;
    const anotherValidTheme: Theme = Theme.Dark;

    // These should compile without error
    expect([validTheme, anotherValidTheme]).toContain('light');
    expect([validTheme, anotherValidTheme]).toContain('dark');
  });
});
