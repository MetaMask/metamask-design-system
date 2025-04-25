import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgKey = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7 14q-.824 0-1.412-.587C5 12.825 5 12.55 5 12s.196-1.02.588-1.412S6.45 10 7 10s1.02.196 1.413.588S9 11.45 9 12s-.196 1.02-.587 1.413S7.55 14 7 14m0 4q-2.5 0-4.25-1.75C1 14.5 1 13.667 1 12s.583-3.083 1.75-4.25S5.333 6 7 6q1.676 0 3.038.825A6.2 6.2 0 0 1 12.2 9H21l3 3-4.5 4.5-2-1.5-2 1.5-2.125-1.5H12.2a6.2 6.2 0 0 1-2.162 2.175Q8.675 18 7 18m0-2q1.4 0 2.463-.85A4.03 4.03 0 0 0 10.875 13H14l1.45 1.025L17.5 12.5l1.775 1.375L21.15 12l-1-1h-9.275a4.03 4.03 0 0 0-1.413-2.15Q8.4 8 7 8 5.35 8 4.175 9.175C3 10.35 3 10.9 3 12s.392 2.042 1.175 2.825S5.9 16 7 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgKey);
export default ForwardRef;
