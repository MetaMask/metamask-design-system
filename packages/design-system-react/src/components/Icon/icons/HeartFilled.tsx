import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHeartFilled = (
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
    <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925c-1.65-1.65-1.975-2.088-2.625-2.963S2.646 11.133 2.388 10.4A6.7 6.7 0 0 1 2 8.15Q2 5.8 3.575 4.225C5.15 2.65 5.933 2.65 7.5 2.65a5.8 5.8 0 0 1 2.475.55A5.9 5.9 0 0 1 12 4.75a5.9 5.9 0 0 1 2.025-1.55 5.8 5.8 0 0 1 2.475-.55q2.35 0 3.925 1.575C22 5.8 22 6.583 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412c-.975 1.312-1.525 1.863-2.625 2.963s-2.492 2.408-4.175 3.925z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHeartFilled);
export default ForwardRef;
