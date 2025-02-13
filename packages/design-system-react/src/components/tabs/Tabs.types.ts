import type { ReactNode } from 'react';

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
   * Additional class names to apply
   */
  className?: string;
}

export interface TabsListProps {
  /**
   * The content of the tabs list
   */
  children: ReactNode;
  /**
   * Additional class names to apply
   */
  className?: string;
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
   * Additional class names to apply
   */
  className?: string;
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
   * Additional class names to apply
   */
  className?: string;
}
