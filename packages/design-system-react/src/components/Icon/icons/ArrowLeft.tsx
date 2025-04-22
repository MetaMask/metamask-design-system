import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowLeft = (
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
    <path d="m16 21.886-10-10 10-10 1.775 1.775-8.225 8.224 8.225 8.226z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
