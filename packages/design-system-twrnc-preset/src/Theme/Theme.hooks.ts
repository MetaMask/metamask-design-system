import { useContext } from 'react';

import { ThemeContext } from './Theme.providers';

export const useTailwind = () => {
  const { tw } = useContext(ThemeContext);
  return tw;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};
