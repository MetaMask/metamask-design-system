declare module '@metamask/jazzicon' {
  function jazzicon(diameter: number, seed: number | number[]): HTMLDivElement;
  export default jazzicon;
}

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  import type * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
