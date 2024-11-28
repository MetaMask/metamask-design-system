import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFullCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M85 256c0 94 77 171 171 171s171-77 171-171S350 85 256 85 85 162 85 256M256 43C138 43 43 138 43 256s95 213 213 213 213-95 213-213S374 43 256 43" />
  </svg>
);
const ForwardRef = forwardRef(SvgFullCircle);
export default ForwardRef;
