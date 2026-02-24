import { Theme, ThemeProvider } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { ButtonBase } from '../ButtonBase';

import type { ButtonHeroProps } from './ButtonHero.types';

/**
 * Inner component that uses the locked light theme from ThemeProvider
 *
 * @param options0 - Component props
 * @param options0.isDisabled - Whether the button is disabled
 * @param options0.isLoading - Whether the button is in a loading state
 * @returns ButtonBase component with locked light theme styles
 */
const ButtonHeroInner: React.FC<ButtonHeroProps> = ({
  isDisabled,
  isLoading,
  ...props
}) => (
  <ButtonBase
    twClassName={(pressed) =>
      `bg-primary-default ${
        pressed && !isDisabled && !isLoading ? 'bg-primary-default-pressed' : ''
      }`
    }
    textClassName={() => 'text-primary-inverse'}
    iconClassName={() => 'text-primary-inverse'}
    isDisabled={isDisabled}
    isLoading={isLoading}
    {...props}
  />
);

/**
 * ButtonHero component - Hero button with locked light theme
 *
 * Used for primary marketing and call-to-action use cases.
 * The button is locked to light theme colors regardless of the app's theme setting.
 *
 * @param props - ButtonHero props extending ButtonBaseProps
 * @returns ButtonHero component wrapped in light ThemeProvider
 */
export const ButtonHero: React.FC<ButtonHeroProps> = (props) => (
  <ThemeProvider theme={Theme.Light}>
    <ButtonHeroInner {...props} />
  </ThemeProvider>
);
