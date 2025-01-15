import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowDoubleLeft = (
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
    <path d="M254 64c7 0 12 2 16 6 10 9 10 22 0 31L118 241c-5 4-7 9-7 15s2 11 7 15l152 140c10 9 10 22 0 31-9 8-23 8-33 0L85 301q-21-19.5-21-45c0-17 7-35 21-45L237 70c5-4 10-6 17-6m171 0c7 0 11 2 16 6 9 9 9 22 0 31L289 241c-5 4-7 9-7 15s2 11 7 15l152 140c9 9 9 22 0 31-9 8-23 8-33 0L256 301q-21-19.5-21-45c0-17 7-35 21-45L408 70c5-4 10-6 17-6" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDoubleLeft);
export default ForwardRef;
