import {
  extractAccountAddress,
  generateIconSeed,
} from '@metamask/design-system-shared';
import React from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import RNJazziconModule from 'react-native-jazzicon';

import type { JazziconProps } from './Jazzicon.types.js';

// `react-native-jazzicon` is CommonJS that sets `exports.default`. Node-style
// ESM interop (Node, Vite, webpack) returns the whole `module.exports` object
// as the default import, while Metro and Babel unwrap `default`.
const RNJazzicon =
  (RNJazziconModule as unknown as { default?: typeof RNJazziconModule })
    .default ?? RNJazziconModule;

export const Jazzicon = ({ testID, address, ...props }: JazziconProps) => {
  // Extract the account address from CAIP-10 format if needed
  const accountAddress = address ? extractAccountAddress(address) : '';

  // Generate appropriate seed based on address format (matches MetaMask Mobile)
  const seed = generateIconSeed(accountAddress);

  return (
    <View testID={testID}>
      <RNJazzicon
        {...props}
        // @ts-expect-error The underlying PRNG supports the seed being an array but the component is typed wrong.
        seed={seed}
        containerStyle={{
          borderRadius: 0, // Override circular border radius to make it square
          ...(props.containerStyle as ViewStyle),
        }}
      />
    </View>
  );
};
