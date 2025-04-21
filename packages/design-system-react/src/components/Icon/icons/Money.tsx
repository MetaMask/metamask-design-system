import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoney = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M14 12.886q-1.25 0-2.125-.875C11 11.136 11 10.719 11 9.886q0-1.25.875-2.125T14 6.886c1.25 0 1.542.291 2.125.875Q17 8.635 17 9.886t-.875 2.125c-.875.875-1.292.875-2.125.875m-7 3q-.824 0-1.412-.588C5 14.71 5 14.436 5 13.886v-8q0-.825.588-1.413A1.93 1.93 0 0 1 7 3.886h14q.824 0 1.413.587.587.588.587 1.413v8q0 .824-.587 1.412c-.587.588-.863.588-1.413.588zm2-2h10q0-.825.588-1.413c.587-.588.862-.587 1.412-.587v-4q-.825 0-1.412-.588A1.93 1.93 0 0 1 19 5.886H9q0 .824-.587 1.412A1.93 1.93 0 0 1 7 7.886v4q.824 0 1.413.587C9 13.06 9 13.336 9 13.886m11 6H3q-.824 0-1.412-.588C.999 18.71 1 18.436 1 17.886v-11h2v11h17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoney);
export default ForwardRef;
