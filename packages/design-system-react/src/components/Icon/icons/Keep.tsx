import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgKeep = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m16 12.229 2 2v2h-5v6l-1 1-1-1v-6H6v-2l2-2v-7H7v-2h10v2h-1zm-7.15 2h6.3L14 13.079v-7.85h-4v7.85z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeep);
export default ForwardRef;
