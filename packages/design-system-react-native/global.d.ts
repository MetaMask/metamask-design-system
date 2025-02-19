declare module '*.svg' {
  import type * as React from 'react';
  import type { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'blockies-react-svg' {
  import * as React from 'react';

  export interface BlockiesProps {
    seed: string;
    size?: number;
    scale?: number;
    // add other props if needed
  }

  const Blockies: React.FC<BlockiesProps>;
  export default Blockies;
}
