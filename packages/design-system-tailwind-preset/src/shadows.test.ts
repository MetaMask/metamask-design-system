import {
  getDesignTokenVariables,
  collectCssVariables,
} from '../scripts/testUtils';
import { shadows, shadowColors, shadowPlugin } from './shadows';

// Mock version of Tailwind's PluginAPI with only the methods we use (addUtilities)
type MockedPluginAPI = {
  addUtilities: jest.Mock;
};

// Define a type for the Tailwind plugin handler function
type TailwindPluginHandler = (api: MockedPluginAPI) => void;

describe('Shadows', () => {
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

  /**
   * Smoke Test: Verify that shadowPlugin is defined and has a handler function.
   */
  it('should be defined and have a handler function', () => {
    expect(shadowPlugin).toBeDefined();
    expect(shadowPlugin.handler).toBeDefined();
    expect(typeof shadowPlugin.handler).toBe('function');
  });

  /**
   * Basic Invocation Test: Ensure that the handler function executes without errors
   * and interacts with addUtilities as expected.
   */
  it('should add shadow color utilities correctly', () => {
    // Mock the addUtilities function
    const addUtilitiesMock = jest.fn();

    // Access the handler function and cast it to the defined type
    const shadowPluginHandler =
      shadowPlugin.handler as unknown as TailwindPluginHandler;

    // Execute the shadow plugin's handler with the mocked addUtilities
    shadowPluginHandler({
      addUtilities: addUtilitiesMock,
    });

    // Prepare the expected utilities
    const expectedUtilities: Record<string, Record<string, string>> = {};
    Object.entries(shadowColors).forEach(([key, value]) => {
      expectedUtilities[`.shadow-${key}`] = {
        '--shadow-color': value,
      };
    });

    // Verify that addUtilities was called with the correct utilities and options
    expect(addUtilitiesMock).toHaveBeenCalledWith(
      expect.objectContaining(expectedUtilities),
      expect.objectContaining({
        respectPrefix: false,
        respectImportant: true,
      }),
    );
  });
});
