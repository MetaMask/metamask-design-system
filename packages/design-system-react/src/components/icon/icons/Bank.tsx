import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M456 399v62H47v-62c0-11 9-20 20-20h369c11 0 20 9 20 20M149 236h-41v143h41zm82 0h-41v143h41zm82 0h-41v143h41zm82 0h-41v143h41zm82 240H26c-8 0-15-7-15-15 0-9 7-16 15-16h451c8 0 15 7 15 16 0 8-7 15-15 15m-34-348L259 54c-4-1-11-1-15 0L60 128c-8 3-13 11-13 19v68c0 11 9 21 20 21h369c11 0 20-10 20-21v-68c0-8-5-16-13-19m-191 56c-17 0-31-13-31-30s14-31 31-31 30 14 30 31-13 30-30 30" />
  </svg>
);
const ForwardRef = forwardRef(SvgBank);
export default ForwardRef;
