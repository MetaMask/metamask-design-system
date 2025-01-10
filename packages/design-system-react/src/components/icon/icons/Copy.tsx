import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M333 274v86c0 72-28 101-100 101h-86c-72 0-100-29-100-101v-86c0-71 28-100 100-100h86c72 0 100 29 100 100m23-223h-86c-63 0-93 23-99 77-1 11 8 20 20 20h42c86 0 126 40 126 126v43c0 11 9 21 21 19 54-6 76-35 76-98v-86c0-72-28-101-100-101" />
  </svg>
);
const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;
