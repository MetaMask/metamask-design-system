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
      /**
       * @deprecated Use `className` instead.
       */
      twClassName?: string;
      /**
       * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
       */
      className?: string;
      isInteractive?: false;
    } & ViewProps)
  | ({
      children: ReactNode;
      /**
       * @deprecated Use `className` instead.
       */
      twClassName?: string;
      /**
       * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
       */
      className?: string;
      isInteractive: true;
    } & Omit<PressableProps, 'children'>);
