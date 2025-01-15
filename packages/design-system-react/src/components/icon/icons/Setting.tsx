import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSetting = (
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
    <path d="M417 199c-37 0-52-26-33-58 10-19 4-43-15-53l-35-21c-16-9-37-4-47 13l-2 4c-19 32-49 32-67 0l-3-4c-9-17-30-22-46-13l-35 21c-19 10-25 34-15 53 19 32 4 58-33 58-22 0-39 17-39 39v36c0 21 17 39 39 39 37 0 52 26 33 58-10 19-4 43 15 53l35 21c16 9 37 4 47-13l2-4c18-32 49-32 67 0l3 4c9 17 30 22 46 13l36-21c18-10 25-34 14-53-19-32-3-58 34-58 21 0 39-17 39-39v-36c-1-21-18-39-40-39M252 323c-37 0-67-30-67-67s30-67 67-67c36 0 66 30 66 67s-30 67-66 67" />
  </svg>
);
const ForwardRef = forwardRef(SvgSetting);
export default ForwardRef;
