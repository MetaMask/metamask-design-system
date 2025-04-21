import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDarkFilled = (
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
    <path d="M12 21.229q-3.75 0-6.375-2.625C3 15.979 3 14.729 3 12.229s.875-4.625 2.625-6.375S9.5 3.229 12 3.229a9 9 0 0 1 1.35.1q-1.026.725-1.637 1.887C11.102 6.378 11.1 6.83 11.1 7.73q0 2.25 1.575 3.825C14.25 13.129 15 13.129 16.5 13.129q1.375 0 2.525-.613c1.15-.613 1.392-.954 1.875-1.637a8.5 8.5 0 0 1 .1 1.35q0 3.75-2.625 6.375C15.75 21.229 14.5 21.229 12 21.229" />
  </svg>
);
const ForwardRef = forwardRef(SvgDarkFilled);
export default ForwardRef;
