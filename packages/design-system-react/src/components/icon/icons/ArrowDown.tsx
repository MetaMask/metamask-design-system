import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowDown = (
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
    <path d="M256 363q-25.5 0-45-21L70 192c-8-10-8-26 0-36 9-9 22-9 31 0l140 153c9 9 21 9 30 0l140-153c9-9 22-9 31 0 8 10 8 24 0 33L301 342q-19.5 21-45 21" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
