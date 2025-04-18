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
    <path d="M7 19.229v-2h7.1q1.575 0 2.738-1c1.162-1 1.162-1.5 1.162-2.5s-.387-1.833-1.162-2.5-1.688-1-2.738-1H7.8l2.6 2.6-1.4 1.4-5-5 5-5 1.4 1.4-2.6 2.6h6.3q2.425 0 4.162 1.575C20 11.379 20 12.162 20 13.729s-.58 2.875-1.738 3.925-2.545 1.575-4.162 1.575z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
