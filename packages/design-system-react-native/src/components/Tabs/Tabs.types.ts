import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface TabsProps {
  /**
   * The default selected tab value when initially rendered
   */
  defaultValue?: string;
  /**
   * The controlled value of the tab to activate
   */
  value?: string;
  /**
   * Callback that fires when the tab value changes
   */
  onValueChange?: (value: string) => void;
  /**
   * The content of the tabs component
   */
  children: ReactNode;
  /**
   * Optional styles to apply to the container
   */
  style?: StyleProp<ViewStyle>;
}

export interface TabsListProps {
  /**
   * The content of the tabs list
   */
  children: ReactNode;
  /**
   * Optional styles to apply to the container
   */
  style?: StyleProp<ViewStyle>;
}

export interface TabsTriggerProps {
  /**
   * The value of the tab that this trigger activates
   */
  value: string;
  /**
   * The content of the tab trigger
   */
  children: ReactNode;
  /**
   * Optional styles to apply to the container
   */
  style?: StyleProp<ViewStyle>;
}

export interface TabsContentProps {
  /**
   * The value of the tab that this content belongs to
   */
  value: string;
  /**
   * The content to display when this tab is active
   */
  children: ReactNode;
  /**
   * Optional styles to apply to the container
   */
  style?: StyleProp<ViewStyle>;
}
