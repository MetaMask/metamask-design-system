import { PureBlackContext } from '@metamask/design-system-shared';
import React, { useContext } from 'react';

import { lightTheme as lightThemeJS, resolveDarkTheme } from '../src';

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
      <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
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
    const { isPureBlack } = useContext(PureBlackContext);
    const darkThemeColors = getCSSVariablesFromStylesheet(
      '--color-',
      'dark',
      isPureBlack,
    );
    const backgroundDefault =
      resolveDarkTheme(isPureBlack).colors.background.default;

    return (
      <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
        {Object.entries(darkThemeColors).map(
          ([name, { color, name: colorName }]) => (
            <ColorSwatch
              key={name}
              color={color}
              name={colorName}
              backgroundColor={colorName}
              borderColor="var(--color-border-muted)"
              textBackgroundColor="transparent"
              textColor={getContrastYIQ(color, backgroundDefault)}
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
      <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
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
    const { isPureBlack } = useContext(PureBlackContext);
    const darkTheme = resolveDarkTheme(isPureBlack);
    const colors = getJSColors(darkTheme.colors);

    return (
      <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
        {colors.map(({ name, color }) => (
          <ColorSwatch
            key={name}
            color={color}
            textBackgroundColor="transparent"
            textColor={getContrastYIQ(
              color,
              darkTheme.colors.background.default,
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
