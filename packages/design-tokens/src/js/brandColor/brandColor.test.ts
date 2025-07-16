/* eslint-disable @typescript-eslint/no-require-imports */
import { brandColor } from './brandColor';

const designTokens = require('../../figma/brandColors.json');

describe('Brand Color', () => {
  // Separate base colors from shaded variants with their expected token values
  const baseColorTests: [string, string, string][] = [];
  const shadedColorTests: [string, string, string][] = [];

  Object.entries(brandColor).forEach(([key, value]) => {
    const colorFamily = key.replace(/\d+.*$/u, ''); // Extracts 'grey' from 'grey000'
    const shadeMatch = key.match(/\d+/gu); // Extracts ['000'] from 'grey000'

    if (!shadeMatch?.[0]) {
      // Base color without numeric shade
      const expectedTokenValue = designTokens[colorFamily]?.value || '';
      baseColorTests.push([key, value, expectedTokenValue]);
    } else {
      // Color with numeric shade
      const shadeKey = shadeMatch[0];
      const expectedTokenValue =
        designTokens[colorFamily]?.[shadeKey]?.value || '';
      shadedColorTests.push([key, value, expectedTokenValue]);
    }
  });

  // Test base color families without numeric shades
  describe.each(baseColorTests)(
    'Base color %s',
    (key, value, expectedTokenValue) => {
      const colorFamily = key.replace(/\d+.*$/u, '');

      it(`js tokens for ${key} matches figma brandColor ${colorFamily}`, () => {
        expect(value.toLowerCase()).toStrictEqual(
          expectedTokenValue.toLowerCase(),
        );
      });
    },
  );

  // Test color families with numeric shades
  describe.each(shadedColorTests)(
    'Shaded color %s',
    (key, value, expectedTokenValue) => {
      it(`js tokens for ${key} matches figma brandColor`, () => {
        expect(value.toLowerCase()).toStrictEqual(
          expectedTokenValue.toLowerCase(),
        );
      });
    },
  );
});
