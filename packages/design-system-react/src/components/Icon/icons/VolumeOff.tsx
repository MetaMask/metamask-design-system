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
    <path d="m19.8 22.6-3.025-3.025a8.3 8.3 0 0 1-1.325.688 9.5 9.5 0 0 1-1.45.462v-2.05q.35-.125.687-.25.338-.124.638-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4 18.4 18.4zm-.2-5.8-1.45-1.45a6.8 6.8 0 0 0 .637-1.625q.213-.85.213-1.75 0-2.35-1.375-4.2C16.25 5.925 15.5 5.708 14 5.275v-2.05q3.1.7 5.05 3.138C21 8.8 21 9.858 21 11.975q0 1.325-.363 2.55A8.8 8.8 0 0 1 19.6 16.8m-3.35-3.35L14 11.2V7.95a4.15 4.15 0 0 1 1.837 1.65q.663 1.1.663 2.4a4.3 4.3 0 0 1-.25 1.45M12 9.2 9.4 6.6 12 4zm-2 5.95V12.8L8.2 11H5v2h2.85z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeOff);
export default ForwardRef;
