import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSwapHorizontal = (
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
    <path d="m7 20-5-5 5-5 1.4 1.425L5.825 14H13v2H5.825L8.4 18.575zm10-6-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425 17 4l5 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwapHorizontal);
export default ForwardRef;
