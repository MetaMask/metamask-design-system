declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  import type * as React from 'react';
  import type { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}
