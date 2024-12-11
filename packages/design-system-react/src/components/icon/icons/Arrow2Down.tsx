import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Down = (
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
    <path d="M256 469q-9 0-15-6L113 326c-8-9-8-23 0-32s21-9 29 0l93 99V65c0-13 8-22 21-22s21 9 21 22v328l93-99c8-9 21-9 29 0s8 23 0 32L271 463q-6 6-15 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Down);
export default ForwardRef;
