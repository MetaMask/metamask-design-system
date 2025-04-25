import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStarFilled = (
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
    <path d="m5.825 21 1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625 7.2.625-5.45 4.725L18.175 21 12 17.275z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStarFilled);
export default ForwardRef;
