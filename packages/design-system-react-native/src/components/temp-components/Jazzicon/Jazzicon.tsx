import React from 'react';
import { View, type ViewStyle } from 'react-native';
import RNJazzicon from 'react-native-jazzicon';

import type { JazziconProps } from './Jazzicon.types';

export const Jazzicon = ({ testID, ...props }: JazziconProps) => (
  <View testID={testID}>
    <RNJazzicon
      {...props}
      containerStyle={{
        borderRadius: 0, // Override circular border radius to make it square
        ...(props.containerStyle as ViewStyle),
      }}
    />
  </View>
);
