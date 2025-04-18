import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSaveFilled = (
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
    <path d="M5 21.229v-16q0-.824.588-1.413A1.93 1.93 0 0 1 7 3.23h10q.824 0 1.413.587Q19 4.404 19 5.23v16l-7-3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSaveFilled);
export default ForwardRef;
