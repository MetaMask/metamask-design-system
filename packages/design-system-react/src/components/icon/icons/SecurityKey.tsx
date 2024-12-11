import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecurityKey = (
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
    <path d="M385 96 273 53c-12-4-31-4-43 0L118 96c-22 8-40 33-40 56v166c0 17 11 39 25 49l112 84c20 15 53 15 73 0l112-84c14-10 24-32 24-49V152c1-23-17-48-39-56M267 274v54c0 8-7 15-15 15-9 0-16-7-16-15v-54c-21-7-36-26-36-49 0-28 23-51 52-51 28 0 51 23 51 51 0 23-15 42-36 49" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurityKey);
export default ForwardRef;
