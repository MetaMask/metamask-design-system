import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSend1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m336 71-185 61c-124 42-124 110 0 151l55 18 18 55c42 124 110 124 151 0l62-185c27-83-18-128-101-100m7 110-78 78c-3 3-7 5-11 5s-8-2-11-5c-6-6-6-15 0-21l78-79c6-6 16-6 22 0s6 16 0 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgSend1);
export default ForwardRef;
