import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m6.4 18.886-1.4-1.4 5.6-5.6-5.6-5.6 1.4-1.4 5.6 5.6 5.6-5.6 1.4 1.4-5.6 5.6 5.6 5.6-1.4 1.4-5.6-5.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgClose);
export default ForwardRef;
