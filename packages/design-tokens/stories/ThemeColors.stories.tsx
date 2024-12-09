import React from 'react';

import { lightTheme as lightThemeJS, darkTheme as darkThemeJS } from '../src';
import { ColorSwatch, ColorSwatchGroup } from './components';
import {
  getCSSVariablesFromStylesheet,
  getContrastYIQ,
  getJSColors,
  useJsonColor,
} from './test-utils';
import README from './ThemeColors.mdx';

const meta = {
  title: 'Design Tokens/Color/Theme Colors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

export const FigmaLightTheme = {
  render: () => {
    const { lightTheme } = useJsonColor();
    if (!lightTheme) {
      return null; // or some fallback component
    }
    return <ColorSwatchGroup swatchData={lightTheme} />;
  },
  parameters: {
    colorScheme: 'light',
  },
};

export const FigmaDarkTheme = {
  render: () => {
    const { darkTheme } = useJsonColor();
    if (!darkTheme) {
      return null;
    }

    const backgroundColor =
      'background' in darkTheme &&
      typeof darkTheme.background === 'object' &&
      darkTheme.background !== null &&
      'default' in darkTheme.background &&
      typeof darkTheme.background.default === 'object' &&
      darkTheme.background.default !== null &&
      'value' in darkTheme.background.default
        ? darkTheme.background.default.value
        : undefined;

    return <ColorSwatchGroup swatchData={darkTheme} theme={backgroundColor} />;
  },
  parameters: {
    colorScheme: 'dark',
  },
};

export const CSSLightTheme = {
  render: () => {
    const lightThemeColors = getCSSVariablesFromStylesheet('--color-');
    return (
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,300px)]">
        {Object.entries(lightThemeColors).map(
          ([name, { color, name: colorName }]) => (
            <ColorSwatch
              key={name}
              color={color}
              textBackgroundColor="transparent"
              textColor={getContrastYIQ(
                color,
                lightThemeJS.colors.background.default, // TODO Use CSS instead of JS object once CSS object is cleaned up
              )}
              backgroundColor={colorName}
              name={colorName}
            />
          ),
        )}
      </div>
    );
  },
  parameters: {
    colorScheme: 'light',
  },
};

export const CSSDarkTheme = {
  render: () => {
    const darkThemeColors = getCSSVariablesFromStylesheet('--color-', 'dark');
    return (
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,300px)]">
        {Object.entries(darkThemeColors).map(
          ([name, { color, name: colorName }]) => (
            <ColorSwatch
              key={name}
              color={color}
              name={colorName}
              backgroundColor={colorName}
              borderColor="var(--color-border-muted)"
              textBackgroundColor="transparent"
              textColor={getContrastYIQ(
                color,
                darkThemeJS.colors.background.default,
              )}
            />
          ),
        )}
      </div>
    );
  },
  parameters: {
    colorScheme: 'dark',
  },
};

export const JSLightTheme = {
  render: () => {
    const colors = getJSColors(lightThemeJS.colors);
    return (
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,300px)]">
        {colors.map(({ name, color }) => (
          <ColorSwatch
            key={name}
            color={color}
            textBackgroundColor="transparent"
            textColor={getContrastYIQ(
              color,
              lightThemeJS.colors.background.default,
            )}
            name={name}
          />
        ))}
      </div>
    );
  },
  parameters: {
    colorScheme: 'light',
  },
};

export const JSDarkTheme = {
  render: () => {
    const colors = getJSColors(darkThemeJS.colors);
    return (
      <div className={`grid gap-4 grid-cols-[repeat(auto-fill,300px)]`}>
        {colors.map(({ name, color }) => (
          <ColorSwatch
            key={name}
            color={color}
            textBackgroundColor="transparent"
            textColor={getContrastYIQ(
              color,
              darkThemeJS.colors.background.default,
            )}
            name={name}
          />
        ))}
      </div>
    );
  },
  parameters: {
    colorScheme: 'dark',
  },
};
