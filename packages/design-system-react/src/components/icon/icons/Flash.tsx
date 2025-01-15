import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M373 230h-64V82c0-34-18-41-41-15l-16 18-139 158c-19 22-11 39 17 39h64v148c0 34 18 41 41 15l17-18 138-158c19-22 11-39-17-39" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlash);
export default ForwardRef;
