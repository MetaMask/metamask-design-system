import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScanFocus = (
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
    <path d="M5 20.886q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-4h2v4h4v2zm10 0v-2h4v-4h2v4q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm-12-12v-4q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h4v2H5v4zm16 0v-4h-4v-2h4q.824 0 1.413.587.587.588.587 1.413v4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgScanFocus);
export default ForwardRef;
