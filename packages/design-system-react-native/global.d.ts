declare module '*.svg' {
  import type * as React from 'react';
  import type { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare namespace jest {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Matchers<TResult> {
    toIncludeStyle(expectedStyle: Record<string, unknown>): TResult;
    toResolveToStyle(expectedStyle: Record<string, unknown>): TResult;
  }
}
