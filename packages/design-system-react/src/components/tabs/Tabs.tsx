import React, { createContext, useContext, useState } from 'react';
import { twMerge } from '../../utils/tw-merge';
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from './Tabs.types';

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className,
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue || '',
  );

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const handleValueChange = (newValue: string) => {
    setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={twMerge('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge('flex border-b border-muted', className)}
      role="tablist"
    >
      {children}
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className,
}) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const isSelected = context.value === value;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      className={twMerge(
        'px-4 py-2 text-alternative hover:text-default transition-colors relative font-medium',
        isSelected &&
          'text-default after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-default',
        className,
      )}
      onClick={() => context.onValueChange(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className,
}) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  if (context.value !== value) {
    return null;
  }

  return (
    <div role="tabpanel" className={twMerge('pt-4', className)}>
      {children}
    </div>
  );
};
