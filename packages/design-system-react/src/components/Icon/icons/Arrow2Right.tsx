import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Right = (
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
    <path d="M4 10.886h12.175l-5.6-5.6L12 3.886l8 8-8 8-1.425-1.4 5.6-5.6H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Right);
export default ForwardRef;
