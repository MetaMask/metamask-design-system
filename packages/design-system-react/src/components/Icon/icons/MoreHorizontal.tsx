import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoreHorizontal = (
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
    <path d="M20 11.886q0 .824-.587 1.412c-.587.588-.863.588-1.413.588s-1.02-.196-1.412-.588S16 12.436 16 11.886s.196-1.021.587-1.413.863-.587 1.413-.587 1.02.195 1.413.587.587.863.587 1.413m-6 0q0 .824-.587 1.412c-.588.588-.863.588-1.413.588s-1.02-.196-1.412-.588S10 12.436 10 11.886s.196-1.021.588-1.413.862-.587 1.412-.587 1.02.195 1.413.587.587.863.587 1.413m-6 0q0 .824-.587 1.412c-.588.588-.863.588-1.413.588s-1.02-.196-1.412-.588S4 12.436 4 11.886s.196-1.021.588-1.413S5.45 9.886 6 9.886s1.02.195 1.413.587.587.863.587 1.413" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoreHorizontal);
export default ForwardRef;
