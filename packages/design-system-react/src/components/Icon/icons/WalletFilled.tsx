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
    <path d="M5 21.229q-.824 0-1.412-.587C2.999 20.055 3 19.779 3 19.229v-14q0-.824.588-1.413A1.93 1.93 0 0 1 5 3.23h14q.824 0 1.413.587Q21 4.404 21 5.23h-8q-1.775 0-2.887 1.112T9 9.23v6q0 1.775 1.113 2.888T13 19.228h8q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm8-4q-.825 0-1.412-.587C11 16.055 11 15.779 11 15.229v-6q0-.825.588-1.412A1.93 1.93 0 0 1 13 7.229h7q.824 0 1.413.588.587.587.587 1.412v6q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm3-3.5q.65 0 1.075-.425c.425-.425.425-.642.425-1.075s-.142-.792-.425-1.075-.642-.425-1.075-.425-.792.142-1.075.425-.425.642-.425 1.075.142.792.425 1.075.642.425 1.075.425" />
  </svg>
);
const ForwardRef = forwardRef(SvgWalletFilled);
export default ForwardRef;
