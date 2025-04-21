import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M9 17.886q-.825 0-1.412-.588C7 16.71 7 16.436 7 15.886v-12q0-.825.588-1.413A1.93 1.93 0 0 1 9 1.886h9q.824 0 1.413.587.587.588.587 1.413v12q0 .824-.587 1.412c-.587.588-.863.588-1.413.588zm0-2h9v-12H9zm-4 6q-.824 0-1.412-.588C2.999 20.71 3 20.436 3 19.886v-14h2v14h11v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;
