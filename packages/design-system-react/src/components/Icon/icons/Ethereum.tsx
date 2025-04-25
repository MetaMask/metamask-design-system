import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEthereum = (
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
    <path d="M17.934 12.188 12 15.812l-5.938-3.624L12 2zM12 16.977l-5.938-3.625L12 22l5.937-8.648z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEthereum);
export default ForwardRef;
