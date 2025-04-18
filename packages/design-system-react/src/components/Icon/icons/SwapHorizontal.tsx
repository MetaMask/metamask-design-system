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
    <path d="m7 19.886-5-5 5-5 1.4 1.425-2.575 2.575H13v2H5.825L8.4 18.46zm10-6-1.4-1.425 2.575-2.576H11v-2h7.175L15.6 5.312 17 3.886l5 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwapHorizontal);
export default ForwardRef;
