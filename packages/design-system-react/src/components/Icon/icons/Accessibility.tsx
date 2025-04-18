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
    <path d="M12 6.229q-.825 0-1.412-.587Q10 5.054 10 4.228c0-.825.196-1.02.588-1.413Q11.175 2.23 12 2.23c.825 0 1.02.196 1.413.587Q14 3.404 14 4.23c0 .825-.196 1.02-.587 1.412A1.93 1.93 0 0 1 12 6.23m-3 16v-13q-1.5-.125-3.05-.375A30 30 0 0 1 3 8.229l.5-2q1.95.525 4.15.762 2.2.238 4.35.238c2.15 0 2.883-.08 4.35-.238a27 27 0 0 0 4.15-.762l.5 2q-1.4.375-2.95.625a40 40 0 0 1-3.05.375v13h-2v-6h-2v6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAccessibility);
export default ForwardRef;
