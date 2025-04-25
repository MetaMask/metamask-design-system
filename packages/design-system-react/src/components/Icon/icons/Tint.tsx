import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 21q-3.325 0-5.662-2.3C4 16.4 4 15.3 4 13.1q0-1.625.625-3.037A8.2 8.2 0 0 1 6.35 7.55L12 2l5.65 5.55a8.2 8.2 0 0 1 1.725 2.513Q20 11.474 20 13.1q0 3.3-2.337 5.6C15.326 21 14.217 21 12 21m-5.95-7H17.9q.3-1.8-.337-3.075C16.926 9.65 16.7 9.433 16.25 9L12 4.8 7.75 9q-.675.65-1.325 1.925C5.775 12.2 5.867 12.8 6.05 14" />
  </svg>
);
const ForwardRef = forwardRef(SvgTint);
export default ForwardRef;
