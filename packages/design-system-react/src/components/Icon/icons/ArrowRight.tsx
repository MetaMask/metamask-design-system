import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowRight = (
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
    <path d="M8.025 21.886 6.25 20.11l8.225-8.225L6.25 3.66l1.775-1.775 10 10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
