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
 * @returns An object containing the retrieved CSS variables.
 */
export const getCSSVariablesFromStylesheet = (varPrefix: string): Color => {
  const cssVariables: Color = {};

  // Iterate over all stylesheets accessible to the document
  Array.from(document.styleSheets)
    .flatMap((styleSheet) => {
      try {
        // Access rules from the stylesheet, handle security errors when accessing cross-origin stylesheets
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
    .filter((cssRule) => cssRule.type === CSSRule.STYLE_RULE) // Filter for style rules only
    .filter((cssRule: CSSRule) => {
      // Handle combined selectors by splitting and trimming each individual selector
      const selectors = (cssRule as CSSStyleRule).selectorText.split(',');
      return selectors.some(
        (selector) =>
          selector.trim() === ':root' ||
          selector.trim() === "[data-theme='light']",
      );
    })
    .forEach((cssRule: CSSRule) => {
      // Extract styles from the rules
      const style = (cssRule as CSSStyleRule).style;
      // Iterate over each property in the style rule
      for (let i = 0; i < style.length; i++) {
        const varName = style[i];
        if (varName?.startsWith(varPrefix)) {
          // Get the actual CSS variable value from the computed styles of the document's root element
          const value = getComputedStyle(document.documentElement)
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

  return cssVariables;
};
