import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSignalCellular = (
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
    <path d="m16.9 21.729-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.075 2.1 2.075 2.1-1.4 1.4-2.1-2.075zm-14.9.5L22 2.254v10.675q-.45-.276-.95-.437a8 8 0 0 0-1.05-.263v-5.15L6.825 20.229h6.425q.2.575.5 1.075t.675.925zm4.825-2L20 7.079a1217 1217 0 0 1-3.45 3.437 1077 1077 0 0 0-3.037 3.025l-3.088 3.088z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSignalCellular);
export default ForwardRef;
