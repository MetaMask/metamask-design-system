import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="m293 73 37 76c6 11 19 21 31 23l68 11c43 7 54 39 22 71l-53 53c-9 9-14 26-11 39l15 66c12 52-15 72-61 45l-64-38c-11-7-30-7-42 0l-64 38c-46 27-73 7-61-45l15-66c3-13-2-30-11-39l-53-53c-31-32-21-64 22-71l68-11c12-2 25-12 30-23l38-76c20-41 54-41 74 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;