import { typographyTailwindConfig } from './typography';
import type { TypographyVariant } from './typography.types';

// Mock the design tokens to ensure consistent testing
jest.mock('@metamask/design-tokens', () => ({
  typography: {
    sDisplayLG: {
      fontSize: 48,
      lineHeight: 56,
      letterSpacing: 0,
      fontWeight: '700',
    },
    sDisplayMD: {
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: 0,
      fontWeight: '700',
    },
    sHeadingLG: {
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 0,
      fontWeight: '700',
    },
    sHeadingMD: {
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: 0,
      fontWeight: '700',
    },
    sHeadingSM: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,
      fontWeight: '700',
    },
    sBodyLGMedium: {
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: 0,
      fontWeight: '500',
    },
    sBodyMD: {
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0,
      fontWeight: '400',
    },
    sBodySM: {
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0,
      fontWeight: '400',
    },
    sBodyXS: {
      fontSize: 10,
      lineHeight: 12,
      letterSpacing: 0,
      fontWeight: '400',
    },
  },
}));

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
          expect(typeof fontSize[0]).toBe('string'); // fontSize value
          expect(typeof fontSize[1]).toBe('object'); // style properties

          const styleProperties = fontSize[1];
          expect(styleProperties).toHaveProperty('lineHeight');
          expect(styleProperties).toHaveProperty('letterSpacing');
          expect(styleProperties).toHaveProperty('fontWeight');
        });
      });

      it('has expected font size values', () => {
        expect(typographyTailwindConfig.fontSize['display-lg'][0]).toBe('48');
        expect(typographyTailwindConfig.fontSize['display-md'][0]).toBe('32');
        expect(typographyTailwindConfig.fontSize['heading-lg'][0]).toBe('24');
        expect(typographyTailwindConfig.fontSize['heading-md'][0]).toBe('18');
        expect(typographyTailwindConfig.fontSize['heading-sm'][0]).toBe('16');
        expect(typographyTailwindConfig.fontSize['body-lg'][0]).toBe('18');
        expect(typographyTailwindConfig.fontSize['body-md'][0]).toBe('14');
        expect(typographyTailwindConfig.fontSize['body-sm'][0]).toBe('12');
        expect(typographyTailwindConfig.fontSize['body-xs'][0]).toBe('10');
      });

      it('has line heights with px units', () => {
        expectedVariants.forEach((variant) => {
          const lineHeight =
            typographyTailwindConfig.fontSize[variant][1].lineHeight;
          expect(lineHeight).toMatch(/\d+px$/);
        });

        expect(
          typographyTailwindConfig.fontSize['display-lg'][1].lineHeight,
        ).toBe('56px');
        expect(
          typographyTailwindConfig.fontSize['display-md'][1].lineHeight,
        ).toBe('40px');
        expect(typographyTailwindConfig.fontSize['body-md'][1].lineHeight).toBe(
          '20px',
        );
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

      it('has expected letter spacing values', () => {
        expectedVariants.forEach((variant) => {
          const letterSpacing = typographyTailwindConfig.letterSpacing[variant];
          expect(letterSpacing).toBe('0');
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
          expect(lineHeight).toMatch(/^\d+px$/);
        });
      });

      it('has expected line height values', () => {
        expect(typographyTailwindConfig.lineHeight['display-lg']).toBe('56px');
        expect(typographyTailwindConfig.lineHeight['display-md']).toBe('40px');
        expect(typographyTailwindConfig.lineHeight['heading-lg']).toBe('32px');
        expect(typographyTailwindConfig.lineHeight['heading-md']).toBe('24px');
        expect(typographyTailwindConfig.lineHeight['heading-sm']).toBe('24px');
        expect(typographyTailwindConfig.lineHeight['body-lg']).toBe('24px');
        expect(typographyTailwindConfig.lineHeight['body-md']).toBe('20px');
        expect(typographyTailwindConfig.lineHeight['body-sm']).toBe('16px');
        expect(typographyTailwindConfig.lineHeight['body-xs']).toBe('12px');
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

      expect(fontSizeVariants.sort()).toEqual(lineHeightVariants.sort());
      expect(fontSizeVariants.sort()).toEqual(letterSpacingVariants.sort());
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
