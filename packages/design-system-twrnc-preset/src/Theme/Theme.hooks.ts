import { useContext } from 'react';

import { ThemeContext } from './Theme.providers';

export const useTailwind = () => {
  const { tw } = useContext(ThemeContext);
  return tw;
};
