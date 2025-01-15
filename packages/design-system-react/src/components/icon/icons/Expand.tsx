import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M192 469H64c-2 0-6 0-9-2-2 0-4-2-6-4s-4-4-4-6c-2-3-2-7-2-9V320c0-13 8-21 21-21s21 8 21 21v77l124-124c9-8 21-8 30 0 8 9 8 21 0 30L115 427h77c13 0 21 8 21 21s-8 21-21 21m96-224q-9 0-15-6c-8-9-8-21 0-30L397 85h-77c-13 0-21-8-21-21s8-21 21-21h128c2 0 6 0 9 2 2 0 4 2 6 4s4 4 4 6c2 3 2 7 2 9v128c0 13-8 21-21 21s-21-8-21-21v-77L303 239q-6 6-15 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgExpand);
export default ForwardRef;
