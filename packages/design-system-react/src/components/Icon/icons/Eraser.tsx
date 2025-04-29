import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M17.241 18.5H22v2h-6.763zm-12.523 2-2.13-2.125Q2.014 17.8 2 16.95c-.013-.85.18-1.05.564-1.45l11.02-11.4q.576-.6 1.415-.6t1.416.575l4.984 4.975q.576.575.576 1.425t-.576 1.425l-8.416 8.6zm7.414-2 7.864-8.05-4.959-4.95-11.07 11.4 1.602 1.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEraser);
export default ForwardRef;
