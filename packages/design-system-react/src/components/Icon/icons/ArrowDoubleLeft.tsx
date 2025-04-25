import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowDoubleLeft = (
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
    <path d="m17.7 4.886-5 7 5 7h-2.45l-5-7 5-7zm-5.95 0-5 7 5 7H9.3l-5-7 5-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDoubleLeft);
export default ForwardRef;
