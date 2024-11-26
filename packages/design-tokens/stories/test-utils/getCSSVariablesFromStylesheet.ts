/* eslint-disable no-restricted-globals */
/* eslint-disable id-denylist */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable require-unicode-regexp */

// Define a type for the color object
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
 * @param theme - The theme to retrieve variables for ('light' or 'dark').
 * @returns An object containing the retrieved CSS variables.
 */
export const getCSSVariablesFromStylesheet = (
  varPrefix: string,
  theme: 'light' | 'dark' = 'light',
): Color => {
  const cssVariables: Color = {};

  console.log(`Getting CSS variables for ${theme} theme`);

  // Create a temporary div to get the computed styles for the correct theme
  const tempDiv = document.createElement('div');
  if (theme === 'dark') {
    tempDiv.setAttribute('data-theme', 'dark');
    tempDiv.classList.add('dark');
  } else {
    tempDiv.setAttribute('data-theme', 'light');
    tempDiv.classList.add('light');
  }

  // Add the div to the document temporarily
  document.body.appendChild(tempDiv);

  const validSelectors =
    theme === 'light'
      ? [':root', "[data-theme='light']", '.light']
      : ["[data-theme='dark']", '.dark'];

  console.log('Looking for selectors:', validSelectors);

  Array.from(document.styleSheets)
    .flatMap((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules);
      } catch (err) {
        if (err instanceof Error) {
          console.error(
            'Access denied to stylesheet: ',
            styleSheet.href,
            '; Error: ',
            err.message,
          );
        } else {
          console.error(
            'Access denied to stylesheet: ',
            styleSheet.href,
            '; Unknown error occurred.',
          );
        }
        return [];
      }
    })
    .filter((cssRule) => cssRule.type === CSSRule.STYLE_RULE)
    .filter((cssRule: CSSRule) => {
      const selectors = (cssRule as CSSStyleRule).selectorText.split(',');
      const matches = selectors.some((selector) =>
        validSelectors.includes(selector.trim()),
      );

      if (matches) {
        console.log(
          'Found matching selector:',
          (cssRule as CSSStyleRule).selectorText,
        );
      }

      return matches;
    })
    .forEach((cssRule: CSSRule) => {
      const style = (cssRule as CSSStyleRule).style;
      for (let i = 0; i < style.length; i++) {
        const varName = style[i];
        if (varName?.startsWith(varPrefix)) {
          // Get computed style from our temporary themed div instead of document.documentElement
          const value = getComputedStyle(tempDiv)
            .getPropertyValue(varName)
            .trim();
          const name = varName.replace(varPrefix, '').replace(/-/g, ' ');
          cssVariables[name] = {
            color: value,
            name: `var(${varName})`,
          };
        }
      }
    });

  // Clean up - remove the temporary div
  document.body.removeChild(tempDiv);

  console.log(
    `Found ${Object.keys(cssVariables).length} CSS variables:`,
    cssVariables,
  );

  return cssVariables;
};
