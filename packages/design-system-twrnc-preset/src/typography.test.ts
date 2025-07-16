import { typographyTailwindConfig } from './typography';
import type { TypographyVariant } from './typography.types';

describe('typography', () => {
  describe('typographyTailwindConfig', () => {
    it('has all required properties', () => {
      expect(typographyTailwindConfig).toHaveProperty('fontSize');
      expect(typographyTailwindConfig).toHaveProperty('fontFamily');
      expect(typographyTailwindConfig).toHaveProperty('letterSpacing');
      expect(typographyTailwindConfig).toHaveProperty('lineHeight');
    });

    describe('fontSize', () => {
      const expectedVariants: TypographyVariant[] = [
        'display-lg',
        'display-md',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'body-xs',
      ];

      it('contains all typography variants', () => {
        expectedVariants.forEach((variant) => {
          expect(typographyTailwindConfig.fontSize).toHaveProperty(variant);
        });
      });

      it('has correct structure for each font size variant', () => {
        expectedVariants.forEach((variant) => {
          const fontSize = typographyTailwindConfig.fontSize[variant];

          expect(Array.isArray(fontSize)).toBe(true);
          expect(fontSize).toHaveLength(2);
          expect(typeof fontSize[0]).toBe('string');
          expect(typeof fontSize[1]).toBe('object');

          const styleProperties = fontSize[1];
          expect(styleProperties).toHaveProperty('lineHeight');
          expect(styleProperties).toHaveProperty('letterSpacing');
          expect(styleProperties).toHaveProperty('fontWeight');
        });
      });

      it('has expected font size values from actual design tokens', () => {
        const { fontSize } = typographyTailwindConfig;

        expectedVariants.forEach((variant) => {
          const [fontSizeValue] = fontSize[variant];
          expect(fontSizeValue).toMatch(/^\d+$/u);
          expect(parseInt(fontSizeValue, 10)).toBeGreaterThan(0);
        });

        expect(parseInt(fontSize['display-lg'][0], 10)).toBeGreaterThan(32);
        expect(parseInt(fontSize['body-xs'][0], 10)).toBeLessThan(16);
      });

      it('has line heights with px units', () => {
        expectedVariants.forEach((variant) => {
          const { lineHeight } = typographyTailwindConfig.fontSize[variant][1];
          expect(lineHeight).toMatch(/\d+px$/u);

          const numericValue = parseInt(lineHeight.replace('px', ''), 10);
          expect(numericValue).toBeGreaterThan(0);
        });
      });
    });

    describe('fontFamily', () => {
      const expectedFontFamilies = [
        'default-regular',
        'default-regular-italic',
        'default-medium',
        'default-medium-italic',
        'default-bold',
        'default-bold-italic',
        'accent-regular',
        'accent-medium',
        'accent-bold',
        'hero-regular',
      ];

      it('contains all required font families', () => {
        expectedFontFamilies.forEach((fontFamily) => {
          expect(typographyTailwindConfig.fontFamily).toHaveProperty(
            fontFamily,
          );
          expect(
            typeof typographyTailwindConfig.fontFamily[
              fontFamily as keyof typeof typographyTailwindConfig.fontFamily
            ],
          ).toBe('string');
        });
      });

      it('has correct MetaMask font family values', () => {
        expect(typographyTailwindConfig.fontFamily['default-regular']).toBe(
          'CentraNo1-Book',
        );
        expect(
          typographyTailwindConfig.fontFamily['default-regular-italic'],
        ).toBe('CentraNo1-BookItalic');
        expect(typographyTailwindConfig.fontFamily['default-medium']).toBe(
          'CentraNo1-Medium',
        );
        expect(
          typographyTailwindConfig.fontFamily['default-medium-italic'],
        ).toBe('CentraNo1-MediumItalic');
        expect(typographyTailwindConfig.fontFamily['default-bold']).toBe(
          'CentraNo1-Bold',
        );
        expect(typographyTailwindConfig.fontFamily['default-bold-italic']).toBe(
          'CentraNo1-BoldItalic',
        );
        expect(typographyTailwindConfig.fontFamily['accent-regular']).toBe(
          'MMSans-Regular',
        );
        expect(typographyTailwindConfig.fontFamily['accent-medium']).toBe(
          'MMSans-Medium',
        );
        expect(typographyTailwindConfig.fontFamily['accent-bold']).toBe(
          'MMSans-Bold',
        );
        expect(typographyTailwindConfig.fontFamily['hero-regular']).toBe(
          'MMPoly-Regular',
        );
      });
    });

    describe('letterSpacing', () => {
      const expectedVariants: TypographyVariant[] = [
        'display-lg',
        'display-md',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'body-xs',
      ];

      it('contains all typography variants', () => {
        expectedVariants.forEach((variant) => {
          expect(typographyTailwindConfig.letterSpacing).toHaveProperty(
            variant,
          );
          expect(typeof typographyTailwindConfig.letterSpacing[variant]).toBe(
            'string',
          );
        });
      });

      it('has valid letter spacing values from actual design tokens', () => {
        expectedVariants.forEach((variant) => {
          const letterSpacing = typographyTailwindConfig.letterSpacing[variant];
          expect(letterSpacing).toMatch(/^-?\d*\.?\d+$/u);
        });
      });
    });

    describe('lineHeight', () => {
      const expectedVariants: TypographyVariant[] = [
        'display-lg',
        'display-md',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'body-xs',
      ];

      it('contains all typography variants', () => {
        expectedVariants.forEach((variant) => {
          expect(typographyTailwindConfig.lineHeight).toHaveProperty(variant);
          expect(typeof typographyTailwindConfig.lineHeight[variant]).toBe(
            'string',
          );
        });
      });

      it('has line heights with px units', () => {
        expectedVariants.forEach((variant) => {
          const lineHeight = typographyTailwindConfig.lineHeight[variant];
          expect(lineHeight).toMatch(/^\d+px$/u);
        });
      });

      it('has reasonable line height values from actual design tokens', () => {
        expectedVariants.forEach((variant) => {
          const lineHeight = typographyTailwindConfig.lineHeight[variant];
          const numericValue = parseInt(lineHeight.replace('px', ''), 10);

          expect(numericValue).toBeGreaterThan(0);
          expect(numericValue).toBeLessThan(200);
        });

        const displayLgHeight = parseInt(
          typographyTailwindConfig.lineHeight['display-lg'].replace('px', ''),
          10,
        );
        const bodyXsHeight = parseInt(
          typographyTailwindConfig.lineHeight['body-xs'].replace('px', ''),
          10,
        );
        expect(displayLgHeight).toBeGreaterThan(bodyXsHeight);
      });
    });

    it('maintains consistency between fontSize and lineHeight variants', () => {
      const fontSizeVariants = Object.keys(typographyTailwindConfig.fontSize);
      const lineHeightVariants = Object.keys(
        typographyTailwindConfig.lineHeight,
      );
      const letterSpacingVariants = Object.keys(
        typographyTailwindConfig.letterSpacing,
      );

      expect(fontSizeVariants.sort()).toStrictEqual(lineHeightVariants.sort());
      expect(fontSizeVariants.sort()).toStrictEqual(
        letterSpacingVariants.sort(),
      );
    });

    it('has consistent line height values between fontSize and lineHeight objects', () => {
      const variants: TypographyVariant[] = [
        'display-lg',
        'display-md',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'body-lg',
        'body-md',
        'body-sm',
        'body-xs',
      ];

      variants.forEach((variant) => {
        const fontSizeLineHeight =
          typographyTailwindConfig.fontSize[variant][1].lineHeight;
        const standaloneLineHeight =
          typographyTailwindConfig.lineHeight[variant];

        expect(fontSizeLineHeight).toBe(standaloneLineHeight);
      });
    });
  });
});
