import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAddSquare = (
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
    <path d="M337 51H166C91 51 47 96 47 170v172c0 74 44 119 119 119h171c75 0 119-45 119-119V170c1-74-44-119-119-119m-3 220h-67v67c0 8-7 15-15 15-9 0-16-7-16-15v-67h-66c-9 0-16-7-16-15s7-15 16-15h66v-67c0-8 7-15 16-15 8 0 15 7 15 15v67h67c8 0 15 7 15 15s-7 15-15 15" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddSquare);
export default ForwardRef;
