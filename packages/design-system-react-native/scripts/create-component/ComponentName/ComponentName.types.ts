import type { ViewProps } from 'react-native';

export type ComponentNameProps = {
  /**
   * The content to be rendered within the ComponentName.
   */
  children?: React.ReactNode;
  /**
   * Additional Tailwind classes to be applied to the ComponentName component.
   */
  twClassName?: string;
} & ViewProps;
