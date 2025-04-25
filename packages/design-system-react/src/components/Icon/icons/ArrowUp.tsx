import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowUp = (
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
    <path d="m22 16.113-1.775 1.775L12 9.661l-8.225 8.225L2 16.113l10-10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
