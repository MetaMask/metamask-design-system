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
    <path d="M4 21q-.824 0-1.412-.587C1.999 19.826 2 19.55 2 19V8q0-.824.588-1.412C3.175 6 3.45 6 4 6h4V4q0-.824.588-1.412C9.176 1.999 9.45 2 10 2h4q.824 0 1.413.588C16 3.175 16 3.45 16 4v2h4q.824 0 1.413.588C22.002 7.176 22 7.45 22 8v11q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm6-15h4V4h-4zm10 9h-5v2H9v-2H4v4h16zm-9 0h2v-2h-2zm-7-2h5v-2h6v2h5V8H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;
