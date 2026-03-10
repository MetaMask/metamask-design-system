/**
 * TypeScript type definitions for @testing-library/react-native custom matchers
 * Provides types for matchers like toHaveStyle(), toBeOnTheScreen(), etc.
 * Runtime import is in jest.setup.js
 */
// eslint-disable-next-line spaced-comment
/// <reference types="@testing-library/react-native/extend-expect" />

declare module '*.svg' {
  import type * as React from 'react';
  import type { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}
