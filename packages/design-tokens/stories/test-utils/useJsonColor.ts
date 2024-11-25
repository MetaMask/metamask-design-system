/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: Replace any types with proper types https://github.com/MetaMask/metamask-design-system/issues/127

import { useEffect, useState } from 'react';

import figmaBrandColors from '../../src/figma/brandColors.json';
import figmaDarkTheme from '../../src/figma/darkTheme.json';
import figmaLightTheme from '../../src/figma/lightTheme.json';

export type ColorDetails = {
  value: string; // Hex value or alias to another color
  type?: string; // Type usually color
  parent?: string; // Parent category or group of the color
  description?: string; // Description or notes about the color
};

export type ColorPalette = {
  [shade: string]: ColorDetails;
};

export type Theme = {
  [colorName: string]: ColorPalette | ColorDetails;
};

type CompiledColors = {
  [themeName: string]: Theme;
};

const isHexColor = (value: string) =>
  /^#[0-9A-F]{6}$/iu.test(value) || /^#[0-9A-F]{8}$/iu.test(value);

/**
 * Custom hook for compiling color themes from Figma JSON definitions.
 * Merges brand, light, and dark theme color settings into a single object.
 *
 * @returns Object containing compiled color themes.
 */
export const useJsonColor = (): CompiledColors => {
  const [colors, setColors] = useState<CompiledColors>({});

  useEffect(() => {
    /**
     * Parses a referenced color value and resolves it based on the current theme.
     * If the value is a reference (enclosed in curly braces), it navigates through the theme object.
     *
     * @param value - The color value or reference to resolve.
     * @param theme - The theme object to resolve references against.
     * @returns The resolved color value.
     */
    const parseColorValue = (value: string, theme: Theme): string => {
      if (value.startsWith('{') && value.endsWith('}')) {
        const path = value.slice(1, -1).split('.');
        let current: any = theme;
        for (const segment of path) {
          current = current[segment];
          if (!current) {
            return value; // Return original value if resolution fails.
          }
        }
        return current.value; // Return the resolved color value.
      }
      return value; // Return the direct value if not a reference.
    };

    /**
     * Compiles color themes from provided JSON theme definitions.
     * Each color value is checked and potentially resolved using parseColorValue.
     *
     * @param themes - Object containing various theme definitions.
     * @returns Object containing compiled and resolved themes.
     */
    const compileColors = (themes: {
      [key: string]: Theme;
    }): CompiledColors => {
      const compiledColors: CompiledColors = {};
      Object.entries(themes).forEach(([themeName, theme]) => {
        const tempThemeColors: Theme = {};
        Object.entries(theme).forEach(([colorName, colorValues]) => {
          if (typeof colorValues.value === 'string') {
            tempThemeColors[colorName] = {
              ...colorValues,
              value: parseColorValue(colorValues.value, figmaBrandColors),
            };
          } else {
            const tempThemeColorPalette: ColorPalette = {};
            Object.entries(colorValues).forEach(([shade, details]) => {
              let resolvedValue = parseColorValue(
                details.value,
                figmaBrandColors,
              );
              if (!isHexColor(resolvedValue)) {
                const cleanResolvedValue = resolvedValue
                  .slice(1, -1)
                  .split('.'); // Split the reference into parts
                const category = cleanResolvedValue[0]; // Get the category (e.g., 'text')
                const key = cleanResolvedValue[1]; // Get the key (e.g., 'default')
                if (category) {
                  if (theme[category]?.[key]) {
                    resolvedValue = parseColorValue(
                      theme[category][key].value,
                      figmaBrandColors,
                    );
                  } else {
                    console.error('Invalid reference:', resolvedValue);
                  }
                }
              }

              const description: string = details.description ?? '';
              const valueAsString = String(details.value);
              const additionalDescription: string =
                details.value === resolvedValue ? '' : ` ${valueAsString}`;

              tempThemeColorPalette[shade] = {
                ...details,
                value: resolvedValue,
                description: description + additionalDescription,
              };
            });
            tempThemeColors[colorName] = tempThemeColorPalette;
          }
        });
        compiledColors[themeName] = tempThemeColors;
      });

      return compiledColors;
    };

    // Compile all color themes into a single object and update the state
    const allColors = compileColors({
      brandColor: { ...figmaBrandColors },
      lightTheme: figmaLightTheme,
      darkTheme: figmaDarkTheme,
    });
    setColors(allColors);
  }, []);

  return colors;
};
