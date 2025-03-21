/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { fontFamilies } from './fontFamilies';

describe('Font Families', () => {
  it('js tokens for font family matches figma tokens', () => {
    expect(fontFamilies.sans).toStrictEqual(
      designTokens.global.fontFamilies['centra-no1'].value,
    );
  });
});
