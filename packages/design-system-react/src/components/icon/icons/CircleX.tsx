import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCircleX = (
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
    <path d="M256 43C138 43 43 138 43 256s95 213 213 213 213-95 213-213S374 43 256 43m73 140c8 9 8 22 0 30l-43 43 43 43c8 8 8 21 0 30-9 8-22 8-30 0l-43-43-43 43c-8 8-21 8-30 0-8-9-8-22 0-30l43-43-43-43c-8-8-8-21 0-30 9-8 22-8 30 0l43 43 43-43c8-8 21-8 30 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgCircleX);
export default ForwardRef;
