/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { fontSizes } from './fontSizes';

describe('Font Size', () => {
  it('js tokens for fontSize1 matches figma tokens fontSize0', () => {
    expect(fontSizes.fontSize1.toString()).toStrictEqual(
      designTokens.global.fontSize[0].value,
    );
  });

  it('js tokens for fontSize2 matches figma tokens fontSize1', () => {
    expect(fontSizes.fontSize2.toString()).toStrictEqual(
      designTokens.global.fontSize[1].value,
    );
  });

  it('js tokens for fontSize3 matches figma tokens fontSize2', () => {
    expect(fontSizes.fontSize3.toString()).toStrictEqual(
      designTokens.global.fontSize[2].value,
    );
  });

  it('js tokens for fontSize4 matches figma tokens fontSize3', () => {
    expect(fontSizes.fontSize4.toString()).toStrictEqual(
      designTokens.global.fontSize[3].value,
    );
  });

  it('js tokens for fontSize5 matches figma tokens fontSize4', () => {
    expect(fontSizes.fontSize5.toString()).toStrictEqual(
      designTokens.global.fontSize[4].value,
    );
  });

  it('js tokens for fontSize6 matches figma tokens fontSize5', () => {
    expect(fontSizes.fontSize6.toString()).toStrictEqual(
      designTokens.global.fontSize[5].value,
    );
  });

  it('js tokens for fontSize7 matches figma tokens fontSize6', () => {
    expect(fontSizes.fontSize7.toString()).toStrictEqual(
      designTokens.global.fontSize[6].value,
    );
  });
});
