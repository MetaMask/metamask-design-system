import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCircleX = (
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
    <path d="m8.4 17 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L17 8.4 15.6 7 12 10.6 8.4 7 7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.787c-1.825-.788-2.275-1.238-3.175-2.138S3.313 17.117 2.788 15.9 2 13.383 2 12s.262-2.683.787-3.9 1.238-2.275 2.138-3.175S6.883 3.312 8.1 2.787 10.617 2 12 2s2.683.262 3.9.787 2.275 1.238 3.175 2.138 1.613 1.958 2.138 3.175S22 10.617 22 12s-.262 2.683-.787 3.9-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138S13.383 22 12 22m0-2q3.35 0 5.675-2.325C20 15.35 20 14.233 20 12q0-3.35-2.325-5.675C15.35 4 14.233 4 12 4Q8.65 4 6.325 6.325C4 8.65 4 9.767 4 12q0 3.35 2.325 5.675C8.65 20 9.767 20 12 20" />
  </svg>
);
const ForwardRef = forwardRef(SvgCircleX);
export default ForwardRef;
