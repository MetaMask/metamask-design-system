import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCheckBold = (
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
    <path d="m9.55 18.685-6.5-6.5 2.25-2.25 4.25 4.25 9.15-9.15 2.25 2.25z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckBold);
export default ForwardRef;
