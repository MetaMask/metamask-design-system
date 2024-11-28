import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnapsMobile = (
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
    <path d="M337 51H166C91 51 47 96 47 170v172c0 74 44 119 119 119h171c75 0 119-45 119-119V170c1-74-44-119-119-119m-94 303c0 6-3 12-9 15-2 2-6 3-9 3-2 0-5-1-8-2l-72-36c-10-5-16-16-16-27v-68c0-6 3-12 8-15s12-4 17-1l72 36c10 5 17 16 17 27zm-4-109-78-42c-5-3-9-9-9-16 0-6 4-13 9-16l78-41c8-4 17-4 26 0l77 41c5 3 9 9 9 16s-4 13-9 16l-77 42c-5 2-9 3-14 3q-6 0-12-3m136 62c0 11-7 22-17 27l-72 36c-3 1-5 2-8 2s-7-1-9-3c-6-3-9-9-9-15v-68c0-11 7-22 17-27l72-36c5-3 12-2 17 1s9 9 9 15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnapsMobile);
export default ForwardRef;
