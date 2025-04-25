import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAccessibility = (
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
    <path d="M12 6q-.825 0-1.412-.587C10 4.825 10 4.55 10 4s.196-1.02.588-1.413S11.45 2 12 2s1.02.196 1.413.587S14 3.45 14 4s-.196 1.02-.587 1.412S12.55 6 12 6M9 22V9q-1.5-.125-3.05-.375C4.4 8.375 3.933 8.25 3 8l.5-2q1.95.525 4.15.763C9.85 7 10.567 7 12 7s2.883-.08 4.35-.237S19.2 6.35 20.5 6l.5 2q-1.4.375-2.95.625C16.5 8.875 16 8.917 15 9v13h-2v-6h-2v6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAccessibility);
export default ForwardRef;
