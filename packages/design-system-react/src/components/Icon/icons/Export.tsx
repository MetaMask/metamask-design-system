import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgExport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 20.886q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h7v2H5v14h14v-7h2v7q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm4.7-5.3-1.4-1.4 9.3-9.3H14v-2h7v7h-2v-3.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgExport);
export default ForwardRef;
