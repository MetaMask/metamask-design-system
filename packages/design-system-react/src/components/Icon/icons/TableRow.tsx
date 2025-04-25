import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTableRow = (
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
    <path d="M19 19v-3H5v3zm0-5v-4H5v4zm0-6V5H5v3zM5 21q-.824 0-1.412-.587C2.999 19.826 3 19.55 3 19V5q0-.824.588-1.412C4.175 2.999 4.45 3 5 3h14q.824 0 1.413.588C21.002 4.175 21 4.45 21 5v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTableRow);
export default ForwardRef;
