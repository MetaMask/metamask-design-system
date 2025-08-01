import {
  getDesignTokenVariables,
  collectCssVariables,
} from '../scripts/testUtils';

import { typography } from './typography';

describe('Typography', () => {
  // Collect all CSS variables used in the 'typography' object
  const usedVariables = collectCssVariables(typography);

  // Ignored CSS variables
  const ignoreList: string[] = [
    '--typography-s-body-lg-regular-font-size',
    '--typography-s-body-lg-regular-line-height',
    '--typography-s-body-lg-regular-font-weight',
    '--typography-s-body-lg-regular-letter-spacing',
    '--typography-s-body-md-bold-font-size',
    '--typography-s-body-md-bold-line-height',
    '--typography-s-body-md-bold-font-weight',
    '--typography-s-body-md-bold-letter-spacing',
    '--typography-s-body-md-medium-font-size',
    '--typography-s-body-md-medium-line-height',
    '--typography-s-body-md-medium-font-weight',
    '--typography-s-body-md-medium-letter-spacing',
    '--typography-s-body-sm-bold-font-size',
    '--typography-s-body-sm-bold-line-height',
    '--typography-s-body-sm-bold-font-weight',
    '--typography-s-body-sm-bold-letter-spacing',
    '--typography-s-body-sm-medium-font-size',
    '--typography-s-body-sm-medium-line-height',
    '--typography-s-body-sm-medium-font-weight',
    '--typography-s-body-sm-medium-letter-spacing',
    '--typography-s-body-xs-medium-font-size',
    '--typography-s-body-xs-medium-line-height',
    '--typography-s-body-xs-medium-font-weight',
    '--typography-s-body-xs-medium-letter-spacing',
    '--typography-l-body-md-bold-font-size',
    '--typography-l-body-md-bold-line-height',
    '--typography-l-body-md-bold-font-weight',
    '--typography-l-body-md-bold-letter-spacing',
    '--typography-l-body-md-medium-font-size',
    '--typography-l-body-md-medium-line-height',
    '--typography-l-body-md-medium-font-weight',
    '--typography-l-body-md-medium-letter-spacing',
    '--typography-l-body-sm-bold-font-size',
    '--typography-l-body-sm-bold-line-height',
    '--typography-l-body-sm-bold-font-weight',
    '--typography-l-body-sm-bold-letter-spacing',
    '--typography-l-body-sm-medium-font-size',
    '--typography-l-body-sm-medium-line-height',
    '--typography-l-body-sm-medium-font-weight',
    '--typography-l-body-sm-medium-letter-spacing',
    '--typography-l-body-xs-medium-font-size',
    '--typography-l-body-xs-medium-line-height',
    '--typography-l-body-xs-medium-font-weight',
    '--typography-l-body-xs-medium-letter-spacing',
    '--font-weight-regular',
    '--typography-s-body-lg-medium-font-size',
    '--typography-s-body-lg-medium-line-height',
    '--typography-s-body-lg-medium-font-weight',
    '--typography-s-body-lg-medium-letter-spacing',
    '--typography-l-body-lg-medium-font-weight',
    '--typography-s-display-lg-font-weight',
    '--typography-s-display-md-font-weight',
    '--typography-s-heading-lg-font-weight',
    '--typography-s-heading-md-font-weight',
    '--typography-s-heading-sm-font-weight',
    '--typography-s-body-md-font-weight',
    '--typography-s-body-sm-font-weight',
    '--typography-s-body-xs-font-weight',
    '--typography-l-display-lg-font-weight',
    '--typography-l-display-md-font-weight',
    '--typography-l-heading-lg-font-weight',
    '--typography-l-heading-md-font-weight',
    '--typography-l-heading-sm-font-weight',
    '--typography-l-body-md-font-weight',
    '--typography-l-body-sm-font-weight',
    '--typography-l-body-xs-font-weight',
    '--typography-s-page-heading-font-weight',
    '--typography-l-page-heading-font-weight',
    '--typography-s-section-heading-font-weight',
    '--typography-l-section-heading-font-weight',
    '--typography-s-button-label-md-font-weight',
    '--typography-l-button-label-md-font-weight',
    '--typography-s-button-label-lg-font-weight',
    '--typography-l-button-label-lg-font-weight',
    '--typography-s-amount-display-lg-font-weight',
    '--typography-l-amount-display-lg-font-weight',
  ];

  /**
   * Test to ensure that all CSS variables used in the 'typography' object
   * are defined in the @metamask/design-tokens package.
   */
  it('should use only CSS variables that exist in @metamask/design-tokens', async () => {
    // Retrieve all design token variables that start with '--typography' or '--font-weight'
    const designTokens = await getDesignTokenVariables([
      '--typography',
      '--font-weight',
      '--font-family',
    ]);

    // Identify any used variables that are missing from the design tokens
    const missingVariables = usedVariables.filter(
      (varName) => !designTokens.has(varName),
    );

    // Expect no missing variables
    expect(missingVariables).toHaveLength(0);
  });

  /**
   * Test to ensure that there are no unused CSS variables in the
   * design-tokens package that are not used in the 'typography' object,
   * excluding those in the ignore list.
   */
  it('should not have unused CSS variables in @metamask/design-tokens', async () => {
    // Retrieve all design token variables that start with '--typography'
    const designTokens = await getDesignTokenVariables(['--typography']);

    // Create sets for used variables and ignored variables for efficient lookup
    const usedSet = new Set(usedVariables);
    const ignoredSet = new Set(ignoreList);

    // Filter out variables that are either used or explicitly ignored
    const unusedVariables = Array.from(designTokens).filter(
      (varName) => !usedSet.has(varName) && !ignoredSet.has(varName), // eslint-disable-line jest/no-conditional-in-test -- Legitimate data processing for test setup
    );

    // Expect no unused variables
    expect(unusedVariables).toHaveLength(0);
  });
});
