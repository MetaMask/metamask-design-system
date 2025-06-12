import {
  getDesignTokenVariables,
  collectCssVariables,
} from '../scripts/testUtils';

import { colors } from './colors';

describe('Color Preset', () => {
  // Collect all CSS variables used in the 'colors' object
  const usedVariables = collectCssVariables(colors);

  // Define CSS variables to ignore in the unused variables check
  const ignoreList: string[] = [
    '--color-shadow-default', // used in shadow.ts
    '--color-shadow-primary', // used in shadow.ts
    '--color-shadow-error', // used in shadow.ts
    '--color-flask-default', // not needed for tailwind
    '--color-flask-inverse', // not needed for tailwind
  ];

  /**
   * Test to ensure that all CSS variables used in the 'colors' object
   * are defined in the @metamask/design-tokens package.
   */
  it('should use only CSS variables that exist in @metamask/design-tokens', async () => {
    // Retrieve all design token variables that start with '--color'
    const designTokens = await getDesignTokenVariables(['--color']);

    // Identify any used variables that are missing from the design tokens
    const missingVariables = usedVariables.filter(
      (varName) => !designTokens.has(varName),
    );

    // Expect no missing variables
    expect(missingVariables).toHaveLength(0);
  });

  /**
   * Test to ensure that there are no unused CSS variables in the
   * design-tokens package that are not used in the 'colors' object,
   * excluding those in the ignore list.
   */
  it('should not have unused CSS variables in @metamask/design-tokens', async () => {
    // Retrieve all design token variables that start with '--color'
    const designTokens = await getDesignTokenVariables(['--color']);

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
