import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSwapVertical = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M220 163c-4 0-8-1-11-4l-65-66-66 66c-6 6-16 6-21 0-6-6-6-16 0-22l76-76c3-3 6-5 11-5 4 0 8 2 10 5l77 76c6 6 6 16 0 22-3 3-7 4-11 4m-76 293c-9 0-16-7-16-16V72c0-9 7-16 16-16 8 0 15 7 15 16v368c0 9-7 16-15 16m216 0c-4 0-8-2-11-5l-76-76c-6-6-6-16 0-22s15-6 21 0l66 66 65-66c6-6 16-6 22 0s6 16 0 22l-77 76c-2 3-6 5-10 5m-1 0c-8 0-15-7-15-16V72c0-9 7-16 15-16 9 0 16 7 16 16v368c0 9-7 16-16 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwapVertical);
export default ForwardRef;
