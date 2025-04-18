import { Text, TextVariant } from '@metamask/design-system-react';
import React from 'react';

import { getContrastYIQ } from '../../test-utils/getContrastYIQ';
import type { Theme } from '../../test-utils/useJsonColor';
import { ColorSwatch } from '../ColorSwatch';

type ColorSwatchGroupProps = {
  /**
   * The color object
   */
  swatchData: Theme;
  /**
   * The color of text background that contains the name of the color defaults to background.default
   */
  textBackgroundColor?: string;
  /**
   * Hex code value of the theme (light or dark mode) this is used to help determine the text color of each swatch when opacity is involved
   * Default is light theme #ffffff
   */
  theme?: string | undefined;
};

/**
 * Converts a string to camelCase format, handling special cases for numeric suffixes
 * @param str - Input string to be converted to camelCase
 * @returns The string in camelCase format, preserving numeric suffixes
 */
function toCamelCase(str: string): string {
  // Check if the string contains a dash followed by a number, if so, skip modification
  if (/-\d+%$/u.test(str)) {
    return str;
  }
  return str.replace(/-([a-z])/gu, (_, g) => {
    return g.toUpperCase();
  });
}

export const ColorSwatchGroup: React.FC<ColorSwatchGroupProps> = ({
  swatchData,
  textBackgroundColor = 'transparent',
  theme = '#ffffff',
}) => {
  if (!swatchData) {
    return <div>No swatch data</div>;
  }

  // Function to extract numbers and sort them numerically
  const sortShadesNumerically = (a: string, b: string) => {
    const numberPattern = /\d+/u; // Matches digits in the shade identifier
    const numberA = parseInt(a.match(numberPattern)?.[0] ?? '0', 10);
    const numberB = parseInt(b.match(numberPattern)?.[0] ?? '0', 10);
    return numberA - numberB;
  };

  const renderSwatches = () => {
    return Object.entries(swatchData).map(([category, colors]) => {
      type ColorDetail = {
        value: string;
        description?: string;
      };

      if ('value' in colors) {
        // For single color entries like white and black
        const { value, description } = colors as ColorDetail;
        return (
          <div
            key={category}
            style={{
              color: getContrastYIQ(theme, theme),
            }}
          >
            <Text variant={TextVariant.HeadingSm} className="my-4">
              {category}
            </Text>
            <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
              <div key={category}>
                <ColorSwatch
                  color={value}
                  name={`${category}`}
                  textColor={getContrastYIQ(value, theme)}
                  {...{ textBackgroundColor }}
                />
                {description && <Text className="my-4">{description}</Text>}
              </div>
            </div>
          </div>
        );
      }

      // For grouped color entries with shades
      const colorKeys = Object.keys(colors)
        .filter((key) => !/-\d+%$/u.test(key))
        .map((key) => ({
          originalKey: key,
          camelCaseKey: toCamelCase(key),
        }));

      const sortedColorKeys = colorKeys.sort((a, b) =>
        sortShadesNumerically(a.camelCaseKey, b.camelCaseKey),
      );

      return (
        <div
          key={category}
          style={{
            color: getContrastYIQ(theme, theme),
          }}
        >
          <Text variant={TextVariant.HeadingSm} className="my-4">
            {category}
          </Text>
          <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
            {sortedColorKeys.map(({ originalKey, camelCaseKey }) => {
              const colorDetails = colors[originalKey];
              const { value = '', description } = colorDetails || {};
              return (
                <div key={camelCaseKey}>
                  <ColorSwatch
                    color={value}
                    name={`${category}.${camelCaseKey}`}
                    textColor={getContrastYIQ(value ?? '', theme)}
                    {...{ textBackgroundColor }}
                  />
                  {description && <Text className="my-4">{description}</Text>}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return <>{renderSwatches()}</>;
};
