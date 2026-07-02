import { PureBlackContext } from '@metamask/design-system-shared';
import type { PureBlackProviderProps } from '@metamask/design-system-shared';
import React, { useContext, useMemo } from 'react';

export const PureBlackProvider = ({
  children,
  isPureBlack = false,
}: PureBlackProviderProps) => {
  const value = useMemo(() => ({ isPureBlack }), [isPureBlack]);

  return (
    <PureBlackContext.Provider value={value}>
      <div
        data-pure-black={isPureBlack ? 'true' : undefined}
        style={{ display: 'contents' }}
      >
        {children}
      </div>
    </PureBlackContext.Provider>
  );
};

PureBlackProvider.displayName = 'PureBlackProvider';

export const usePureBlack = (): boolean => {
  const { isPureBlack } = useContext(PureBlackContext);
  return isPureBlack;
};
