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
    <path d="M14 13q-1.25 0-2.125-.875C11 11.25 11 10.833 11 10q0-1.25.875-2.125C12.75 7 13.167 7 14 7s1.542.292 2.125.875S17 9.167 17 10q0 1.25-.875 2.125C15.25 13 14.833 13 14 13m-7 3q-.824 0-1.412-.587C5 14.825 5 14.55 5 14V6q0-.824.588-1.412C6.176 4 6.45 4 7 4h14q.824 0 1.413.588C23.002 5.176 23 5.45 23 6v8q0 .824-.587 1.413C21.826 16 21.55 16 21 16zm2-2h10q0-.825.588-1.412C20.175 12 20.45 12 21 12V8q-.825 0-1.412-.587C19 6.825 19 6.55 19 6H9q0 .824-.587 1.413C7.825 8 7.55 8 7 8v4q.824 0 1.413.588C9 13.176 9 13.45 9 14m11 6H3q-.824 0-1.412-.587C.999 18.826 1 18.55 1 18V7h2v11h17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoney);
export default ForwardRef;
