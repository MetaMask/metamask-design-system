import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m19.6 20.886-6.3-6.3q-.75.6-1.725.95c-.975.35-1.342.35-2.075.35q-2.725 0-4.612-1.888C3 12.11 3 11.202 3 9.386Q3 6.66 4.888 4.773T9.5 2.886q2.725 0 4.613 1.887Q16 6.66 16 9.386a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zm-10.1-7q1.875 0 3.188-1.313C14 11.26 14 10.636 14 9.386s-.437-2.313-1.312-3.188S10.75 4.886 9.5 4.886s-2.312.437-3.187 1.312S5 8.136 5 9.386s.438 2.312 1.313 3.187S8.25 13.886 9.5 13.886" />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
