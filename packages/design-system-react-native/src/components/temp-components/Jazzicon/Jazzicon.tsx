import { extractAccountAddress } from '@metamask/design-system-shared';
import React from 'react';
import { View, type ViewStyle } from 'react-native';
import RNJazzicon from 'react-native-jazzicon';

import type { JazziconProps } from './Jazzicon.types';

export const Jazzicon = ({ testID, address, ...props }: JazziconProps) => {
  // Extract the account address from CAIP-10 format if needed
  const accountAddress = address ? extractAccountAddress(address) : '';

  return (
    <View testID={testID}>
      <RNJazzicon
        {...props}
        address={accountAddress}
        containerStyle={{
          borderRadius: 0, // Override circular border radius to make it square
          ...(props.containerStyle as ViewStyle),
        }}
      />
    </View>
  );
};
