/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { lineHeights } from './lineHeights';

describe('Line Height', () => {
  it('js tokens for lineHeights1 matches figma tokens lineHeights1', () => {
    expect(lineHeights.lineHeight1.toString()).toStrictEqual(
      designTokens.global.lineHeights[1].value,
    );
  });

  it('js tokens for lineHeights2 matches figma tokens lineHeights2', () => {
    expect(lineHeights.lineHeight2.toString()).toStrictEqual(
      designTokens.global.lineHeights[2].value,
    );
  });

  it('js tokens for lineHeights3 matches figma tokens lineHeights3', () => {
    expect(lineHeights.lineHeight3.toString()).toStrictEqual(
      designTokens.global.lineHeights[3].value,
    );
  });

  it('js tokens for lineHeights4 matches figma tokens lineHeights4', () => {
    expect(lineHeights.lineHeight4.toString()).toStrictEqual(
      designTokens.global.lineHeights[4].value,
    );
  });

  it('js tokens for lineHeights5 matches figma tokens lineHeights5', () => {
    expect(lineHeights.lineHeight5.toString()).toStrictEqual(
      designTokens.global.lineHeights[5].value,
    );
  });

  it('js tokens for lineHeights6 matches figma tokens lineHeights6', () => {
    expect(lineHeights.lineHeight6.toString()).toStrictEqual(
      designTokens.global.lineHeights[6].value,
    );
  });

  it('js tokens for lineHeights7 matches figma tokens lineHeights7', () => {
    expect(lineHeights.lineHeight7.toString()).toStrictEqual(
      designTokens.global.lineHeights[7].value,
    );
  });
});
