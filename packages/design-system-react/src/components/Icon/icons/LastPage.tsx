import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLastPage = (
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
    <path d="m7.2 18-1.4-1.4 4.6-4.6-4.6-4.6L7.2 6l6 6zm9 0V6h2v12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLastPage);
export default ForwardRef;
