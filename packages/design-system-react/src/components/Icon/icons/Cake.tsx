import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCake = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M4 22.229q-.424 0-.712-.287C3 21.653 3 21.511 3 21.228v-5q0-.825.588-1.412c.587-.588.862-.588 1.412-.588v-4q0-.825.588-1.412A1.93 1.93 0 0 1 7 8.229h4v-1.45q-.45-.3-.725-.725T10 5.029q0-.375.15-.737.15-.363.45-.663l1.4-1.4 1.4 1.4q.3.3.45.663.15.362.15.737 0 .6-.275 1.025a2.5 2.5 0 0 1-.725.725v1.45h4q.824 0 1.413.588.587.587.587 1.412v4q.824 0 1.413.588c.589.587.587.862.587 1.412v5q0 .424-.287.713c-.288.288-.43.287-.713.287zm3-8h10v-4H7zm-2 6h14v-4H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCake);
export default ForwardRef;
