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
    ref={ref}
    {...props}
  >
    <path d="m101 323 220-220c8-8 8-22 0-30-29-29-75-29-104 0L71 219c-29 29-29 75 0 104 8 8 22 8 30 0m269-201 62 62c29 29 29 75 0 104L290 430h151c8 0 15 7 15 15 0 9-7 16-15 16H62c-8 0-15-7-15-16 0-8 7-15 15-15h116l-58-58c-9-9-9-22 0-30l220-220c8-9 21-9 30 0M242 394l25-25c5-5 5-14 0-19s-14-5-19 0l-25 25c-5 6-5 14 0 19 6 5 14 5 19 0m56-56 50-50c6-5 6-14 0-19-5-5-13-5-18 0l-50 50c-6 5-6 14 0 19 5 5 13 5 18 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgCardPos);
export default ForwardRef;
