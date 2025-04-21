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
    <path d="M4 8.229h16v-2H4zm-2-2q0-.824.588-1.413A1.93 1.93 0 0 1 4 4.23h16q.824 0 1.413.587Q22 5.405 22 6.23v6H4v6h4.1v2H4q-.824 0-1.412-.587C1.999 19.055 2 18.779 2 18.229zm12.95 16-4.25-4.25 1.4-1.4 2.85 2.8 5.65-5.65 1.4 1.45zM4 6.229v12-4.5 2.825z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCreditCheck);
export default ForwardRef;
