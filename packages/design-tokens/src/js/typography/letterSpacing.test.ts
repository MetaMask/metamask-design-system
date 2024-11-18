/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { letterSpacing } from './letterSpacing';

describe('Letter Spacing', () => {
  it('js tokens for letterSpacing0 matches figma tokens letterSpacing0', () => {
    expect(letterSpacing.letterSpacing0.toString()).toStrictEqual(
      designTokens.global.letterSpacing[0].value,
    );
  });

  it('js tokens for letterSpacing1 matches figma tokens letterSpacing1', () => {
    expect(letterSpacing.letterSpacing1.toString()).toStrictEqual(
      designTokens.global.letterSpacing[1].value,
    );
  });
});
