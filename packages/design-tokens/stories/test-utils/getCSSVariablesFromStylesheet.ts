/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable require-unicode-regexp */

// Define a type for the color object
export type Color = {
  [key: string]: {
    /**
     * Authored stylesheet value (e.g. `#ffffff` or `var(--brand-colors-white)`).
     */
    color: string;
    name: string;
    /**
     * Computed color used for swatch contrast. Normalized so short hex like
     * `#fff` becomes `#ffffff`.
     */
    resolvedColor: string;
  };
};

/**
 * Expands 3/4-digit hex to 6/8-digit form. Leaves other color strings unchanged.
 *
 * @param value - A CSS color string.
 * @returns Long-form hex when given short hex; otherwise the original value.
 */
const expandShortHex = (value: string): string => {
  const match = /^#([0-9a-f]{3,4})$/iu.exec(value.trim());
  if (!match?.[1]) {
    return value;
  }

  const short = match[1];
  return `#${[...short].map((char) => `${char}${char}`).join('')}`;
};

/**
 * Whether a CSS rule selector belongs to the requested theme.
 *
 * @param selector - A single selector from a style rule.
 * @param theme - Light or dark theme.
 * @returns True when the selector should be read for this theme.
 */
const matchesThemeSelector = (
  selector: string,
  theme: 'light' | 'dark',
): boolean => {
  const trimmed = selector.trim();

  if (theme === 'light') {
    return (
      trimmed === ':root' ||
      trimmed === "[data-theme='light']" ||
      trimmed === '.light'
    );
  }

  return trimmed === "[data-theme='dark']" || trimmed === '.dark';
};

/**
 * Retrieves CSS variables from the stylesheet, correctly handling combined selectors.
 *
 * Displays authored declaration values (not browser-serialized computed colors),
 * so `#ffffff` stays `#ffffff` instead of collapsing to `#fff`.
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

  // Temporary themed node so resolved colors reflect the active theme for contrast.
  const tempDiv = document.createElement('div');
  if (theme === 'dark') {
    tempDiv.setAttribute('data-theme', 'dark');
    tempDiv.classList.add('dark');
  } else {
    tempDiv.setAttribute('data-theme', 'light');
    tempDiv.classList.add('light');
  }

  document.body.appendChild(tempDiv);

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
      return selectors.some((selector) =>
        matchesThemeSelector(selector, theme),
      );
    })
    .forEach((cssRule: CSSRule) => {
      const style = (cssRule as CSSStyleRule).style;
      for (let i = 0; i < style.length; i++) {
        const varName = style[i];
        if (varName?.startsWith(varPrefix)) {
          // Prefer the authored declaration over getComputedStyle serialization.
          const authoredValue = style.getPropertyValue(varName).trim();
          const resolvedValue = expandShortHex(
            getComputedStyle(tempDiv).getPropertyValue(varName).trim(),
          );
          const name = varName.replace(varPrefix, '').replace(/-/g, ' ');
          cssVariables[name] = {
            color: authoredValue,
            resolvedColor: resolvedValue,
            name: `var(${varName})`,
          };
        }
      }
    });

  document.body.removeChild(tempDiv);

  return cssVariables;
};
