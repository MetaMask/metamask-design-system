import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCalculator = (
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
    <path d="M333 51H170C113 51 67 97 67 154v204c0 57 46 103 103 103h163c57 0 103-46 103-103V154c0-57-46-103-103-103M187 392c-4 4-9 6-14 6q-9 0-15-6t-6-15c0-5 2-10 6-14 2-2 4-4 7-5 5-2 11-2 16 0 1 1 2 1 3 2l3 3c4 4 6 9 6 14q0 9-6 15m-35-97c0-2 1-5 2-7 1-3 2-5 4-7 5-5 12-7 19-6 1 0 2 1 4 1 1 1 2 2 3 2l3 3c2 2 4 4 5 7 1 2 1 5 1 7q0 9-6 15c-4 4-9 6-14 6-3 0-6-1-8-2-3-1-5-2-7-4q-6-6-6-15m117 97c-2 2-4 3-6 4-3 1-6 2-8 2q-9 0-15-6t-6-15c0-1 0-2 1-4 0-1 0-2 1-4 0-1 1-2 2-3 0-1 1-2 2-3 2-2 4-4 7-5 7-3 16-1 22 5 4 4 6 9 6 14q0 9-6 15m0-82c-4 4-9 6-14 6q-9 0-15-6t-6-15c0-5 2-10 6-14 8-8 22-8 29 0 2 2 4 4 5 7 1 2 1 5 1 7q0 9-6 15m-79-86c-21 0-38-17-38-38v-21c0-21 17-38 38-38h123c21 0 38 17 38 38v21c0 21-17 38-38 38zm161 168c-4 4-9 6-14 6-3 0-6-1-8-2-3-1-5-2-7-4q-6-6-6-15c0-5 2-10 6-14 6-6 15-8 23-5 2 1 4 3 6 5 4 4 6 9 6 14q0 9-6 15m5-89c-1 3-3 5-5 7-4 4-9 6-14 6q-9 0-15-6t-6-15c0-5 2-10 6-14 8-8 21-8 29 0 4 4 6 9 6 14 0 3 0 6-1 8" />
  </svg>
);
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;
