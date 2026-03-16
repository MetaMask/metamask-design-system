/* eslint-disable @typescript-eslint/no-require-imports */
import { readFileSync } from 'fs';
import path from 'path';
import { parse } from 'postcss';

// Use require() to bypass TS rootDir restriction for cross-package source imports.
// Jest resolves these at runtime via moduleNameMapper.
const { colors } = require('../../../design-system-tailwind-preset/src/colors');
const {
  typography,
} = require('../../../design-system-tailwind-preset/src/typography');

// Inlined to avoid importing tailwindcss/plugin from shadows.ts.
// Keep in sync with design-system-tailwind-preset/src/shadows.ts
const v3Shadows: Record<string, string> = {
  xs: 'var(--shadow-size-xs) var(--shadow-color, var(--color-shadow-default))',
  sm: 'var(--shadow-size-sm) var(--shadow-color, var(--color-shadow-default))',
  md: 'var(--shadow-size-md) var(--shadow-color, var(--color-shadow-default))',
  lg: 'var(--shadow-size-lg) var(--shadow-color, var(--color-shadow-default))',
};

const v3ShadowColors: Record<string, string> = {
  default: 'var(--color-shadow-default)',
  primary: 'var(--color-shadow-primary)',
  error: 'var(--color-shadow-error)',
};

type ParsedTheme = {
  utilities: Map<string, Record<string, string>>;
  themeVars: Map<string, string>;
};

function parseThemeCss(): ParsedTheme {
  const cssPath = path.resolve(__dirname, 'theme.css');
  const css = readFileSync(cssPath, 'utf-8');
  const root = parse(css);

  const utilities = new Map<string, Record<string, string>>();
  const themeVars = new Map<string, string>();

  root.walk((node) => {
    if (node.type === 'atrule' && node.name === 'utility') {
      const declarations: Record<string, string> = {};
      node.walkDecls((decl) => {
        declarations[decl.prop] = decl.important
          ? `${decl.value} !important`
          : decl.value;
      });
      utilities.set(node.params, declarations);
    }

    if (node.type === 'atrule' && node.name === 'theme') {
      node.walkDecls((decl) => {
        themeVars.set(decl.prop, decl.value);
      });
    }
  });

  return { utilities, themeVars };
}

function flattenColors(
  obj: Record<string, unknown>,
  prefix = '',
): [string, string][] {
  const result: [string, string][] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullPath = prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'string') {
      result.push([fullPath, value]);
    } else if (typeof value === 'object' && value !== null) {
      result.push(...flattenColors(value as Record<string, unknown>, fullPath));
    }
  }
  return result;
}

describe('Tailwind v4 theme.css parity with v3 preset', () => {
  const { utilities, themeVars } = parseThemeCss();

  describe('Typography: fontSize → text-* @utility', () => {
    it.each(Object.entries(typography.fontSize))(
      'text-%s exists with correct font-size value',
      (name, value) => {
        const util = utilities.get(`text-${name}`);
        expect(util).toBeDefined();
        expect(util?.['font-size']).toBe(value);
      },
    );
  });

  describe('Typography: lineHeight → leading-* @utility', () => {
    it.each(Object.entries(typography.lineHeight))(
      'leading-%s exists with correct line-height value',
      (name, value) => {
        const util = utilities.get(`leading-${name}`);
        expect(util).toBeDefined();
        expect(util?.['line-height']).toBe(value);
      },
    );
  });

  describe('Typography: letterSpacing → tracking-* @utility', () => {
    it.each(Object.entries(typography.letterSpacing))(
      'tracking-%s exists with correct letter-spacing value',
      (name, value) => {
        const util = utilities.get(`tracking-${name}`);
        expect(util).toBeDefined();
        expect(util?.['letter-spacing']).toBe(value);
      },
    );
  });

  describe('Typography: fontWeight → font-* @utility', () => {
    it.each(Object.entries(typography.fontWeight))(
      'font-%s exists with correct font-weight value',
      (name, value) => {
        const util = utilities.get(`font-${name}`);
        expect(util).toBeDefined();
        expect(util?.['font-weight']).toBe(value);
      },
    );
  });

  describe('Typography: fontFamily → font-* @utility', () => {
    // v4 drops font-sans in favor of font-default
    const v4FontFamilyIgnoreList = ['sans'];
    const entries = Object.entries(typography.fontFamily).filter(
      ([name]) => !v4FontFamilyIgnoreList.includes(name),
    );

    it.each(entries)(
      'font-%s exists with correct font-family value',
      (name, value) => {
        const util = utilities.get(`font-${name}`);
        expect(util).toBeDefined();
        expect(util?.['font-family']).toBe(value);
      },
    );
  });

  describe('Colors: v3 nested colors → @theme --color-* variables', () => {
    it.each(flattenColors(colors))(
      '--color-%s exists in @theme',
      (colorPath) => {
        expect(themeVars.has(`--color-${colorPath}`)).toBe(true);
      },
    );
  });

  describe('Colors: background shortcuts → bg-* @utility', () => {
    it.each(Object.entries(colors.background))(
      'bg-%s exists with correct background-color value',
      (name, value) => {
        const util = utilities.get(`bg-${name}`);
        expect(util).toBeDefined();
        expect(util?.['background-color']).toBe(value);
      },
    );
  });

  describe('Colors: text shortcuts → text-* @utility', () => {
    it.each(Object.entries(colors.text))(
      'text-%s exists with correct color value',
      (name, value) => {
        const util = utilities.get(`text-${name}`);
        expect(util).toBeDefined();
        expect(util?.color).toBe(value);
      },
    );
  });

  describe('Colors: border shortcuts → border-* @utility', () => {
    it.each(Object.entries(colors.border))(
      'border-%s exists with correct border-color value',
      (name, value) => {
        const util = utilities.get(`border-${name}`);
        expect(util).toBeDefined();
        expect(util?.['border-color']).toBe(value);
      },
    );
  });

  describe('Shadows: v3 sizes → @theme --box-shadow-* variables', () => {
    it.each(Object.entries(v3Shadows))(
      '--box-shadow-%s exists in @theme with correct value',
      (name, value) => {
        const varName = `--box-shadow-${name}`;
        expect(themeVars.has(varName)).toBe(true);
        const normalize = (s: string) => s.replace(/\s+/gu, ' ').trim();
        expect(normalize(themeVars.get(varName) ?? '')).toBe(normalize(value));
      },
    );
  });

  describe('Shadows: v3 shadow colors → shadow-* @utility', () => {
    it.each(Object.entries(v3ShadowColors))(
      'shadow-%s exists with correct --shadow-color value',
      (name, value) => {
        const util = utilities.get(`shadow-${name}`);
        expect(util).toBeDefined();
        expect(util?.['--shadow-color']).toBe(`${value} !important`);
      },
    );
  });

  describe('Completeness: every @utility traces to v3 preset', () => {
    const expectedUtilityNames = new Set<string>();

    for (const name of Object.keys(typography.fontSize)) {
      expectedUtilityNames.add(`text-${name}`);
    }
    for (const name of Object.keys(typography.lineHeight)) {
      expectedUtilityNames.add(`leading-${name}`);
    }
    for (const name of Object.keys(typography.letterSpacing)) {
      expectedUtilityNames.add(`tracking-${name}`);
    }
    for (const name of Object.keys(typography.fontWeight)) {
      expectedUtilityNames.add(`font-${name}`);
    }
    for (const name of Object.keys(typography.fontFamily)) {
      expectedUtilityNames.add(`font-${name}`);
    }
    for (const name of Object.keys(colors.background)) {
      expectedUtilityNames.add(`bg-${name}`);
    }
    for (const name of Object.keys(colors.text)) {
      expectedUtilityNames.add(`text-${name}`);
    }
    for (const name of Object.keys(colors.border)) {
      expectedUtilityNames.add(`border-${name}`);
    }
    for (const name of Object.keys(v3ShadowColors)) {
      expectedUtilityNames.add(`shadow-${name}`);
    }

    it('no unaccounted @utility directives in theme.css', () => {
      const unaccounted = [...utilities.keys()].filter(
        (name) => !expectedUtilityNames.has(name),
      );
      expect(unaccounted).toStrictEqual([]);
    });
  });

  describe('Completeness: every @theme --color-* traces to v3 colors', () => {
    const v3ColorVarNames = new Set(
      flattenColors(colors).map(([colorPath]) => `--color-${colorPath}`),
    );

    const v4OnlyColors = new Set([
      '--color-inherit',
      '--color-current',
      '--color-transparent',
      '--color-black',
      '--color-white',
      '--color-flask-default',
      '--color-flask-inverse',
      ...Object.keys(v3ShadowColors).map((name) => `--color-shadow-${name}`),
    ]);

    it('no unaccounted --color-* variables in @theme', () => {
      const themeColorVars = [...themeVars.keys()].filter((name) =>
        name.startsWith('--color-'),
      );
      const unaccounted = themeColorVars.filter(
        (name) => !v3ColorVarNames.has(name) && !v4OnlyColors.has(name),
      );
      expect(unaccounted).toStrictEqual([]);
    });
  });
});
