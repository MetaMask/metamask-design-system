import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M426 360c-6 0-10-2-15-7L271 201c-9-9-21-9-30 0L101 356c-9 9-22 9-31 0-8-10-8-24 0-33l141-153c26-28 67-28 90 0l141 153c8 9 8 23 0 33-5 4-9 4-16 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
