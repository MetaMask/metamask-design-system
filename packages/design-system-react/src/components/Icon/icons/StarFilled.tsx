import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStarFilled = (
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
    <path d="M5.825 20.886 7.45 13.86 2 9.136l7.2-.625L12 1.886l2.8 6.625 7.2.625-5.45 4.725 1.625 7.025L12 17.16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStarFilled);
export default ForwardRef;
