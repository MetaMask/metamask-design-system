import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTrendDown = (
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
    <path d="M337 51H166C91 51 47 96 47 170v172c0 74 44 119 119 119h171c75 0 119-45 119-119V170c0-74-44-119-119-119m14 253c0 2 0 3-1 5-1 4-4 7-7 8-2 1-4 1-6 1h-38c-8 0-14-6-14-14s6-15 14-15h4l-43-43-21 31c-3 4-7 6-11 7-4 0-8-1-11-4l-61-61c-6-6-6-15 0-21 5-5 14-5 20 0l49 49 21-31c2-4 6-6 10-6 5-1 8 1 11 4l56 55v-3c0-8 7-15 15-15s14 7 14 15v38z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrendDown);
export default ForwardRef;
