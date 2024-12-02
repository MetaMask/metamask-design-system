/**
 * @file This file is used to define the types for the MDX files in the stories directory.
 */
declare module '*.mdx' {
  import type { ComponentType, ReactNode } from 'react';

  type MdxModule = {
    readonly default: ComponentType;
    readonly meta?: Record<string, unknown>;
    readonly toc?: { url: string; content: ReactNode }[];
  };

  const content: MdxModule;
  export default content;
}
