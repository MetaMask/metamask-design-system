import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Up = (
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
    <path d="M256 469c-13 0-21-9-21-22V119l-93 99c-8 9-21 9-29 0s-8-23 0-32L241 49c9-9 21-9 30 0l128 137c8 9 8 23 0 32s-21 9-29 0l-93-99v328c0 13-8 22-21 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Up);
export default ForwardRef;
