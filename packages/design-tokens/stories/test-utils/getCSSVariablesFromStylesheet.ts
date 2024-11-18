import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

export type Color = {
  [key: string]: {
    color: string;
    name: string;
  };
};

/**
 * Retrieves CSS variables from the stylesheet, correctly handling combined selectors.
 *
 * @param varPrefix - The prefix of the CSS variables to retrieve.
 * @returns An object containing the retrieved CSS variables.
 */
export const getCSSVariablesFromStylesheet = async (
  varPrefix: string,
): Promise<Color> => {
  const cssVariables: Color = {};
  const designTokensPath = path.resolve(__dirname, '../../../src/css');

  // List of CSS files to process
  const cssFiles = [
    'brand-colors.css',
    'light-theme-colors.css',
    'dark-theme-colors.css',
    'typography.css',
    'shadow.css',
  ];

  for (const file of cssFiles) {
    const cssPath = path.join(designTokensPath, file);
    const cssContent = await fs.promises.readFile(cssPath, 'utf-8');
    const parsedRoot = postcss.parse(cssContent);

    // Walk through all rules and declarations
    parsedRoot.walk((node) => {
      if (node.type === 'decl' && node.prop?.startsWith(varPrefix)) {
        const { prop, value } = node;
        const name = prop.replace(varPrefix, '').replace(/-/gu, ' ');
        cssVariables[name] = {
          color: value,
          name: `var(${prop})`,
        };
      }
    });
  }

  return cssVariables;
};
