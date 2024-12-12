import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M446 226 346 327c9 23 12 63-25 112-2 4-6 6-9 8-4 3-8 4-13 4h-2c-4 0-8-1-11-2-4-2-7-4-10-7l-90-90-80 80c-3 2-7 4-11 4s-8-2-11-4c-2-3-4-7-4-11s2-8 4-11l80-80-90-90c-3-3-5-7-7-11s-2-8-2-12q0-6 3-12c2-4 5-7 8-10 48-38 94-31 114-24L290 70c3-3 6-5 10-7 3-1 7-2 11-2s8 1 12 2c3 2 7 4 9 7l114 114c6 5 9 13 9 21q0 12-9 21" />
  </svg>
);
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;
