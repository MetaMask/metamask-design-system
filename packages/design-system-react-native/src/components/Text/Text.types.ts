import type { TextPropsShared } from '@metamask/design-system-shared';
import type { TextProps as RNTextProps } from 'react-native';

/**
 * Text component props.
 */
export type TextProps = TextPropsShared &
  RNTextProps & {
    /**
     * Optional prop to add twrnc overriding classNames.
     *
     * @deprecated Use `className` instead. `twClassName` remains supported for existing callers and will be removed in a future major version.
     */
    twClassName?: string;
    /**
     * Tailwind classes from `@metamask/design-system-twrnc-preset`.
     * Applied after `twClassName` when both are set, so these classes win.
     */
    className?: string;
  };
