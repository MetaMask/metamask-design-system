import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAddSquare = (
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
    <path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-6 4q-.824 0-1.412-.587C2.999 19.826 3 19.55 3 19V5q0-.824.588-1.412C4.175 2.999 4.45 3 5 3h14q.824 0 1.413.588C21.002 4.175 21 4.45 21 5v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h14V5H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddSquare);
export default ForwardRef;
