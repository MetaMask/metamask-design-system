import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 14.886q1.25 0 2.125-.875c.875-.875.875-1.292.875-2.125s-.292-1.542-.875-2.125Q13.25 8.886 12 8.886c-1.25 0-1.542.291-2.125.875Q9 10.635 9 11.886c0 1.25.292 1.541.875 2.125a2.9 2.9 0 0 0 2.125.875m0 2q-2.075 0-3.537-1.463C7 13.96 7 13.269 7 11.886s.488-2.563 1.463-3.538S10.617 6.886 12 6.886s2.563.487 3.538 1.462S17 10.502 17 11.886s-.487 2.562-1.462 3.537-2.155 1.463-3.538 1.463m-7-4H1v-2h4zm18 0h-4v-2h4zm-12-8v-4h2v4zm0 18v-4h2v4zM6.4 7.636 3.875 5.21 5.3 3.736l2.4 2.5zm12.3 12.4-2.425-2.526 1.325-1.375 2.525 2.425zm-2.45-13.75 2.425-2.526 1.475 1.425-2.5 2.4zm-12.4 12.3 2.525-2.425 1.375 1.324-2.425 2.525z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLight);
export default ForwardRef;
