import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTranslate = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m11.85 22 4.53-12h2.09L23 22h-2.09l-1.07-3.05H15.01L13.941 22zm-7.864-3-1.393-1.4 5.027-5.05q-.871-.875-1.58-2C5.33 9.425 5.13 8.95 4.733 8h2.09q.498.975.996 1.7t1.195 1.45q.82-.824 1.704-2.313C11.602 7.348 11.751 6.9 12.05 6H1V4h6.968V2H9.96v2h6.969v2H14.04q-.523 1.8-1.568 3.7-1.046 1.9-2.066 2.9l2.39 2.45-.747 2.05-3.036-3.125zm11.647-1.8h3.584l-1.792-5.1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTranslate);
export default ForwardRef;
