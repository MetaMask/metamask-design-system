import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowDown = (
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
    <path d="m2.138 7.773 1.775-1.775 8.225 8.225 8.225-8.225 1.775 1.775-10 10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
