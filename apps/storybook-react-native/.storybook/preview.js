import { useColorScheme } from 'react-native';
import { ThemeProvider, Theme } from '@metamask/design-system-twrnc-preset';

const ThemeDecorator = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Theme.Dark : Theme.Light;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export const decorators = [
  (Story) => (
    <ThemeDecorator>
      <Story />
    </ThemeDecorator>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
