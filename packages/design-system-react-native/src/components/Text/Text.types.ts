import type { TextPropsShared } from '@metamask/design-system-shared';
import type { TextProps as RNTextProps } from 'react-native';

/**
 * Text component props.
 */
export type TextProps = TextPropsShared &
  RNTextProps & {
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
