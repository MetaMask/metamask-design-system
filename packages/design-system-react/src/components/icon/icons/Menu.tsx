import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M441 165H62c-8 0-15-7-15-16s7-16 15-16h379c8 0 15 7 15 16s-7 16-15 16m0 107H62c-8 0-15-7-15-16s7-16 15-16h379c8 0 15 7 15 16s-7 16-15 16m0 107H62c-8 0-15-7-15-16s7-16 15-16h379c8 0 15 7 15 16s-7 16-15 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;
