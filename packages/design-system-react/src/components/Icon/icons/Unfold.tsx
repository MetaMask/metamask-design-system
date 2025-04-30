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
    <path d="m12 20.95-4.5-4.5L8.95 15 12 18.05 15.05 15l1.45 1.45zM8.95 9 7.5 7.55l4.5-4.5 4.5 4.5L15.05 9 12 5.95z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUnfold);
export default ForwardRef;
