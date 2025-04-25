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
    <path d="M8 21v-2h2v-2H4q-.824 0-1.412-.587C1.999 15.826 2 15.55 2 15V5q0-.825.588-1.412C3.175 3 3.45 3 4 3h16q.824 0 1.413.588C22.002 4.176 22 4.45 22 5v10q0 .824-.587 1.413c-.587.589-.863.587-1.413.587h-6v2h2v2zm-4-6h16V5H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMonitor);
export default ForwardRef;
