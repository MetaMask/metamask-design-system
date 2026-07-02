import { PureBlackContext } from '@metamask/design-system-shared';
import type { PureBlackProviderProps } from '@metamask/design-system-shared';
import React, { useContext, useMemo } from 'react';

/**
 * React context for pure-black (OLED) dark mode on web.
 *
 * Controlled component: the app owns when pure black is active (e.g. feature
 * flag and resolved dark theme) and passes `isPureBlack`. CSS token overrides
 * come from `data-pure-black` on the document root (see extension `setTheme`);
 * this provider supplies `usePureBlack()` for components that branch in JS.
 *
 * @param options - Component props
 * @param options.children - Child components to render
 * @param options.isPureBlack - When true, `usePureBlack()` returns true
 * @returns React component that provides pure-black context to children
 */
export const PureBlackProvider = ({
  children,
  isPureBlack = false,
}: PureBlackProviderProps) => {
  const value = useMemo(() => ({ isPureBlack }), [isPureBlack]);

  return (
    <PureBlackContext.Provider value={value}>
      {children}
    </PureBlackContext.Provider>
  );
};

PureBlackProvider.displayName = 'PureBlackProvider';

/**
 * Returns whether pure-black dark mode is active in the current subtree.
 *
 * Use for component logic that depends on the active dark palette (e.g. elevated
 * surfaces in Modal). On React Native, use `usePureBlack` from
 * `@metamask/design-system-twrnc-preset` instead.
 *
 * @returns True when wrapped by `PureBlackProvider` with `isPureBlack` enabled
 */
export const usePureBlack = (): boolean => {
  const { isPureBlack } = useContext(PureBlackContext);
  return isPureBlack;
};
