import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTwitter = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M299 85c19-8 40-9 59-4 15 4 29 11 41 21 13-5 25-12 37-20 7-5 17-5 24 0s11 14 9 23c-6 24-18 47-35 66v7c0 108-52 187-127 227-74 40-169 39-253-8-9-4-13-14-11-24 3-9 12-16 22-15 26 1 52-4 77-14-24-16-41-34-54-54-18-28-24-58-26-85-1-26 3-50 8-68 2-8 4-15 6-20 1-3 2-5 2-6 1-1 1-1 1-2v-1l20 9-20-9q6-10.5 18-12c7-1 15 2 19 9 16 22 61 52 61 52s38 15 58 17c0-19 6-37 17-52 11-17 28-30 47-37" />
  </svg>
);
const ForwardRef = forwardRef(SvgTwitter);
export default ForwardRef;