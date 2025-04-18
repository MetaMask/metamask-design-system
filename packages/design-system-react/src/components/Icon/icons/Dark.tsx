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
    <path d="M12 20.886q-3.75 0-6.375-2.625C3 15.636 3 14.386 3 11.886S3.875 7.26 5.625 5.51 9.5 2.886 12 2.886a9 9 0 0 1 1.35.1q-1.026.724-1.637 1.887c-.611 1.163-.613 1.613-.613 2.513q0 2.25 1.575 3.825C14.25 12.785 15 12.785 16.5 12.785q1.375 0 2.525-.612c1.15-.612 1.392-.954 1.875-1.638a8.5 8.5 0 0 1 .1 1.35q0 3.75-2.625 6.375C15.75 20.886 14.5 20.886 12 20.886m0-2q2.2 0 3.95-1.213c1.75-1.213 2.017-1.862 2.55-3.162q-.5.125-1 .2c-.5.075-.667.075-1 .075q-3.075 0-5.237-2.163T9.1 7.386q0-.5.075-1t.2-1a7 7 0 0 0-3.163 2.55Q5 9.686 5 11.886q0 2.9 2.05 4.95c2.05 2.05 3.017 2.05 4.95 2.05" />
  </svg>
);
const ForwardRef = forwardRef(SvgDark);
export default ForwardRef;
