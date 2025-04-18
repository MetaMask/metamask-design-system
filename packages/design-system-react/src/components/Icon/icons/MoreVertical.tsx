import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoreVertical = (
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
    <path d="M12 19.886q-.825 0-1.412-.588C10 18.71 10 18.436 10 17.886s.196-1.021.588-1.413.862-.587 1.412-.587 1.02.195 1.413.587.587.863.587 1.413-.196 1.02-.587 1.412-.863.588-1.413.588m0-6q-.825 0-1.412-.588C10 12.71 10 12.436 10 11.886s.196-1.021.588-1.413.862-.587 1.412-.587 1.02.195 1.413.587.587.863.587 1.413-.196 1.02-.587 1.412-.863.588-1.413.588m0-6q-.825 0-1.412-.588Q10 6.71 10 5.886c0-.824.196-1.021.588-1.413q.587-.587 1.412-.587c.825 0 1.02.195 1.413.587Q14 5.061 14 5.886c0 .825-.196 1.02-.587 1.412A1.93 1.93 0 0 1 12 7.886" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;
