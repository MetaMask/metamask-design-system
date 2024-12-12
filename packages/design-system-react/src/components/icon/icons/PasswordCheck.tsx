import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPasswordCheck = (
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
    <path d="M374 92h-46V67c0-9-7-16-15-16s-15 7-15 16v378c0 9 7 16 15 16s15-7 15-16v-25h46c46 0 82-37 82-82V174c0-45-36-82-82-82m-235 0c-45 0-82 37-82 82v164c0 45 37 82 82 82h102c12 0 21-9 21-21V113c0-12-9-21-21-21zm3 172c-1 2-2 4-4 7-2 1-4 3-7 4-2 1-5 1-7 1-3 0-6 0-8-1-3-1-5-3-7-4-2-3-3-5-5-7-1-3-1-5-1-8 0-5 2-11 6-15 1 0 2-1 3-2s3-1 4-2c1 0 2-1 3-1 7-2 14 1 19 5 4 4 6 10 6 15 0 3-1 5-2 8m72 0c-1 2-2 4-4 7-2 1-5 3-7 4s-5 1-8 1c-2 0-5 0-8-1-2-1-4-3-6-4q-6-6-6-15c0-3 0-5 1-8 1-2 3-4 5-7 7-7 21-7 29 0 3 4 6 10 6 15 0 3-1 5-2 8" />
  </svg>
);
const ForwardRef = forwardRef(SvgPasswordCheck);
export default ForwardRef;
