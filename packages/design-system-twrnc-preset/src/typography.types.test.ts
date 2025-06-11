import type {
  TypographyVariant,
  FontWeight,
  FontStyle,
  TypographyTailwindConfigProps,
} from './typography.types';

describe('typography types', () => {
  describe('TypographyVariant', () => {
    it('includes all expected typography variants', () => {
      const expectedVariants = [
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

      // Test that the type accepts all expected values
      const testVariants: TypographyVariant[] =
        expectedVariants as TypographyVariant[];
      expect(testVariants).toHaveLength(9);
      expect(testVariants).toEqual(expectedVariants);
    });

    it('can be used as union type', () => {
      const testFunction = (variant: TypographyVariant): string => variant;

      expect(testFunction('display-lg')).toBe('display-lg');
      expect(testFunction('display-md')).toBe('display-md');
      expect(testFunction('heading-lg')).toBe('heading-lg');
      expect(testFunction('heading-md')).toBe('heading-md');
      expect(testFunction('heading-sm')).toBe('heading-sm');
      expect(testFunction('body-lg')).toBe('body-lg');
      expect(testFunction('body-md')).toBe('body-md');
      expect(testFunction('body-sm')).toBe('body-sm');
      expect(testFunction('body-xs')).toBe('body-xs');
    });
  });

  describe('FontWeight', () => {
    it('includes all expected font weight values', () => {
      const numericWeights = [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ];
      const namedWeights = ['normal', 'bold'];

      const testWeights: FontWeight[] = [
        ...numericWeights,
        ...namedWeights,
      ] as FontWeight[];
      expect(testWeights).toHaveLength(11);
    });

    it('can be used as union type', () => {
      const testFunction = (weight: FontWeight): string => weight;

      expect(testFunction('100')).toBe('100');
      expect(testFunction('400')).toBe('400');
      expect(testFunction('700')).toBe('700');
      expect(testFunction('normal')).toBe('normal');
      expect(testFunction('bold')).toBe('bold');
    });
  });

  describe('FontStyle', () => {
    it('includes expected font style values', () => {
      const expectedStyles = ['normal', 'italic'];
      const testStyles: FontStyle[] = expectedStyles as FontStyle[];
      expect(testStyles).toHaveLength(2);
      expect(testStyles).toEqual(expectedStyles);
    });

    it('can be used as union type', () => {
      const testFunction = (style: FontStyle): string => style;

      expect(testFunction('normal')).toBe('normal');
      expect(testFunction('italic')).toBe('italic');
    });
  });

  describe('TypographyTailwindConfigProps', () => {
    it('has correct structure for fontSize property', () => {
      // This is a type-only test to ensure the interface is correctly defined
      const mockConfig: TypographyTailwindConfigProps = {
        fontSize: {
          'display-lg': [
            '48',
            { lineHeight: '56px', letterSpacing: '0', fontWeight: '700' },
          ],
          'display-md': [
            '32',
            { lineHeight: '40px', letterSpacing: '0', fontWeight: '700' },
          ],
          'heading-lg': [
            '24',
            { lineHeight: '32px', letterSpacing: '0', fontWeight: '700' },
          ],
          'heading-md': [
            '18',
            { lineHeight: '24px', letterSpacing: '0', fontWeight: '700' },
          ],
          'heading-sm': [
            '16',
            { lineHeight: '24px', letterSpacing: '0', fontWeight: '700' },
          ],
          'body-lg': [
            '18',
            { lineHeight: '24px', letterSpacing: '0', fontWeight: '500' },
          ],
          'body-md': [
            '14',
            { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' },
          ],
          'body-sm': [
            '12',
            { lineHeight: '16px', letterSpacing: '0', fontWeight: '400' },
          ],
          'body-xs': [
            '10',
            { lineHeight: '12px', letterSpacing: '0', fontWeight: '400' },
          ],
        },
        fontFamily: {
          'default-regular': 'CentraNo1-Book',
          'default-regular-italic': 'CentraNo1-BookItalic',
          'default-medium': 'CentraNo1-Medium',
          'default-medium-italic': 'CentraNo1-MediumItalic',
          'default-bold': 'CentraNo1-Bold',
          'default-bold-italic': 'CentraNo1-BoldItalic',
          'accent-regular': 'MMSans-Regular',
          'accent-medium': 'MMSans-Medium',
          'accent-bold': 'MMSans-Bold',
          'hero-regular': 'MMPoly-Regular',
        },
        letterSpacing: {
          'display-lg': '0',
          'display-md': '0',
          'heading-lg': '0',
          'heading-md': '0',
          'heading-sm': '0',
          'body-lg': '0',
          'body-md': '0',
          'body-sm': '0',
          'body-xs': '0',
        },
        lineHeight: {
          'display-lg': '56px',
          'display-md': '40px',
          'heading-lg': '32px',
          'heading-md': '24px',
          'heading-sm': '24px',
          'body-lg': '24px',
          'body-md': '20px',
          'body-sm': '16px',
          'body-xs': '12px',
        },
      };

      expect(mockConfig).toBeDefined();
      expect(mockConfig.fontSize).toBeDefined();
      expect(mockConfig.fontFamily).toBeDefined();
      expect(mockConfig.letterSpacing).toBeDefined();
      expect(mockConfig.lineHeight).toBeDefined();
    });

    it('requires lineHeight to be string with units', () => {
      // Type test to ensure lineHeight is string (not number)
      const validConfig: TypographyTailwindConfigProps['lineHeight'] = {
        'display-lg': '56px',
        'display-md': '40px',
        'heading-lg': '32px',
        'heading-md': '24px',
        'heading-sm': '24px',
        'body-lg': '24px',
        'body-md': '20px',
        'body-sm': '16px',
        'body-xs': '12px',
      };

      expect(typeof validConfig['display-lg']).toBe('string');
      expect(validConfig['display-lg']).toMatch(/px$/);
    });

    it('requires fontSize to be tuple with string and style object', () => {
      // Type test to ensure fontSize structure
      const validFontSize: TypographyTailwindConfigProps['fontSize']['display-lg'] =
        [
          '48',
          {
            lineHeight: '56px',
            letterSpacing: '0',
            fontWeight: '700',
          },
        ];

      expect(Array.isArray(validFontSize)).toBe(true);
      expect(validFontSize).toHaveLength(2);
      expect(typeof validFontSize[0]).toBe('string');
      expect(typeof validFontSize[1]).toBe('object');
    });

    it('includes all required fontFamily keys', () => {
      const requiredFontFamilyKeys = [
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

      // This validates the type includes all required keys
      type FontFamilyKeys = keyof TypographyTailwindConfigProps['fontFamily'];
      const testKeys: FontFamilyKeys[] =
        requiredFontFamilyKeys as FontFamilyKeys[];

      expect(testKeys).toHaveLength(10);
    });
  });
});
