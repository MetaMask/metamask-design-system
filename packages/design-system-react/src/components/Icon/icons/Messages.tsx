import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMessages = (
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
    <path d="M2 21.886v-18q0-.825.588-1.413A1.93 1.93 0 0 1 4 1.886h16q.824 0 1.413.587.587.588.587 1.413v12q0 .825-.587 1.412c-.587.587-.863.588-1.413.588H6zm3.15-6H20v-12H4V17.01z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMessages);
export default ForwardRef;
