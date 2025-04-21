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
    <path d="M12.05 19.886q-3.35 0-5.7-2.325C4 15.236 4 14.119 4 11.886v-.175l-1.6 1.6-1.4-1.4 4-4 4 4-1.4 1.4-1.6-1.6v.174q0 2.5 1.763 4.25c1.763 1.75 2.604 1.75 4.287 1.75q.65 0 1.275-.15c.625-.15.825-.25 1.225-.45l1.5 1.5q-.95.55-1.95.826c-1 .276-1.35.275-2.05.275M19 15.86l-4-4 1.4-1.4 1.6 1.6v-.176q0-2.5-1.762-4.25t-4.288-1.75q-.65 0-1.275.15c-.625.15-.825.25-1.225.45l-1.5-1.5A8.3 8.3 0 0 1 9.9 4.16a7.7 7.7 0 0 1 2.05-.275q3.35 0 5.7 2.325C20 8.537 20 9.653 20 11.887v.175l1.6-1.6 1.4 1.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRefresh);
export default ForwardRef;
