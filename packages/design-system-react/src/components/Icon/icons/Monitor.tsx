import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMonitor = (
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
    <path d="M8 20.886v-2h2v-2H4q-.824 0-1.412-.588C1.999 15.71 2 15.436 2 14.886v-10q0-.825.588-1.413A1.93 1.93 0 0 1 4 2.886h16q.824 0 1.413.587.587.588.587 1.413v10q0 .824-.587 1.412c-.587.588-.863.588-1.413.588h-6v2h2v2zm-4-6h16v-10H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMonitor);
export default ForwardRef;
