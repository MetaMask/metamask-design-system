import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoneyBag = (
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
    <path d="M8.4 21q-2.275 0-3.837-1.562C3 17.876 3 17.117 3 15.6q0-.95.325-1.85c.325-.9.525-1.142.925-1.625L7.8 7.85 5.375 3h13.25L16.2 7.85l3.55 4.275q.6.725.925 1.625c.325.9.325 1.217.325 1.85q0 2.275-1.575 3.838C17.85 21 17.1 21 15.6 21zm3.6-5q-.825 0-1.412-.587C10 14.825 10 14.55 10 14s.196-1.02.588-1.412S11.45 12 12 12s1.02.196 1.413.588S14 13.45 14 14s-.196 1.02-.587 1.413S12.55 16 12 16M9.625 7h4.75l1-2h-6.75zM8.4 19h7.2q1.425 0 2.413-.987C19 17.025 19 16.55 19 15.6q0-.6-.212-1.162c-.212-.563-.338-.713-.588-1.013L14.525 9H9.5l-3.7 4.4q-.375.45-.587 1.025C5 15 5 15.2 5 15.6q0 1.425.988 2.413C6.976 19 7.45 19 8.4 19" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoneyBag);
export default ForwardRef;
