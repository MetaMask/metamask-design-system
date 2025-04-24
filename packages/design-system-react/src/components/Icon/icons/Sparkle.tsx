import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSparkle = (
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
    <g fillRule="evenodd" clipRule="evenodd">
      <path d="M17.714 3A4.86 4.86 0 0 0 22 7.304a4.86 4.86 0 0 0-4.286 4.305 4.86 4.86 0 0 0-4.285-4.305A4.86 4.86 0 0 0 17.714 3M16.46 14.913a3.44 3.44 0 0 0 3.03 3.044A3.44 3.44 0 0 0 16.46 21a3.44 3.44 0 0 0-3.03-3.043 3.44 3.44 0 0 0 3.03-3.044M9.143 4.87a8.12 8.12 0 0 1-4.383 6.349 8 8 0 0 1-2.76.824c.985.11 1.915.396 2.76.826a8.12 8.12 0 0 1 4.383 6.348 8.12 8.12 0 0 1 4.383-6.349 8 8 0 0 1 2.76-.825 8 8 0 0 1-2.76-.825A8.12 8.12 0 0 1 9.143 4.87m0 4.348a9.6 9.6 0 0 1-2.818 2.825 9.6 9.6 0 0 1 2.818 2.826 9.6 9.6 0 0 1 2.818-2.826 9.6 9.6 0 0 1-2.818-2.825" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSparkle);
export default ForwardRef;
