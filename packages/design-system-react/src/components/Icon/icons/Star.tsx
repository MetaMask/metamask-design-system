import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m8.85 16.71 3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325L12 7.01l-1.45 3.375-3.65.325 2.775 2.425zm-3.025 4.175L7.45 13.86 2 9.137l7.2-.625L12 1.886l2.8 6.625 7.2.625-5.45 4.725 1.625 7.025L12 17.16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;
