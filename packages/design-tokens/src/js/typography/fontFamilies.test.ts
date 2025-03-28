/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { fontFamilies } from './fontFamilies';

describe('Font Families', () => {
  it('js tokens for font family centrano1 matches figma tokens', () => {
    expect(fontFamilies.centrano1).toStrictEqual(
      designTokens.global.fontFamilies.centrano1.value,
    );
  });

  it('js tokens for font family mmsans matches figma tokens', () => {
    expect(fontFamilies.mmsans).toStrictEqual(
      designTokens.global.fontFamilies.mmsans.value,
    );
  });

  it('js tokens for font family mmpoly matches figma tokens', () => {
    expect(fontFamilies.mmpoly).toStrictEqual(
      designTokens.global.fontFamilies.mmpoly.value,
    );
  });
});
