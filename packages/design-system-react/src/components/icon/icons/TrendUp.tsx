import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTrendUp = (
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
    <path d="M337 51H166C91 51 47 96 47 170v172c0 74 44 119 119 119h171c75 0 119-45 119-119V170c0-74-44-119-119-119m14 195c0 8-6 15-14 15s-14-7-14-15v-3l-56 55c-3 3-7 5-11 4-5 0-9-2-11-6l-21-31-48 49c-3 3-7 4-10 4-4 0-8-2-11-4-5-6-5-15 0-21l62-61c3-3 7-4 11-4 4 1 8 3 10 7l21 31 44-43h-4c-8 0-15-7-15-15s7-14 15-14h38c2 0 4 0 5 1 4 1 7 4 8 8 1 2 1 3 1 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrendUp);
export default ForwardRef;
