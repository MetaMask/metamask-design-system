import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnaps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 19.425v-6.85L5 9.1v6.85zm2 0 6-3.475V9.1l-6 3.475zm-1-8.575 5.925-3.425L12 4 6.075 7.425zM4 17.7q-.475-.275-.737-.725c-.262-.45-.263-.633-.263-1v-7.95A1.95 1.95 0 0 1 4 6.3l7-4.025Q11.475 2 12 2c.525 0 .683.092 1 .275L20 6.3q.475.275.738.725c.263.45.262.633.262 1v7.95a1.95 1.95 0 0 1-1 1.725l-7 4.025Q12.525 22 12 22c-.525 0-.683-.092-1-.275z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnaps);
export default ForwardRef;
