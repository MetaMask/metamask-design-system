import * as DesignSystemTwrncPreset from './index';
import { ThemeProvider } from './ThemeProvider';
import { Theme } from './Theme.types';
import { useTheme, useTailwind } from './hooks';

describe('index exports', () => {
  it('exports ThemeProvider', () => {
    expect(DesignSystemTwrncPreset.ThemeProvider).toBeDefined();
    expect(DesignSystemTwrncPreset.ThemeProvider).toBe(ThemeProvider);
  });

  it('exports Theme enum', () => {
    expect(DesignSystemTwrncPreset.Theme).toBeDefined();
    expect(DesignSystemTwrncPreset.Theme).toBe(Theme);
  });

  it('exports useTheme hook', () => {
    expect(DesignSystemTwrncPreset.useTheme).toBeDefined();
    expect(DesignSystemTwrncPreset.useTheme).toBe(useTheme);
    expect(typeof DesignSystemTwrncPreset.useTheme).toBe('function');
  });

  it('exports useTailwind hook', () => {
    expect(DesignSystemTwrncPreset.useTailwind).toBeDefined();
    expect(DesignSystemTwrncPreset.useTailwind).toBe(useTailwind);
    expect(typeof DesignSystemTwrncPreset.useTailwind).toBe('function');
  });

  it('exports all expected members', () => {
    const expectedExports = [
      'ThemeProvider',
      'Theme',
      'useTheme',
      'useTailwind',
    ];
    const actualExports = Object.keys(DesignSystemTwrncPreset);

    expectedExports.forEach((exportName) => {
      expect(actualExports).toContain(exportName);
    });
  });

  it('does not export unexpected members', () => {
    const actualExports = Object.keys(DesignSystemTwrncPreset);
    const expectedExports = [
      'ThemeProvider',
      'Theme',
      'useTheme',
      'useTailwind',
    ];

    // Should only export the expected members
    expect(actualExports.sort()).toEqual(expectedExports.sort());
  });

  it('exports have correct types', () => {
    // ThemeProvider should be a React component (function/object)
    expect(typeof DesignSystemTwrncPreset.ThemeProvider).toBe('function');

    // Theme should be an object (enum)
    expect(typeof DesignSystemTwrncPreset.Theme).toBe('object');

    // Hooks should be functions
    expect(typeof DesignSystemTwrncPreset.useTheme).toBe('function');
    expect(typeof DesignSystemTwrncPreset.useTailwind).toBe('function');
  });

  it('Theme enum has correct values', () => {
    expect(DesignSystemTwrncPreset.Theme.Light).toBe('light');
    expect(DesignSystemTwrncPreset.Theme.Dark).toBe('dark');
  });

  it('can be used with destructuring imports', () => {
    const {
      ThemeProvider: ImportedThemeProvider,
      Theme: ImportedTheme,
      useTheme: ImportedUseTheme,
      useTailwind: ImportedUseTailwind,
    } = DesignSystemTwrncPreset;

    expect(ImportedThemeProvider).toBe(ThemeProvider);
    expect(ImportedTheme).toBe(Theme);
    expect(ImportedUseTheme).toBe(useTheme);
    expect(ImportedUseTailwind).toBe(useTailwind);
  });

  it('maintains referential equality for exports', () => {
    // Multiple imports should reference the same objects
    const firstImport = DesignSystemTwrncPreset.ThemeProvider;
    const secondImport = DesignSystemTwrncPreset.ThemeProvider;

    expect(firstImport).toBe(secondImport);
  });
});
