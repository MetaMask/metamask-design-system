import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowDoubleRight = (
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
    <path d="M258 448c-7 0-12-2-16-6-10-9-10-22 0-31l152-140c5-4 7-9 7-15s-2-11-7-15L242 101c-10-9-10-22 0-31 9-8 23-8 33 0l152 141q21 19.5 21 45c0 17-7 35-21 45L275 442c-5 4-10 6-17 6m-171 0c-7 0-11-2-16-6-9-9-9-22 0-31l152-140c5-4 7-9 7-15s-2-11-7-15L71 101c-9-9-9-22 0-31 9-8 23-8 33 0l152 141q21 19.5 21 45c0 17-7 35-21 45L104 442c-5 4-10 6-17 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDoubleRight);
export default ForwardRef;
