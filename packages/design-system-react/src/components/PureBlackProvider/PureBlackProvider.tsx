import { PureBlackContext } from '@metamask/design-system-shared';
import type { PureBlackProviderProps } from '@metamask/design-system-shared';
import React, { useContext, useMemo } from 'react';

/**
 * Applies pure-black (OLED) dark mode for web consumers.
 *
 * Controlled component: the app owns when pure black is active (e.g. feature
 * flag and resolved dark theme) and passes `isPureBlack`. Sets `data-pure-black`
 * so CSS from `@metamask/design-tokens` can override variables under `.dark`.
 *
 * @param options - Component props
 * @param options.children - Child components to render
 * @param options.isPureBlack - When true, pure-black token overrides apply
 * @returns React component that provides pure-black context to children
 */
export const PureBlackProvider = ({
  children,
  isPureBlack = false,
}: PureBlackProviderProps) => {
  const value = useMemo(() => ({ isPureBlack }), [isPureBlack]);

  return (
    <PureBlackContext.Provider value={value}>
      <div
        // Omit the attribute when false — React renders false as "false", which
        // would leave a misleading data-pure-black attribute on the DOM.
        data-pure-black={isPureBlack ? 'true' : undefined}
        // Carrier for data-pure-black only; children layout as if unwrapped.
        className="contents"
      >
        {children}
      </div>
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
