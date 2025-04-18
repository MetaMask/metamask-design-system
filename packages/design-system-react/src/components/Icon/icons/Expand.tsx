import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M3 20.886v-6h2v2.6l3.1-3.1 1.4 1.4-3.1 3.1H9v2zm12.9-11.5-1.4-1.4 3.1-3.1H15v-2h6v6h-2v-2.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgExpand);
export default ForwardRef;
