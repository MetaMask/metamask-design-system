import { createContext } from 'react';
import type { ReactNode } from 'react';

export type PureBlackContextValue = {
  isPureBlack: boolean;
};

export type PureBlackProviderProps = {
  children: ReactNode;
  isPureBlack?: boolean;
};

export const PureBlackContext = createContext<PureBlackContextValue>({
  isPureBlack: false,
});

PureBlackContext.displayName = 'PureBlackContext';
