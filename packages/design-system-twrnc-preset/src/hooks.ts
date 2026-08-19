import { useContext } from 'react';

import type { Theme } from './Theme.types';
import { ThemeContext } from './ThemeContext';

/**
 * Hook that provides access to the current theme.
 * Use this when you need to conditionally render content based on theme.
 *
 * @returns The current theme ('light' or 'dark')
 *
 * @example
 * const theme = useTheme();
 * const inverseTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
 * return (
 *   <ThemeProvider theme={inverseTheme}>
 *     <View style={tw`bg-default`}>
 *       <Text style={tw`text-default`}>Toast message</Text>
 *     </View>
 *   </ThemeProvider>
 * );
 */
export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

/**
 * Hook that provides access to the tailwind utility function.
 * Use this when you only need styling capabilities.
 *
 * @returns Tailwind utility function for styling
 *
 * @example
 * const tw = useTailwind();
 * return (
 *   <View style={tw`p-4 bg-primary`}>
 *     <Text>Styled content</Text>
 *   </View>
 * );
 */
export const useTailwind = () => {
  const { tw } = useContext(ThemeContext);
  return tw;
};
