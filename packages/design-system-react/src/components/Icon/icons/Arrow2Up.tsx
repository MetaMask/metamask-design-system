import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Up = (
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
    <path d="M11 19.886V7.71l-5.6 5.6L4 11.885l8-8 8 8-1.4 1.425-5.6-5.6v12.176z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Up);
export default ForwardRef;
