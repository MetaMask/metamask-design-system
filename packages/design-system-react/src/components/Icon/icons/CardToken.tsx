import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCardToken = (
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
    <path d="M257 329v2c0 6-4 10-10 10H68c-5 0-9-4-9-10v-2c0-35 7-43 43-43h111c36 0 44 8 44 43M68 361c-5 0-9 4-9 10v39c0 36 7 44 43 44h111c36 0 44-8 44-44v-39c0-6-4-10-10-10zm201-222 63-27c2-2 6-2 10 0l64 27c6 2 10-3 6-9l-66-81c-4-6-12-6-16 0l-65 81c-6 6-2 11 4 9m0 76 63 27c2 2 6 2 10 0l64-27c6-2 10 3 6 9l-66 81c-4 6-12 6-16 0l-65-81c-6-6-2-11 4-9m67-72-69 34 69 34 70-34zm-19 326c-6 0-10-2-14-8q-3-6 0-15l19-36c4-8 14-10 20-6 8 4 10 14 6 20l-6 10c56-12 96-61 96-121 0-8 5-16 15-16s16 6 16 16c2 87-67 156-152 156M59 213c-8 0-16-8-16-16 0-85 69-154 154-154 6 0 10 2 14 8q3 6 0 15l-20 36c-3 8-13 10-19 6-8-4-10-14-6-20l6-10c-58 12-98 59-98 119 0 8-8 16-15 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgCardToken);
export default ForwardRef;
