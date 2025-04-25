import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCreditCheck = (
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
    <path d="M4 8h16V6H4zM2 6q0-.824.588-1.412C3.175 4 3.45 4 4 4h16q.824 0 1.413.588C22.002 5.176 22 5.45 22 6v6H4v6h4.1v2H4q-.824 0-1.412-.587C1.999 18.826 2 18.55 2 18zm12.95 16-4.25-4.25 1.4-1.4 2.85 2.8 5.65-5.65 1.4 1.45zM4 6v12-4.5 2.825z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCreditCheck);
export default ForwardRef;
