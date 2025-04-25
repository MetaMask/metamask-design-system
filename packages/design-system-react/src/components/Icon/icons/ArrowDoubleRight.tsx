import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowDoubleRight = (
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
    <path d="m6.3 18.886 5-7-5-7h2.45l5 7-5 7zm5.95 0 5-7-5-7h2.45l5 7-5 7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDoubleRight);
export default ForwardRef;
