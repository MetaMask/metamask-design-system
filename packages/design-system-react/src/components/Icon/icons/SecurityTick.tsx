import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecurityTick = (
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
    <path d="m10.95 15.436 5.65-5.65-1.425-1.426-4.225 4.225-2.1-2.1-1.425 1.425zm1.05 6.45q-3.476-.876-5.737-3.988C4.002 14.786 4 13.518 4 10.986v-6.1l8-3 8 3v6.1q0 3.8-2.262 6.912c-2.262 3.112-3.421 3.404-5.738 3.988m0-2.1q2.6-.825 4.3-3.3c1.7-2.476 1.7-3.484 1.7-5.5V6.26l-6-2.25-6 2.25v4.725q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurityTick);
export default ForwardRef;
