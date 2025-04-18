import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgVerified = (
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
    <path d="m8.6 22.729-1.9-3.2-3.6-.8.35-3.7-2.45-2.8 2.45-2.8-.35-3.7 3.6-.8 1.9-3.2 3.4 1.45 3.4-1.45 1.9 3.2 3.6.8-.35 3.7 2.45 2.8-2.45 2.8.35 3.7-3.6.8-1.9 3.2-3.4-1.45zm.85-2.55 2.55-1.1 2.6 1.1 1.4-2.4 2.75-.65-.25-2.8 1.85-2.1-1.85-2.15.25-2.8-2.75-.6-1.45-2.4-2.55 1.1-2.6-1.1-1.4 2.4-2.75.6.25 2.8-1.85 2.15 1.85 2.1-.25 2.85 2.75.6zm1.5-4.4 5.65-5.65-1.4-1.45-4.25 4.25-2.15-2.1-1.4 1.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVerified);
export default ForwardRef;
