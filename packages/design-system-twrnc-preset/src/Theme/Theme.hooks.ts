import { useContext } from 'react';

import { ThemeContext } from './Theme.providers';

/**
 * Hook that provides access to both the theme context and tailwind utility.
 * Use this when you need access to both styling and theme information.
 *
 * @returns Object containing tw and theme
 *
 * @example
 * const { theme } = useTheme();
 * const inverseTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
 * return (
 *   <ThemeProvider theme={inverseTheme}>
 *     <View style={tw`bg-background-default`}>
 *       <Text style={tw`text-default`}>Toast message</Text>
 *     </View>
 *   </ThemeProvider>
 * );
 */
export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

/**
 * Hook that provides access to just the tailwind utility function.
 * Use this when you only need styling capabilities.
 *
 @returns Tailwind utility function for styling
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
