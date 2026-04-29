import { Theme } from '@metamask/design-system-twrnc-preset';
import { darkTheme, lightTheme } from '@metamask/design-tokens';

type StorybookBackground = {
  name: string;
  value: string;
};

type StorybookBackgroundsParameter = {
  default: string;
  values: StorybookBackground[];
};

export const STORYBOOK_DEFAULT_BACKGROUND_NAME = 'background/default';

const storybookBackgroundValues: Record<Theme, StorybookBackground[]> = {
  [Theme.Light]: [
    {
      name: STORYBOOK_DEFAULT_BACKGROUND_NAME,
      value: lightTheme.colors.background.default,
    },
    {
      name: 'background/alternative',
      value: lightTheme.colors.background.alternative,
    },
    {
      name: 'background/section',
      value: lightTheme.colors.background.section,
    },
    {
      name: 'background/subsection',
      value: lightTheme.colors.background.subsection,
    },
  ],
  [Theme.Dark]: [
    {
      name: STORYBOOK_DEFAULT_BACKGROUND_NAME,
      value: darkTheme.colors.background.default,
    },
    {
      name: 'background/alternative',
      value: darkTheme.colors.background.alternative,
    },
    {
      name: 'background/section',
      value: darkTheme.colors.background.section,
    },
    {
      name: 'background/subsection',
      value: darkTheme.colors.background.subsection,
    },
  ],
};

export const getStorybookBackgrounds = (
  theme: Theme,
): StorybookBackgroundsParameter => ({
  default: STORYBOOK_DEFAULT_BACKGROUND_NAME,
  values: storybookBackgroundValues[theme],
});

export const getStorybookDefaultBackground = (theme: Theme): string =>
  storybookBackgroundValues[theme][0]?.value ??
  lightTheme.colors.background.default;
