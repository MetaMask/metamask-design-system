import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMinusSquare = (
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
    <path d="M337 51H166C91 51 47 96 47 170v172c0 74 44 119 119 119h171c75 0 119-45 119-119V170c1-74-44-119-119-119m-3 220H170c-9 0-16-7-16-15s7-15 16-15h164c8 0 15 7 15 15s-7 15-15 15" />
  </svg>
);
const ForwardRef = forwardRef(SvgMinusSquare);
export default ForwardRef;
