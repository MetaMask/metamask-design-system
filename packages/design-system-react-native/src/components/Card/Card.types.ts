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
       * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
       */
      twClassName?: string;
      /**
       * Tailwind classes from `@metamask/design-system-twrnc-preset`.
       * Applied after `twClassName` when both are set, so these classes win.
       */
      className?: string;
      isInteractive?: false;
    } & ViewProps)
  | ({
      children: ReactNode;
      /**
       * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
       */
      twClassName?: string;
      /**
       * Tailwind classes from `@metamask/design-system-twrnc-preset`.
       * Applied after `twClassName` when both are set, so these classes win.
       */
      className?: string;
      isInteractive: true;
    } & Omit<PressableProps, 'children'>);
