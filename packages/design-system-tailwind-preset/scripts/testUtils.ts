import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

/**
 * Parses the design-tokens stylesheet and extracts CSS variable names based on provided prefixes.
 *
 * This utility function reads the `styles.css` file from the `@metamask/design-tokens` package,
 * parses its content using PostCSS, and collects all CSS variables that match any of the specified prefixes.
 *
 * @param prefixes - (Optional) An array of prefixes to filter CSS variables. Defaults to ['--'].
 * For example, ['--color'] will only collect variables that start with '--color'.
 * @returns A Promise that resolves to a Set containing the filtered CSS variable names.
 */
export const getDesignTokenVariables = async (
  prefixes: string[] = ['--'],
): Promise<Set<string>> => {
  const designTokensPath = path.resolve(
    __dirname,
    '../../../packages/design-tokens/src/css',
  );

  // List of CSS files to process
  const cssFiles = [
    'brand-colors.css',
    'light-theme-colors.css',
    'dark-theme-colors.css',
    'typography.css',
    'shadow.css',
  ];

  // Initialize a Set to store all variables
  const variables = new Set<string>();

  // Process each CSS file
  for (const file of cssFiles) {
    const cssPath = path.join(designTokensPath, file);
    const cssContent = await fs.promises.readFile(cssPath, 'utf-8');
    const parsedRoot = postcss.parse(cssContent);

    parsedRoot.walkDecls((decl) => {
      const { prop } = decl;
      if (prefixes.some((prefix) => prop.startsWith(prefix))) {
        variables.add(prop);
      }
    });
  }

  return variables;
};

/**
 * Recursively traverses an object(e.g. colors, shadows, typography) to collect all CSS variable values.
 *
 * This utility function traverses a given object, searches for strings that reference CSS variables
 * using the `var(--variable-name)` syntax, and collects the names of these variables.
 *
 * @param obj - The object to traverse. Typically, this would be the preset object containing the CSS variables.
 * @returns An array of extracted CSS variable names.
 */
export const collectCssVariables = (obj: Record<string, unknown>): string[] => {
  const variables: string[] = []; // Initialize an array to store the found CSS variable names

  /**
   * Helper function to recursively traverse the object.
   *
   * @param current - The current value being traversed. Can be of any type.
   */
  const traverse = (current: unknown) => {
    if (typeof current === 'string') {
      // Use a regular expression to match the CSS variable pattern
      const match = current.match(/var\((--[^)]+)\)/u);
      if (match) {
        variables.push(match[1]); // Extract and store the variable name
      }
    } else if (typeof current === 'object' && current !== null) {
      // If the current value is an object, recursively traverse its properties
      Object.values(current).forEach((value) => traverse(value));
    }
    // Non-string and non-object values are ignored
  };

  traverse(obj); // Start the traversal with the root object
  return variables; // Return the array of collected CSS variable names
};
