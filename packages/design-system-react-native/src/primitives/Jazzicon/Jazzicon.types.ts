import { IJazziconProps } from 'react-native-jazzicon';

/**
 * Jazzicon component props.
 */
export type JazziconProps = {
  /**
   * Optional prop used to locate this view in end-to-end tests.
   */
  testID?: string | undefined;
} & IJazziconProps;
