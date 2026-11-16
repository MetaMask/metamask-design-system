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
     * @deprecated Use `className`.
     */
    twClassName?: string;
    /**
     * Optional prop for additional CSS classes to be applied to the Text component.
     */
    className?: string;
  };
