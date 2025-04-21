import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M2 18v-2h6v2zm0-5v-2h12v2zm0-5V6h18v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSort);
export default ForwardRef;
