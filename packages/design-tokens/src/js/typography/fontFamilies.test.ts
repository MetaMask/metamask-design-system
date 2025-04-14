/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { fontFamilies } from './fontFamilies';

describe('Font Families', () => {
  it('js tokens for font family default matches figma tokens', () => {
    expect(fontFamilies.default).toStrictEqual(
      designTokens.global.fontFamilies.default.value,
    );
  });

  it('js tokens for font family accent matches figma tokens', () => {
    expect(fontFamilies.accent).toStrictEqual(
      designTokens.global.fontFamilies.accent.value,
    );
  });

  it('js tokens for font family hero matches figma tokens', () => {
    expect(fontFamilies.hero).toStrictEqual(
      designTokens.global.fontFamilies.hero.value,
    );
  });
});
