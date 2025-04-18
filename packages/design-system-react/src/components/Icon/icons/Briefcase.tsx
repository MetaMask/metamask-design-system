import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBriefcase = (
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
    <path d="M4 21.229q-.824 0-1.412-.587C1.999 20.055 2 19.779 2 19.229v-11q0-.824.588-1.412A1.93 1.93 0 0 1 4 6.228h4v-2q0-.824.588-1.413A1.93 1.93 0 0 1 10 2.23h4q.824 0 1.413.587Q16 3.404 16 4.23v2h4q.824 0 1.413.587Q22 7.405 22 8.23v11q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm6-15h4v-2h-4zm10 9h-5v2H9v-2H4v4h16zm-9 0h2v-2h-2zm-7-2h5v-2h6v2h5v-5H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;
