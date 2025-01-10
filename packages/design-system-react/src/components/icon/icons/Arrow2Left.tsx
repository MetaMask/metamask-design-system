import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Left = (
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
    <path d="M202 405c-7 0-11-2-16-6L49 271c-9-9-9-21 0-30l137-128c9-8 23-8 32 0s9 21 0 29l-99 93h328c13 0 22 8 22 21s-9 21-22 21H119l99 93c9 8 9 21 0 29-5 4-11 6-16 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Left);
export default ForwardRef;
