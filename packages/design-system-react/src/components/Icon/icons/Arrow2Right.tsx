import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2Right = (
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
    <path d="M310 405c-7 0-11-2-16-6-9-8-9-21 0-29l99-93H65c-13 0-22-8-22-21s9-21 22-21h328l-99-93c-9-8-9-21 0-29s23-8 32 0l137 128q6 6 6 15t-6 15L326 399c-5 4-9 6-16 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2Right);
export default ForwardRef;
