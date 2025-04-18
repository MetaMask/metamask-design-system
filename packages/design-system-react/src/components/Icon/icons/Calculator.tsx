import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCalculator = (
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
    <path d="M8 17.886h1.5v-2h2v-1.5h-2v-2H8v2H6v1.5h2zm5-.75h5v-1.5h-5zm0-2.5h5v-1.5h-5zm1.1-3.8 1.4-1.4 1.4 1.4 1.05-1.05-1.4-1.45 1.4-1.4-1.05-1.05-1.4 1.4-1.4-1.4-1.05 1.05 1.4 1.4-1.4 1.45zm-7.85-1.75h5v-1.5h-5zM5 20.886q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h14q.824 0 1.413.587.587.588.587 1.413v14q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm0-2h14v-14H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;
