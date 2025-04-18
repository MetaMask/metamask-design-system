import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWallet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 20.886q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h14q.824 0 1.413.587.587.588.587 1.413v2.5h-2v-2.5H5v14h14v-2.5h2v2.5q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm8-4q-.825 0-1.412-.588C11 15.71 11 15.436 11 14.886v-6q0-.825.588-1.413A1.93 1.93 0 0 1 13 6.886h7q.824 0 1.413.587.587.588.587 1.413v6q0 .824-.587 1.412c-.587.588-.863.588-1.413.588zm7-2v-6h-7v6zm-4-1.5q.625 0 1.063-.438c.438-.438.437-.646.437-1.062s-.146-.771-.437-1.063-.646-.437-1.063-.437-.77.145-1.062.437-.438.646-.438 1.063.146.77.438 1.062.645.438 1.062.438" />
  </svg>
);
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
