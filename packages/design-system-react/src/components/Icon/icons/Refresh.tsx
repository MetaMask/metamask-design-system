import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgRefresh = (
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
    <path d="M12.05 20q-3.35 0-5.7-2.325C4 15.35 4 14.233 4 12v-.175l-1.6 1.6-1.4-1.4 4-4 4 4-1.4 1.4-1.6-1.6V12q0 2.5 1.763 4.25C9.526 18 10.367 18 12.05 18q.65 0 1.275-.15c.625-.15.825-.25 1.225-.45l1.5 1.5q-.95.55-1.95.825c-1 .275-1.35.275-2.05.275M19 15.975l-4-4 1.4-1.4 1.6 1.6V12q0-2.5-1.762-4.25C14.476 6 13.633 6 11.95 6q-.65 0-1.275.15c-.625.15-.825.25-1.225.45l-1.5-1.5a8.3 8.3 0 0 1 1.95-.825A7.7 7.7 0 0 1 11.95 4q3.35 0 5.7 2.325C20 8.65 20 9.767 20 12v.175l1.6-1.6 1.4 1.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRefresh);
export default ForwardRef;
