import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowRight = (
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
    <path d="m8.887 22-1.775-1.775L15.337 12 7.112 3.775 8.887 2l10 10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
