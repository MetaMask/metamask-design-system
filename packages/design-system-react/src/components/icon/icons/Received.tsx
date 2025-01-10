import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgReceived = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M108 384c-4 0-8-1-11-5-6-5-6-15 0-21L384 71c6-6 16-6 22 0s6 16 0 22L119 379c-3 4-7 5-11 5m210 0H108c-8 0-15-7-15-15V158c0-8 7-15 15-15 9 0 16 7 16 15v195h194c9 0 16 7 16 16 0 8-7 15-16 15m108 92H77c-8 0-15-7-15-15 0-9 7-16 15-16h349c8 0 15 7 15 16 0 8-7 15-15 15" />
  </svg>
);
const ForwardRef = forwardRef(SvgReceived);
export default ForwardRef;
