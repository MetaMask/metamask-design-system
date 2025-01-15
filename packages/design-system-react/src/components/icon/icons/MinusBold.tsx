import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMinusBold = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M93 224h320c18 0 32 14 32 32s-14 32-32 32H93c-18 0-32-14-32-32s14-32 32-32" />
  </svg>
);
const ForwardRef = forwardRef(SvgMinusBold);
export default ForwardRef;
