import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7 19.5v-2h7.1q1.575 0 2.738-1C18 15.5 18 15 18 14s-.387-1.833-1.162-2.5-1.688-1-2.738-1H7.8l2.6 2.6L9 14.5l-5-5 5-5 1.4 1.4-2.6 2.6h6.3q2.425 0 4.162 1.575C20 11.65 20 12.433 20 14s-.58 2.875-1.738 3.925S15.717 19.5 14.1 19.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
