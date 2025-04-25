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
    <path d="M4 22q-.424 0-.712-.287C3 21.425 3 21.283 3 21v-5q0-.825.588-1.412C4.175 14 4.45 14 5 14v-4q0-.825.588-1.412C6.176 8 6.45 8 7 8h4V6.55q-.45-.3-.725-.725C10 5.4 10 5.2 10 4.8q0-.375.15-.737c.15-.362.25-.463.45-.663L12 2l1.4 1.4q.3.3.45.663c.15.363.15.487.15.737q0 .6-.275 1.025c-.275.425-.425.525-.725.725V8h4q.824 0 1.413.588c.589.588.587.862.587 1.412v4q.824 0 1.413.588c.589.588.587.862.587 1.412v5q0 .424-.287.713C20.425 22 20.283 22 20 22zm3-8h10v-4H7zm-2 6h14v-4H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCake);
export default ForwardRef;
