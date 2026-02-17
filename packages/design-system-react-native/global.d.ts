declare module '*.svg' {
  import type * as React from 'react';
  import type { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare namespace jest {
  interface Matchers<R> {
    toIncludeStyle(expectedStyle: Record<string, unknown>): R;
    toResolveToStyle(expectedStyle: Record<string, unknown>): R;
  }
}
