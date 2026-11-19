import type { TextPropsShared } from '@metamask/design-system-shared';
import type { TextProps as RNTextProps } from 'react-native';

/**
 * Text component props.
 */
export type TextProps = TextPropsShared &
  RNTextProps & {
    /**
     * @deprecated Use `className`. Will be removed in `@metamask/design-system-react-native` 1.0.0.
     */
    twClassName?: string;
    /**
     * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
     */
    className?: string;
  };
