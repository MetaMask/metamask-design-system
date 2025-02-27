/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react';
import RNJazzicon from 'react-native-jazzicon';

import type { JazziconProps } from './Jazzicon.types';

const Jazzicon = ({ ...props }: JazziconProps) => {
  return <RNJazzicon {...props} />;
};

export default Jazzicon;
