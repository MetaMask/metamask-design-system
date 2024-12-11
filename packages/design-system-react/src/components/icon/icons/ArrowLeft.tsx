import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowLeft = (
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
    <path d="M339 448c-7 0-12-2-16-6L170 301c-28-23-28-64 0-90L323 70c9-8 23-8 33 0 9 9 9 22 0 31L203 241c-9 9-9 21 0 30l153 140c9 9 9 22 0 31-5 4-12 6-17 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
