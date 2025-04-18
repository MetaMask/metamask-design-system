import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnapsRound = (
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
    <path
      fillRule="evenodd"
      d="M12 2.886a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-.667 9.383v4.567l-4-2.317V9.952zm5.334 2.25-4 2.317v-4.567l4-2.317zm-.717-5.683L12 11.119 8.05 8.836 12 6.552zm-9.775 6.366q.175.3.492.483l4.666 2.684a1.31 1.31 0 0 0 1.334 0l4.666-2.683q.316-.184.492-.484c.176-.3.175-.422.175-.666v-5.3a1.3 1.3 0 0 0-.667-1.15l-4.666-2.684a1.31 1.31 0 0 0-1.334 0L6.667 8.086A1.299 1.299 0 0 0 6 9.236v5.3q0 .366.175.666"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSnapsRound);
export default ForwardRef;
