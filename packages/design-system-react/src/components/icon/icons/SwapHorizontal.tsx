import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSwapHorizontal = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M360 240c-4 0-8-2-11-5-6-6-6-16 0-22l65-65-65-65c-6-6-6-16 0-22s16-6 21 0l77 76c3 3 4 7 4 11s-1 8-4 11l-77 76c-3 3-6 5-10 5m76-77H67c-8 0-15-7-15-15s7-15 15-15h369c8 0 15 7 15 15s-7 15-15 15M143 456c-4 0-7-2-10-5l-77-76c-3-3-4-7-4-11s1-8 4-11l77-76c5-6 15-6 21 0s6 16 0 22l-65 65 65 65c6 6 6 16 0 22-3 3-7 5-11 5m293-77H67c-8 0-15-7-15-15s7-15 15-15h369c8 0 15 7 15 15s-7 15-15 15" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwapHorizontal);
export default ForwardRef;
