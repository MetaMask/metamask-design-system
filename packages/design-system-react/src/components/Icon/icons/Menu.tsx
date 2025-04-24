import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;
