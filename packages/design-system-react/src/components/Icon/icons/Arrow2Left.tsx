import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Left = (
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
    <path d="M20 12.886H7.825l5.6 5.6-1.425 1.4-8-8 8-8 1.425 1.4-5.6 5.6H20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Left);
export default ForwardRef;
