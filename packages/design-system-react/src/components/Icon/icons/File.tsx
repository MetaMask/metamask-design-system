import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M6 21.886q-.824 0-1.412-.588C4 20.71 4 20.436 4 19.886v-16q0-.825.588-1.413A1.93 1.93 0 0 1 6 1.886h8l6 6v12q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm7-13v-5H6v16h12v-11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
