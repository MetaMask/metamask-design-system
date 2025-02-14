import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { twMerge } from '../../utils/tw-merge';
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from './Tabs.types';

interface TabPosition {
  width: number;
  left: number;
}

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  registerTab: (value: string, position: TabPosition) => void;
  activeTabPosition: TabPosition | null;
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
  const [activeTabPosition, setActiveTabPosition] =
    useState<TabPosition | null>(null);
  const tabPositions = useRef(new Map<string, TabPosition>());

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  const registerTab = useCallback(
    (tabValue: string, position: TabPosition) => {
      tabPositions.current.set(tabValue, position);
      if (tabValue === value) {
        setActiveTabPosition(position);
      }
    },
    [value],
  );

  return (
    <TabsContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
        registerTab,
        activeTabPosition,
      }}
    >
      <div className={twMerge('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children, className }) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsList must be used within a Tabs component');
  }

  return (
    <div
      className={twMerge('relative flex border-b border-muted', className)}
      role="tablist"
    >
      {children}
      <div
        className="absolute bottom-[-1px] h-0.5 bg-primary-default transition-all duration-200 ease-[cubic-bezier(0.7,0,0.15,1)]"
        style={{
          width: context.activeTabPosition?.width ?? 0,
          left: context.activeTabPosition?.left ?? 0,
        }}
      />
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  className,
}) => {
  const context = useContext(TabsContext);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const isSelected = context.value === value;

  useEffect(() => {
    const updateTabPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const parentRect =
          buttonRef.current.parentElement?.getBoundingClientRect();
        if (parentRect) {
          context.registerTab(value, {
            width: rect.width,
            left: rect.left - parentRect.left,
          });
        }
      }
    };

    // Initial position
    updateTabPosition();

    // Update position on resize
    window.addEventListener('resize', updateTabPosition);
    return () => window.removeEventListener('resize', updateTabPosition);
  }, [value, context.registerTab]);

  return (
    <button
      ref={buttonRef}
      role="tab"
      aria-selected={isSelected}
      className={twMerge(
        'px-4 py-2 text-alternative font-medium transition-colors duration-200 ease-[cubic-bezier(0,0,1,1)] ',
        isSelected && 'text-default',
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
    <div
      role="tabpanel"
      className={twMerge('pt-4', className)}
      style={{
        animation: 'fadeIn 250ms cubic-bezier(0,0,1,1)',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
      {children}
    </div>
  );
};
