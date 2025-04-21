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
    <path d="M11 16.886H7q-2.074 0-3.537-1.463C1.999 13.96 2 13.269 2 11.886s.488-2.563 1.463-3.538S5.617 6.886 7 6.886h4v2H7q-1.25 0-2.125.875Q4 10.635 4 11.886c0 1.25.292 1.541.875 2.125s1.292.875 2.125.875h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875c.875-.875.875-1.292.875-2.125s-.292-1.542-.875-2.125A2.9 2.9 0 0 0 17 8.886h-4v-2h4q2.075 0 3.538 1.462C22 9.81 22 10.502 22 11.886s-.487 2.562-1.462 3.537-2.155 1.463-3.538 1.463z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
