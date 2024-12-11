import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgKey = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M411 97c-61-61-159-61-219 0-42 42-55 102-39 155l-96 97c-7 7-12 20-10 30l6 45c2 14 16 28 31 30l44 7c10 1 24-3 31-11l17-16c4-4 4-11 0-15l-40-40c-6-6-6-15 0-21s16-6 22 0l40 40c4 3 10 3 14 0l43-44c53 17 114 4 156-38 60-60 60-159 0-219M303 256c-29 0-51-23-51-51s22-51 51-51c28 0 51 23 51 51s-23 51-51 51" />
  </svg>
);
const ForwardRef = forwardRef(SvgKey);
export default ForwardRef;
