import { readFileSync } from 'fs';
import { resolve } from 'path';

const tokensPath = resolve(__dirname, '../figma/tokens.json');
const typographyCSSPath = resolve(__dirname, 'typography.css');

const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));
const typographyCSS = readFileSync(typographyCSSPath, 'utf8');

// Access the global tokens
const globalTokens = tokens.global;

// Helper function to resolve token references like $fontSize.4 to actual values
const resolveTokenValue = (value: string): string => {
  if (value.startsWith('$')) {
    const parts = value.slice(1).split('.');
    const category = parts[0];
    const key = parts[1];

    if (globalTokens[category] && globalTokens[category][key]) {
      return globalTokens[category][key].value;
    }
  }
  return value;
};

// Helper function to convert token name to CSS variable name
const tokenNameToCSSVariable = (tokenName: string): string => {
  return `--typography-${tokenName.toLowerCase().replace(/-/gu, '-')}`;
};

describe('Typography CSS', () => {
  // Test base typography values (font sizes, line heights, font weights, letter spacing)
  describe('Base Typography Values', () => {
    // Test font sizes
    describe('Font Sizes', () => {
      for (const size in globalTokens.fontSize) {
        if (Object.prototype.hasOwnProperty.call(globalTokens.fontSize, size)) {
          const variableName = `--font-size-${size}`;
          const fontSizeValue = Number(globalTokens.fontSize[size].value);
          const expectedValue = `${fontSizeValue / 16}rem`; // Convert px to rem

          it(`should have the correct value for ${variableName}`, () => {
            expect(typographyCSS).toContain(
              `${variableName}: ${expectedValue};`,
            );
          });
        }
      }
    });

    // Test line heights
    describe('Line Heights', () => {
      for (const height in globalTokens.lineHeights) {
        if (
          Object.prototype.hasOwnProperty.call(globalTokens.lineHeights, height)
        ) {
          const variableName = `--line-height-${height}`;
          const lineHeightValue = Number(
            globalTokens.lineHeights[height].value,
          );
          const expectedValue = `${lineHeightValue / 16}rem`; // Convert px to rem

          it(`should have the correct value for ${variableName}`, () => {
            expect(typographyCSS).toContain(
              `${variableName}: ${expectedValue};`,
            );
          });
        }
      }
    });

    // Test font weights
    describe('Font Weights', () => {
      for (const weight in globalTokens.fontWeights) {
        if (
          Object.prototype.hasOwnProperty.call(globalTokens.fontWeights, weight)
        ) {
          const variableName = `--font-weight-${weight}`;
          const expectedValue = globalTokens.fontWeights[weight].value;

          it(`should have the correct value for ${variableName}`, () => {
            expect(typographyCSS).toContain(
              `${variableName}: ${expectedValue};`,
            );
          });
        }
      }
    });

    // Test letter spacing
    describe('Letter Spacing', () => {
      for (const spacing in globalTokens.letterSpacing) {
        if (
          Object.prototype.hasOwnProperty.call(
            globalTokens.letterSpacing,
            spacing,
          )
        ) {
          const variableName = `--letter-spacing-${spacing}`;
          let expectedValue = globalTokens.letterSpacing[spacing].value;

          // Handle percentage values
          if (expectedValue === '0.25') {
            expectedValue = '2.5%';
          } else if (expectedValue === '0') {
            expectedValue = '0';
          }

          it(`should have the correct value for ${variableName}`, () => {
            expect(typographyCSS).toContain(
              `${variableName}: ${expectedValue};`,
            );
          });
        }
      }
    });
  });

  // Test typography scale tokens
  describe('Typography Scale Tokens', () => {
    // Get all typography tokens from the JSON
    const typographyTokens = Object.keys(globalTokens).filter(
      (key) =>
        globalTokens[key].type === 'typography' &&
        (key.startsWith('S-') || key.startsWith('L-')),
    );

    typographyTokens.forEach((tokenName) => {
      const token = globalTokens[tokenName];

      describe(`${tokenName}`, () => {
        // Test font-size
        it(`should have the correct font-size for ${tokenName}`, () => {
          const fontSizeValue = Number(resolveTokenValue(token.value.fontSize));
          // Map font size value to the correct CSS variable number
          const fontSizeMap: { [key: number]: string } = {
            10: '1',
            12: '2',
            14: '3',
            16: '4',
            18: '5',
            24: '6',
            32: '7',
            40: '8',
            48: '9',
            60: '10',
          };
          const expectedValue = `var(--font-size-${fontSizeMap[fontSizeValue]})`;
          const variableName = tokenNameToCSSVariable(`${tokenName}-font-size`);

          expect(typographyCSS).toContain(`${variableName}: ${expectedValue};`);
        });

        // Test line-height
        it(`should have the correct line-height for ${tokenName}`, () => {
          const lineHeightValue = Number(
            resolveTokenValue(token.value.lineHeight),
          );
          // Map line height value to the correct CSS variable number
          const lineHeightMap: { [key: number]: string } = {
            16: '1',
            20: '2',
            22: '3',
            24: '4',
            32: '5',
            40: '6',
            50: '7',
            56: '8',
            75: '9',
          };
          const expectedValue = `var(--line-height-${lineHeightMap[lineHeightValue]})`;
          const variableName = tokenNameToCSSVariable(
            `${tokenName}-line-height`,
          );

          expect(typographyCSS).toContain(`${variableName}: ${expectedValue};`);
        });

        // Test font-weight
        it(`should have the correct font-weight for ${tokenName}`, () => {
          const fontWeightRef = token.value.fontWeight.replace(
            '$fontWeights.',
            '',
          );
          const expectedValue = `var(--font-weight-${fontWeightRef})`;
          const variableName = tokenNameToCSSVariable(
            `${tokenName}-font-weight`,
          );

          expect(typographyCSS).toContain(`${variableName}: ${expectedValue};`);
        });

        // Test letter-spacing
        it(`should have the correct letter-spacing for ${tokenName}`, () => {
          const letterSpacingRef = token.value.letterSpacing.replace(
            '$letterSpacing.',
            '',
          );
          const expectedValue = `var(--letter-spacing-${letterSpacingRef})`;
          const variableName = tokenNameToCSSVariable(
            `${tokenName}-letter-spacing`,
          );

          expect(typographyCSS).toContain(`${variableName}: ${expectedValue};`);
        });
      });
    });
  });

  // Test font families
  describe('Font Families', () => {
    const fontFamilies = {
      default: "'Geist', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      accent: "'MMSans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      hero: "'MMPoly', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    };

    Object.entries(fontFamilies).forEach(([family, expectedValue]) => {
      it(`should have the correct value for --font-family-${family}`, () => {
        // Normalize whitespace to handle multiline CSS formatting
        const normalizedCSS = typographyCSS.replace(/\s+/gu, ' ');
        const expectedDeclaration = `--font-family-${family}: ${expectedValue};`;

        expect(normalizedCSS).toContain(expectedDeclaration);
      });
    });
  });

  // Test base font size
  describe('Base Font Size', () => {
    it('should have the correct base font size', () => {
      expect(typographyCSS).toContain('--font-size-base: 16px;');
    });
  });
});
