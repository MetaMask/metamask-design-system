import React from 'react';
import { View } from 'react-native';
import RNJazzicon from 'react-native-jazzicon';

import type { JazziconProps } from './Jazzicon.types';

export const Jazzicon = ({ testID, ...props }: JazziconProps) => (
  <View testID={testID}>
    <RNJazzicon {...props} />
  </View>
);
