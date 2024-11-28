import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M107 85c-12 0-22 10-22 22v298c0 12 10 22 22 22h298c12 0 22-10 22-22V107c0-12-10-22-22-22zm-64 22c0-36 28-64 64-64h298c36 0 64 28 64 64v298c0 36-28 64-64 64H107c-36 0-64-28-64-64z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSquare);
export default ForwardRef;
