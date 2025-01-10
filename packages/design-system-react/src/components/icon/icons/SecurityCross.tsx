import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecurityCross = (
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
    <path d="M385 95 273 52c-12-4-31-4-43 0L118 95c-22 8-40 33-40 56v166c0 17 11 39 25 49l112 84c20 15 53 15 73 0l112-84c14-10 24-32 24-49V151c1-23-17-48-39-56m-79 201c-3 3-7 5-10 5-4 0-8-2-11-5l-33-32-33 33c-4 3-7 5-11 5s-8-2-11-5c-6-6-6-15 0-21l33-34-32-33c-6-6-6-15 0-21s15-6 21 0l33 32 32-32c6-6 15-6 21 0s6 16 0 22l-31 32 32 32c6 7 6 16 0 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurityCross);
export default ForwardRef;
