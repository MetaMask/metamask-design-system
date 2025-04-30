import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWalletFilled = (
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
    <path d="M5 21q-.824 0-1.412-.587C2.999 19.826 3 19.55 3 19V5q0-.824.588-1.412C4.175 2.999 4.45 3 5 3h14q.824 0 1.413.588C21.002 4.175 21 4.45 21 5h-8q-1.775 0-2.887 1.113T9 9v6q0 1.775 1.113 2.888T13 19h8q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm8-4q-.825 0-1.412-.587C11 15.826 11 15.55 11 15V9q0-.825.588-1.412C12.176 7 12.45 7 13 7h7q.824 0 1.413.588C22.002 8.176 22 8.45 22 9v6q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm3-3.5q.65 0 1.075-.425c.425-.425.425-.642.425-1.075s-.142-.792-.425-1.075S16.433 10.5 16 10.5s-.792.142-1.075.425-.425.642-.425 1.075.142.792.425 1.075.642.425 1.075.425" />
  </svg>
);
const ForwardRef = forwardRef(SvgWalletFilled);
export default ForwardRef;
