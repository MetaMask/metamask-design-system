import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 21q-3.75 0-6.375-2.625C3 15.75 3 14.5 3 12s.875-4.625 2.625-6.375S9.5 3 12 3a9 9 0 0 1 1.35.1q-1.026.725-1.637 1.888C11.102 6.15 11.1 6.6 11.1 7.5q0 2.25 1.575 3.825C14.25 12.9 15 12.9 16.5 12.9q1.375 0 2.525-.613c1.15-.613 1.392-.954 1.875-1.637A8.5 8.5 0 0 1 21 12q0 3.75-2.625 6.375C15.75 21 14.5 21 12 21m0-2q2.2 0 3.95-1.212c1.75-1.212 2.017-1.863 2.55-3.163q-.5.125-1 .2c-.5.075-.667.075-1 .075q-3.075 0-5.237-2.162T9.1 7.5q0-.5.075-1c.075-.5.117-.667.2-1q-1.95.8-3.163 2.55C5 9.8 5 10.533 5 12q0 2.9 2.05 4.95C9.1 19 10.067 19 12 19" />
  </svg>
);
const ForwardRef = forwardRef(SvgDark);
export default ForwardRef;
