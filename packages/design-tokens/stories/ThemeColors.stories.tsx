import React from 'react';
import { lightTheme as lightThemeJS, darkTheme as darkThemeJS } from '../src';
import brandColor from '../src/figma/brandColors.json';
import { ColorSwatch, ColorSwatchGroup } from './components';
import README from './ThemeColors.mdx';
import {
  getCSSVariablesFromStylesheet,
  getContrastYIQ,
  getJSColors,
  useJsonColor,
} from './test-utils';

export default {
  title: 'Colors/Theme Colors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export const FigmaLightTheme = {
  render: () => {
    const { lightTheme } = useJsonColor();
    if (!lightTheme) {
      return null; // or some fallback component
    }
    console.log('lightTheme', lightTheme);
    return <ColorSwatchGroup swatchData={lightTheme} />;
  },
};

export const FigmaDarkTheme = {
  render: () => {
    const { darkTheme } = useJsonColor();
    console.log('darkTheme', darkTheme);
    if (!darkTheme) {
      return null; // or some fallback component
    }
    return (
      <div
        style={{
          margin: '-1rem',
          padding: '1rem',
        }}
      >
        <ColorSwatchGroup
          swatchData={darkTheme}
          theme={darkTheme?.background?.default?.value}
        />
      </div>
    );
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: brandColor.grey[800].value }],
    },
  },
};

export const CSSLightTheme = {
  render: () => {
    const lightThemeColors = getCSSVariablesFromStylesheet('--color-');
    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
        }}
      >
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
};

export const CSSDarkTheme = {
  render: () => {
    const darkThemeColors = getCSSVariablesFromStylesheet('--color-');
    return (
      <div
        style={{
          backgroundColor: 'var(--color-background-default)',
          margin: '-1rem',
          padding: '1rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: 'repeat(auto-fill, 300px)',
          }}
        >
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
                  darkThemeJS.colors.background.default, // TODO Use CSS instead of JS object once CSS object is cleaned up
                )}
              />
            ),
          )}
        </div>
      </div>
    );
  },
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: 'var(--color-background-default)' }],
  },
  decorators: [
    (StoryFn) => {
      // Check if document object is available
      if (typeof document !== 'undefined') {
        // Add the data-theme attribute to the root element
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      // Render the story
      return <StoryFn />;
    },
  ],
};

export const JSLightTheme = {
  render: () => {
    const colors = getJSColors(lightThemeJS.colors);
    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
        }}
      >
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
};

export const JSDarkTheme = {
  render: () => {
    const colors = getJSColors(darkThemeJS.colors);
    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          padding: '1rem',
          margin: '-1rem', // negates storybook padding and removes white border
          backgroundColor: darkThemeJS.colors.background.default,
        }}
      >
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
};
