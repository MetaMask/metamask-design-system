import {
  getDesignTokenVariables,
  collectCssVariables,
} from '../scripts/testUtils';
import { shadows, shadowColors } from './shadows';

describe('Shadows Preset', () => {
  // Collect all CSS variables used in the 'shadows' object
  const usedVariables = collectCssVariables({ ...shadows, ...shadowColors });

  /**
   * Test to ensure that all CSS variables used in the 'shadows' object
   * are defined in the @metamask/design-tokens package.
   */
  it('should use only shadow color and size CSS variables that exist in @metamask/design-tokens', async () => {
    // Retrieve all design token variables that start with '--color-shadow' and '--shadow-size'
    const designTokens = await getDesignTokenVariables([
      '--color-shadow',
      '--shadow-size',
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
   * design-tokens package that are not used in the 'shadows' object.
   */
  it('should not have unused shadow color and size CSS variables in @metamask/design-tokens', async () => {
    // Retrieve all design token variables that start with '--color-shadow' and '--shadow-size'
    const designTokens = await getDesignTokenVariables([
      '--color-shadow',
      '--shadow-size',
    ]);

    // Create a set for used variables for efficient lookup
    const usedSet = new Set(usedVariables);

    // Identify design token variables that are neither used nor ignored
    const unusedVariables = Array.from(designTokens).filter(
      (varName) => !usedSet.has(varName),
    );

    // Expect no unused variables
    expect(unusedVariables).toHaveLength(0);
  });
});
