import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 17H7q-2.074 0-3.537-1.462C1.999 14.075 2 13.383 2 12s.488-2.562 1.463-3.537S5.617 7 7 7h4v2H7q-1.25 0-2.125.875T4 12c0 1.25.292 1.542.875 2.125S6.167 15 7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875C20 13.25 20 12.833 20 12s-.292-1.542-.875-2.125A2.9 2.9 0 0 0 17 9h-4V7h4q2.075 0 3.538 1.463C22 9.926 22 10.617 22 12s-.487 2.563-1.462 3.538S18.383 17 17 17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
