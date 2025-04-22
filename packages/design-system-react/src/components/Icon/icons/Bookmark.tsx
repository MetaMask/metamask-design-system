import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBookmark = (
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
    <path d="M6 21.886q-.824 0-1.412-.588C4 20.71 4 20.436 4 19.886v-16q0-.825.588-1.413A1.93 1.93 0 0 1 6 1.886h12q.824 0 1.413.587.587.588.587 1.413v16q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm0-2h12v-16h-2v7l-2.5-1.5-2.5 1.5v-7H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
