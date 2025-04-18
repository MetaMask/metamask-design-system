import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgVolumeOff = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m19.8 22.829-3.025-3.025q-.625.4-1.325.688c-.7.288-.95.345-1.45.462v-2.05q.35-.125.687-.25c.337-.125.438-.183.638-.3L12 15.029v5.2l-5-5H3v-6h3.2l-4.8-4.8 1.4-1.4 18.4 18.4zm-.2-5.8-1.45-1.45q.425-.775.637-1.625c.212-.85.213-1.15.213-1.75q0-2.35-1.375-4.2T14 5.504v-2.05q3.1.7 5.05 3.137C21 9.028 21 10.087 21 12.204q0 1.325-.363 2.55c-.363 1.225-.587 1.575-1.037 2.275m-3.35-3.35L14 11.429v-3.25a4.15 4.15 0 0 1 1.837 1.65q.663 1.1.663 2.4a4.3 4.3 0 0 1-.25 1.45M12 9.429l-2.6-2.6 2.6-2.6zm-2 5.95v-2.35l-1.8-1.8H5v2h2.85z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeOff);
export default ForwardRef;
