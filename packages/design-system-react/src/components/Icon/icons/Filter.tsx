import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;
