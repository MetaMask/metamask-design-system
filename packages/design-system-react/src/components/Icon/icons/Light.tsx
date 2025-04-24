import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 15q1.25 0 2.125-.875C15 13.25 15 12.833 15 12s-.292-1.542-.875-2.125Q13.25 9 12 9c-1.25 0-1.542.292-2.125.875Q9 10.75 9 12c0 1.25.292 1.542.875 2.125A2.9 2.9 0 0 0 12 15m0 2q-2.075 0-3.537-1.462C7 14.075 7 13.383 7 12s.488-2.562 1.463-3.537S10.617 7 12 7s2.563.488 3.538 1.463S17 10.617 17 12s-.487 2.563-1.462 3.538S13.383 17 12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75 3.875 5.325 5.3 3.85l2.4 2.5zm12.3 12.4-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLight);
export default ForwardRef;
