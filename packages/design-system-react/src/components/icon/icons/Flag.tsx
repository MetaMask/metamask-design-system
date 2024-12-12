import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M317 157 153 86V67c0-9-7-16-15-16-9 0-15 7-15 16v378c0 9 6 16 15 16 8 0 15-7 15-16v-81l169-83c34-17 52-40 51-64s-21-45-56-60" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
