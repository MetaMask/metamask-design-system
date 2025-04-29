import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Down = (
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
    <path d="M13 4v12.175l5.6-5.6L20 12l-8 8-8-8 1.4-1.425 5.6 5.6V4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Down);
export default ForwardRef;
