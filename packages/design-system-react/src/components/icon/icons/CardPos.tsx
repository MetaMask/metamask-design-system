import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCardPos = (
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
    <path d="M456 445c0 9-7 16-15 16H62c-8 0-15-7-15-16 0-8 7-15 15-15h379c8 0 15 7 15 15M321 103 101 323c-8 8-22 8-30 0-29-29-29-75 0-104L217 73c29-29 75-29 104 0 8 8 8 22 0 30m111 81-62-62c-9-9-22-9-30 0L120 342c-9 8-9 21 0 30l62 62c29 29 75 29 104 0l146-146c29-29 29-75 0-104M267 369l-25 25c-5 5-13 5-19 0-5-5-5-13 0-19l25-25c5-5 14-5 19 0s5 14 0 19m81-81-50 50c-5 5-13 5-18 0-6-5-6-14 0-19l50-50c5-5 13-5 18 0 6 5 6 14 0 19" />
  </svg>
);
const ForwardRef = forwardRef(SvgCardPos);
export default ForwardRef;
