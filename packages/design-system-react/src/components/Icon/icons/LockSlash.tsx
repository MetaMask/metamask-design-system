import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLockSlash = (
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
    <path d="M6 8.5h9v-2q0-1.25-.875-2.125C13.25 3.5 12.833 3.5 12 3.5s-1.542.292-2.125.875A2.9 2.9 0 0 0 9 6.5H7q0-2.075 1.463-3.537C9.926 1.5 10.617 1.5 12 1.5s2.563.488 3.538 1.463S17 5.117 17 6.5v2h1q.824 0 1.413.588c.589.588.587.862.587 1.412v10q0 .824-.587 1.413c-.587.589-.863.587-1.413.587H6q-.824 0-1.412-.587C4 21.326 4 21.05 4 20.5v-10q0-.825.588-1.412C5.176 8.5 5.45 8.5 6 8.5m0 12h12v-10H6zm6-3q.824 0 1.413-.587C14 16.326 14 16.05 14 15.5s-.196-1.02-.587-1.412S12.55 13.5 12 13.5s-1.02.196-1.412.588S10 14.95 10 15.5s.196 1.02.588 1.413.862.587 1.412.587" />
  </svg>
);
const ForwardRef = forwardRef(SvgLockSlash);
export default ForwardRef;
