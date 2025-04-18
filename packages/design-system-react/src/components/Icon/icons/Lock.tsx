import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M6 21.886q-.824 0-1.412-.588C4 20.71 4 20.436 4 19.886v-10q0-.825.588-1.413A1.93 1.93 0 0 1 6 7.886h1v-2Q7 3.81 8.463 2.348C9.926.886 10.617.885 12 .885s2.563.488 3.538 1.463S17 4.502 17 5.886v2h1q.824 0 1.413.587.587.588.587 1.413v10q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm0-2h12v-10H6zm6-3q.824 0 1.413-.588c.588-.588.587-.862.587-1.412s-.196-1.021-.587-1.413-.863-.587-1.413-.587-1.02.195-1.412.587-.588.863-.588 1.413.196 1.02.588 1.412.862.588 1.412.588m-3-9h6v-2q0-1.25-.875-2.125-.875-.876-2.125-.875c-1.25 0-1.542.291-2.125.875A2.9 2.9 0 0 0 9 5.886z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;
