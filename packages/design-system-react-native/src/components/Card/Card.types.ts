import type { ReactNode } from 'react';
import type { PressableProps, ViewProps } from 'react-native';

/**
 * Card component props.
 *
 * When `isInteractive` is `false` (default), the root is a `View`.
 * When `true`, the root is a `Pressable` and all `PressableProps` are available.
 */
export type CardProps =
  | ({
      children: ReactNode;
      twClassName?: string;
      isInteractive?: false;
    } & ViewProps)
  | ({
      children: ReactNode;
      twClassName?: string;
      isInteractive: true;
    } & Omit<PressableProps, 'children'>);
