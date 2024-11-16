/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { fontWeights } from './fontWeights';

const designTokens = require('../../figma/tokens.json');

describe('Font Size', () => {
  it('euclid-circular-b-0 should equal Medium / 500', () => {
    expect(designTokens.global.fontWeights['euclid-circular-b-0'].value).toBe(
      'Medium',
    );
    expect(fontWeights.medium).toBe('500');
  });

  it('euclid-circular-b-1 should equal Bold / 700', () => {
    expect(designTokens.global.fontWeights['euclid-circular-b-1'].value).toBe(
      'Bold',
    );
    expect(fontWeights.bold).toBe('700');
  });

  it('euclid-circular-b-1 should equal Regular / 400', () => {
    expect(designTokens.global.fontWeights['euclid-circular-b-2'].value).toBe(
      'Regular',
    );
    expect(fontWeights.regular).toBe('400');
  });
});
