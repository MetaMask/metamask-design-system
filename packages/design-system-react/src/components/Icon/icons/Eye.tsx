import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M441 198C394 123 324 80 252 80c-37 0-72 11-105 31-32 20-61 49-85 87-20 32-20 84 0 116 47 75 117 117 190 117 36 0 71-10 104-30 32-20 61-50 85-87 20-32 20-84 0-116M252 339c-46 0-83-37-83-83s37-83 83-83c45 0 82 37 82 83s-37 83-82 83m0-142c-33 0-59 27-59 59s26 58 59 58c32 0 58-26 58-58s-26-59-58-59" />
  </svg>
);
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
