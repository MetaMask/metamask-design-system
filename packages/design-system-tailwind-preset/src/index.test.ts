import tailwindConfig from '.';
import { colors } from './colors';
import { shadows } from './shadows';

describe('Tailwind Preset', () => {
  /**
   * Structure
   */

  it('default export is tailwindConfig', () => {
    expect(tailwindConfig).toBeDefined();
  });

  it('configuration has correct structure', () => {
    expect(tailwindConfig).toHaveProperty('content');
    expect(tailwindConfig).toHaveProperty('theme');
    expect(tailwindConfig.theme).toHaveProperty('extend');
    expect(tailwindConfig).toHaveProperty('plugins');
  });

  /**
   * Colors
   */

  it('colors are correctly imported and spread', () => {
    expect(tailwindConfig.theme?.extend?.colors).toStrictEqual(
      expect.objectContaining(colors),
    );
  });

  it('textColor function incorporates theme colors(e.g. text-primary-default, text-error-default) and text colors(e.g. text-default, text-muted)', () => {
    const textColorFn = tailwindConfig.theme?.extend?.textColor as (options: {
      theme: (path: string) => unknown;
    }) => Record<string, string>;
    const result = textColorFn({
      theme: (path: string) => (path === 'colors' ? colors : {}),
    });
    expect(result).toStrictEqual(
      expect.objectContaining({
        ...colors,
        ...colors.text,
      }),
    );
  });

  it('backgroundColor function incorporates theme colors(e.g. bg-primary-default, bg-error-default) and background colors(e.g. bg-default, bg-muted)', () => {
    const bgColorFn = tailwindConfig.theme?.extend
      ?.backgroundColor as (options: {
      theme: (path: string) => unknown;
    }) => Record<string, string>;
    const result = bgColorFn({
      theme: (path: string) => (path === 'colors' ? colors : {}),
    });
    expect(result).toStrictEqual(
      expect.objectContaining({
        ...colors,
        ...colors.background,
      }),
    );
  });

  it('borderColor function incorporates theme colors(e.g. border-primary-default, border-error-default) and border colors(e.g. border-default, border-muted)', () => {
    const borderColorFn = tailwindConfig.theme?.extend
      ?.borderColor as (options: {
      theme: (path: string) => unknown;
    }) => Record<string, string>;
    const result = borderColorFn({
      theme: (path: string) => (path === 'colors' ? colors : {}),
    });
    expect(result).toStrictEqual(
      expect.objectContaining({
        ...colors,
        ...colors.border,
      }),
    );
  });

  /**
   * Shadows
   */

  it('boxShadow is correctly defined in theme.extend', () => {
    expect(tailwindConfig.theme?.extend).toHaveProperty('boxShadow');
  });

  it('boxShadow contains all expected shadow sizes', () => {
    expect(tailwindConfig.theme?.extend?.boxShadow).toStrictEqual(
      expect.objectContaining(shadows),
    );
  });
});
