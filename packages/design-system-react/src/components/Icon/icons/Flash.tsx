import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m12 15.486 3.2-4.6h-2.85l2-7H9v8h3zm-2 6.4v-8H7v-12h10l-2 7h4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlash);
export default ForwardRef;
