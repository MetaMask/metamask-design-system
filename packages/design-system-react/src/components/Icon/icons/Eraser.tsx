import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M436 461H292c-8 0-15-7-15-16 0-8 7-15 15-15h144c9 0 16 7 16 15 0 9-7 16-16 16M285 352c8 8 8 21 0 29l-61 61c-23 23-59 24-83 4-2-1-3-3-4-4l-72-72c-2-1-3-3-4-4-20-24-19-60 4-83l61-61c8-8 21-8 29 0zm153-124L336 331c-8 8-21 8-29 0L177 200c-8-7-8-20 0-29L279 69c24-24 63-24 87 0l72 72c24 24 24 63 0 87" />
  </svg>
);
const ForwardRef = forwardRef(SvgEraser);
export default ForwardRef;
