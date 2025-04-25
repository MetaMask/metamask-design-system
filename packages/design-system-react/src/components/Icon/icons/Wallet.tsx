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
    <path d="M5 21q-.824 0-1.412-.587C2.999 19.826 3 19.55 3 19V5q0-.824.588-1.412C4.175 2.999 4.45 3 5 3h14q.824 0 1.413.588C21.002 4.175 21 4.45 21 5v2.5h-2V5H5v14h14v-2.5h2V19q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm8-4q-.825 0-1.412-.587C11 15.826 11 15.55 11 15V9q0-.825.588-1.412C12.176 7 12.45 7 13 7h7q.824 0 1.413.588C22.002 8.176 22 8.45 22 9v6q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm7-2V9h-7v6zm-4-1.5q.625 0 1.063-.437c.438-.438.437-.646.437-1.063s-.146-.77-.437-1.062S16.417 10.5 16 10.5s-.77.146-1.062.438-.438.645-.438 1.062.146.77.438 1.063.645.437 1.062.437" />
  </svg>
);
const ForwardRef = forwardRef(SvgWallet);
export default ForwardRef;
