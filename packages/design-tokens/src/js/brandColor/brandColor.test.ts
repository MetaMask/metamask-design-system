/* eslint-disable @typescript-eslint/no-require-imports */
import { brandColor } from './brandColor';

const designTokens = require('../../figma/brandColors.json');

describe('Brand Color', () => {
  Object.entries(brandColor).forEach(([key, value]) => {
    const colorFamily = key.replace(/\d+.*$/u, ''); // Extracts 'grey' from 'grey000'
    const shadeMatch = key.match(/\d+/gu); // Extracts ['000'] from 'grey000'

    // Test base color families without numeric shades
    if (!shadeMatch?.[0]) {
      describe(`${colorFamily.toUpperCase()} `, () => {
        it(`js tokens for ${key} matches figma brandColor ${colorFamily}`, () => {
          // eslint-disable-next-line jest/no-conditional-in-test
          const tokenValue = designTokens[colorFamily]?.value ?? '';
          expect(value.toLowerCase()).toStrictEqual(tokenValue.toLowerCase());
        });
      });
      return;
    }

    // Test color families with numeric shades
    const shadeKey = shadeMatch[0]; // Ensures there's a valid shade key

    describe(`${colorFamily.toUpperCase()} ${shadeKey}`, () => {
      it(`js tokens for ${key} matches figma brandColor ${colorFamily}${shadeKey}`, () => {
        // eslint-disable-next-line jest/no-conditional-in-test
        const tokenValue = designTokens[colorFamily][shadeKey]?.value ?? '';
        expect(value.toLowerCase()).toStrictEqual(tokenValue.toLowerCase());
      });
    });
  });
});
