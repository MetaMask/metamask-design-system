import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCalendar = (
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
    <path d="M5 22q-.824 0-1.412-.587C2.999 20.826 3 20.55 3 20V6q0-.824.588-1.412C4.175 4 4.45 4 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588C21.002 5.176 21 5.45 21 6v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h14V10H5zM5 8h14V6H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
