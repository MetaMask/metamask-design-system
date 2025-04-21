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
    <path d="M5 22.229q-.824 0-1.412-.587C2.999 21.055 3 20.779 3 20.229v-14q0-.824.588-1.413A1.93 1.93 0 0 1 5 4.23h1v-2h2v2h8v-2h2v2h1q.824 0 1.413.587Q21 5.405 21 6.23v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h14v-10H5zm0-12h14v-2H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
