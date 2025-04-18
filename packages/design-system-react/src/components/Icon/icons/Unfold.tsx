import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUnfold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m12 21.229-4.5-4.5 1.45-1.45 3.05 3.05 3.05-3.05 1.45 1.45zM8.95 9.279 7.5 7.829l4.5-4.5 4.5 4.5-1.45 1.45L12 6.229z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUnfold);
export default ForwardRef;
