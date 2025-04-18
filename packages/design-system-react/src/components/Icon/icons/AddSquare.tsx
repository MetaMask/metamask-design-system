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
    <path d="M11 16.886h2v-4h4v-2h-4v-4h-2v4H7v2h4zm-6 4q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h14q.824 0 1.413.587.587.588.587 1.413v14q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm0-2h14v-14H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddSquare);
export default ForwardRef;
