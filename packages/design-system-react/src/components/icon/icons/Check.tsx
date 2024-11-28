import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M203 384c-5 0-8-2-11-5L85 267c-7-6-7-16 0-22 6-7 16-7 22 0l95 99 203-211c6-7 16-7 22 0 7 6 7 16 0 22L214 379c-3 3-8 5-11 5" />
  </svg>
);
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
