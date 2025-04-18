import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgKey = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7 13.886q-.824 0-1.412-.588C5 12.71 5 12.436 5 11.886s.196-1.021.588-1.413S6.45 9.886 7 9.886s1.02.195 1.413.587.587.863.587 1.413-.196 1.02-.587 1.412-.863.588-1.413.588m0 4q-2.5 0-4.25-1.75C1 14.386 1 13.552 1 11.886s.583-3.084 1.75-4.25Q4.5 5.886 7 5.886q1.676 0 3.038.825A6.2 6.2 0 0 1 12.2 8.886H21l3 3-4.5 4.5-2-1.5-2 1.5-2.125-1.5H12.2a6.2 6.2 0 0 1-2.162 2.175q-1.363.825-3.038.825m0-2q1.4 0 2.463-.85a4.03 4.03 0 0 0 1.412-2.15H14l1.45 1.025 2.05-1.525 1.775 1.375 1.875-1.875-1-1h-9.275a4.03 4.03 0 0 0-1.413-2.15Q8.4 7.886 7 7.886q-1.65 0-2.825 1.175T3 11.886c0 1.65.392 2.041 1.175 2.825S5.9 15.885 7 15.885" />
  </svg>
);
const ForwardRef = forwardRef(SvgKey);
export default ForwardRef;
