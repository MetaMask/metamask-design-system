declare module '@metamask/jazzicon' {
  function jazzicon(diameter: number, seed: number | number[]): HTMLDivElement;
  export default jazzicon;
}

declare module '*.svg' {
  import type * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '@testing-library/dom' {
  export type Queries = any;
  export type BoundFunction<T = any> = (...args: any[]) => any;
  export const queries: Queries;
  export const screen: any;
  export const fireEvent: any;
  export function waitFor<T = any>(callback: () => T, options?: any): Promise<T>;
  export function waitForElementToBeRemoved<T = any>(callback: () => T, options?: any): Promise<void>;
  export function act(fn: () => any): Promise<any> | void;
  export function within(...args: any[]): any;
  export function configure(options: any): void;
  export function getConfig(): any;
}
