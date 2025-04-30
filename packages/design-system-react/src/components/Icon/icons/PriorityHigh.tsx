import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPriorityHigh = (
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
    <path d="M12 21q-.825 0-1.412-.587C10 19.826 10 19.55 10 19s.196-1.02.588-1.412S11.45 17 12 17s1.02.196 1.413.588S14 18.45 14 19s-.196 1.02-.587 1.413S12.55 21 12 21m-2-6V3h4v12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPriorityHigh);
export default ForwardRef;
