import React, { createContext, useContext, useState, useRef } from 'react';
import {
  View,
  Pressable,
  Animated,
  LayoutChangeEvent,
  Easing,
} from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import Text from '../Text';
import { TextVariant, FontWeight } from '../Text';
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from './Tabs.types';

interface TabPosition {
  width: number;
  x: number;
}

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  registerTab: (value: string, position: TabPosition) => void;
  translateX: Animated.Value;
  scaleX: Animated.Value;
  initialWidth: number;
  contentOpacity: Animated.Value;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

// Custom easing functions to match cubic-bezier curves
const easeInOut = Easing.bezier(0.7, 0, 0.15, 1);
const linear = Easing.bezier(0, 0, 1, 1);

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
  const [initialWidth, setInitialWidth] = useState(0);
  const tw = useTailwind();
  const tabPositions = useRef(new Map<string, TabPosition>());
  const translateX = useRef(new Animated.Value(0)).current;
  const scaleX = useRef(new Animated.Value(1)).current;
  const contentOpacity = useRef(new Animated.Value(1)).current;

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    // Update state immediately
    setUncontrolledValue(newValue);
    onValueChange?.(newValue);

    const position = tabPositions.current.get(newValue);
    if (position) {
      // Animate the underline immediately
      Animated.timing(translateX, {
        toValue: position.x,
        duration: 200,
        easing: easeInOut,
        useNativeDriver: true,
      }).start();

      Animated.timing(scaleX, {
        toValue: position.width / (initialWidth || position.width),
        duration: 200,
        easing: easeInOut,
        useNativeDriver: true,
      }).start();

      // Handle content transition separately
      Animated.sequence([
        Animated.timing(contentOpacity, {
          toValue: 0,
          duration: 100,
          easing: linear,
          useNativeDriver: true,
        }),
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 150,
          easing: linear,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const registerTab = (tabValue: string, position: TabPosition) => {
    tabPositions.current.set(tabValue, position);
    if (tabValue === value) {
      translateX.setValue(position.x);
      setInitialWidth(position.width);
    }
  };

  return (
    <TabsContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
        registerTab,
        translateX,
        scaleX,
        initialWidth,
        contentOpacity,
      }}
    >
      <View style={[tw`w-full`, style]}>{children}</View>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children, style }) => {
  const tw = useTailwind();
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('TabsList must be used within a Tabs component');
  }

  return (
    <View style={[tw`relative`, style]}>
      <View style={tw`flex-row border-b border-border-muted`}>{children}</View>
      <Animated.View
        style={[
          tw`absolute h-0.5 bg-primary-default`,
          {
            bottom: -1,
            width: context.initialWidth,
            transform: [
              { translateX: context.translateX },
              { scaleX: context.scaleX },
            ],
          },
        ]}
      />
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

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, x } = event.nativeEvent.layout;
    context.registerTab(value, { width, x });
  };

  return (
    <Pressable
      onLayout={onLayout}
      accessibilityRole="tab"
      accessibilityState={{ selected: isSelected }}
      onPress={() => context.onValueChange(value)}
      style={({ pressed }) => [
        tw`px-4 py-2`,
        {
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
    >
      <Text
        variant={TextVariant.BodyMd}
        fontWeight={FontWeight.Medium}
        style={[
          tw`text-center`,
          tw`${isSelected ? 'text-text-default' : 'text-text-alternative'}`,
        ]}
      >
        {children}
      </Text>
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
    <Animated.View
      style={[
        tw`pt-4`,
        style,
        {
          opacity: context.contentOpacity,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};
