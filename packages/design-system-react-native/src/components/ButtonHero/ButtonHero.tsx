import { Theme, ThemeProvider } from '@metamask/design-system-twrnc-preset';
import React from 'react';

import { ButtonBase } from '../ButtonBase';

import type { ButtonHeroProps } from './ButtonHero.types';

/**
 * Inner component that uses the locked light theme from ThemeProvider.
 * Destructures and ignores twClassName, textClassName, and iconClassName to prevent
 * overriding the hero-specific styling (light theme lock).
 *
 * @param props - Component props destructured below
 * @param props.isDisabled - Whether the button is disabled
 * @param props.isLoading - Whether the button is in a loading state
 * @param props.twClassName - Ignored to prevent override of hero styling
 * @param props.textClassName - Ignored to prevent override of hero styling
 * @param props.iconClassName - Ignored to prevent override of hero styling
 * @returns ButtonBase component with locked light theme styles
 */
const ButtonHeroInner: React.FC<ButtonHeroProps> = ({
  isDisabled,
  isLoading,
  twClassName: _twClassName,
  textClassName: _textClassName,
  iconClassName: _iconClassName,
  ...props
}) => (
  <ButtonBase
    twClassName={(pressed) =>
      `bg-primary-default ${
        pressed && !isDisabled && !isLoading ? 'bg-primary-default-pressed' : ''
      }`
    }
    textClassName={(_pressed) => 'text-primary-inverse'}
    iconClassName={(_pressed) => 'text-primary-inverse'}
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
