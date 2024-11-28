import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M252 51C139 51 47 143 47 256s92 205 205 205c112 0 204-92 204-205S364 51 252 51m89 278c-3 5-8 8-14 8-2 0-5-1-7-3l-64-37c-16-10-27-31-27-49v-84c0-8 7-15 15-15s15 7 15 15v84c0 8 6 18 13 22l63 38c8 4 10 14 6 21" />
  </svg>
);
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
