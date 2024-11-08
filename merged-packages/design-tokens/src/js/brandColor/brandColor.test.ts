/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { brandColor } from './brandColor';

const designTokens = require('../../figma/brandColors.json');

describe('Brand Color', () => {
  Object.entries(brandColor).forEach(([key, value]) => {
    const colorFamily = key.replace(/\d+.*$/u, ''); // Extracts 'grey' from 'grey000'
    const shadeMatch = key.match(/\d+/gu); // Extracts ['000'] from 'grey000'
    // if no numeric key is found, skip the test
    if (!shadeMatch?.[0]) {
      describe(`${colorFamily.toUpperCase()} `, () => {
        it(`js tokens for ${key} matches figma brandColor ${colorFamily}`, () => {
          const tokenValue = designTokens[colorFamily]?.value ?? '';
          expect(value.toLowerCase()).toStrictEqual(tokenValue.toLowerCase());
        });
      });
      return;
    }
    const shadeKey = shadeMatch[0]; // Ensures there's a valid shade key

    describe(`${colorFamily.toUpperCase()} ${shadeKey}`, () => {
      it(`js tokens for ${key} matches figma brandColor ${colorFamily}${shadeKey}`, () => {
        const tokenValue = designTokens[colorFamily][shadeKey]?.value ?? '';
        expect(value.toLowerCase()).toStrictEqual(tokenValue.toLowerCase());
      });
    });
  });
});
