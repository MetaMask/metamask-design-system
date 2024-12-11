import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMonitor = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M366 51H137c-50 0-90 41-90 91v137c0 50 40 90 90 90h79c11 0 20 9 20 21v19c0 12-9 21-20 21h-50c-8 0-15 7-15 15 0 9 7 16 15 16h171c9 0 16-7 16-16 0-8-7-15-16-15h-49c-11 0-21-9-21-20v-20c0-12 10-21 21-21h78c50 0 90-40 90-90V142c0-50-40-91-90-91" />
  </svg>
);
const ForwardRef = forwardRef(SvgMonitor);
export default ForwardRef;
