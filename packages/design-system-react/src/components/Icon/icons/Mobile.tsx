import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7 22.886q-.824 0-1.412-.588C5 21.71 5 21.436 5 20.886v-18q0-.825.588-1.413A1.93 1.93 0 0 1 7 .885h10q.824 0 1.413.588.587.588.587 1.413v18q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm0-3v1h10v-1zm0-2h10v-12H7zm0-14h10v-1H7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;
