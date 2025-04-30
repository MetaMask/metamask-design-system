import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScanFocus = (
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
    <path d="M5 21q-.824 0-1.412-.587C2.999 19.826 3 19.55 3 19v-4h2v4h4v2zm10 0v-2h4v-4h2v4q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zM3 9V5q0-.824.588-1.412C4.175 2.999 4.45 3 5 3h4v2H5v4zm16 0V5h-4V3h4q.824 0 1.413.588C21.002 4.175 21 4.45 21 5v4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgScanFocus);
export default ForwardRef;
