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
    '--typography-s-heading-sm-regular-font-family',
    '--typography-s-heading-sm-regular-font-size',
    '--typography-s-heading-sm-regular-line-height',
    '--typography-s-heading-sm-regular-font-weight',
    '--typography-s-heading-sm-regular-letter-spacing',
    '--typography-l-heading-sm-regular-font-family',
    '--typography-l-heading-sm-regular-font-size',
    '--typography-l-heading-sm-regular-line-height',
    '--typography-l-heading-sm-regular-font-weight',
    '--typography-l-heading-sm-regular-letter-spacing',
  ];

  /**
   * Test to ensure that all CSS variables used in the 'typography' object
   * are defined in the @metamask/design-tokens package.
   */
  it('should use only CSS variables that exist in @metamask/design-tokens', async () => {
    // Retrieve all design token variables that start with '--typography'
    const designTokens = await getDesignTokenVariables(['--typography']);

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

    // Identify design token variables that are neither used nor ignored
    const unusedVariables = Array.from(designTokens).filter(
      (varName) => !usedSet.has(varName) && !ignoredSet.has(varName),
    );

    // Expect no unused variables
    expect(unusedVariables).toHaveLength(0);
  });
});
