import type React from 'react';
import type { ViewProps } from 'react-native';

/**
 * ComponentName component props.
 */
export type ComponentNameProps = {
  /**
   * The content to be rendered within the ComponentName.
   */
  children?: React.ReactNode;
  /**
   * Additional Tailwind CSS classes to be applied to the ComponentName component.
   */
  twClassName?: string;
  /**
   * Inline styles to be applied to the ComponentName component.
   */
  style?: ViewProps['style'];
} & Omit<ViewProps, 'style' | 'children'>;