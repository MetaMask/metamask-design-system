import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m9.55 17.886-5.7-5.7 1.425-1.425 4.275 4.275 9.175-9.175 1.425 1.425z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
