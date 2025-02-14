import React, { createContext, useContext, useState } from 'react';
import { View, Pressable } from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import Text from '../Text';
import { TextVariant } from '../Text';
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
  style,
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue || '',
  );
  const tw = useTailwind();

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const handleValueChange = (newValue: string) => {
    setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <View style={[tw`w-full`, style]}>{children}</View>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children, style }) => {
  const tw = useTailwind();

  return (
    <View
      accessibilityRole="tablist"
      style={[tw`flex-row border-b border-border-muted`, style]}
    >
      {children}
    </View>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  style,
}) => {
  const context = useContext(TabsContext);
  const tw = useTailwind();

  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const isSelected = context.value === value;

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: isSelected }}
      onPress={() => context.onValueChange(value)}
      style={({ pressed }) => [
        tw`px-4 py-2 relative`,
        {
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
    >
      <Text
        variant={TextVariant.BodyMd}
        style={[
          tw`text-center`,
          tw`${isSelected ? 'text-text-default' : 'text-text-alternative'}`,
          { fontWeight: '500' },
        ]}
      >
        {children}
      </Text>
      {isSelected && (
        <View
          style={[
            tw`absolute inset-x-0 bottom-[-1px] h-0.5 bg-primary-default`,
          ]}
        />
      )}
    </Pressable>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  style,
}) => {
  const context = useContext(TabsContext);
  const tw = useTailwind();

  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  if (context.value !== value) {
    return null;
  }

  return (
    <View accessibilityRole="tabpanel" style={[tw`pt-4`, style]}>
      {children}
    </View>
  );
};
