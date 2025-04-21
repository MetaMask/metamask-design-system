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
    <path d="M17.934 12.124 12 15.748l-5.938-3.624L12 1.935zM12 16.913l-5.938-3.625L12 21.936l5.937-8.648z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEthereum);
export default ForwardRef;
