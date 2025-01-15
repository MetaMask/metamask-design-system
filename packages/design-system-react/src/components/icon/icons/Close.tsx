import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M91 421c4 4 8 6 13 6 6 0 10-2 14-6l138-138 138 138c4 4 8 6 14 6 5 0 9-2 13-6 8-8 8-19 0-27L283 256l138-138c8-8 8-19 0-27s-19-8-27 0L256 229 118 91c-8-8-19-8-27 0s-8 19 0 27l138 138L91 394c-8 8-8 19 0 27" />
  </svg>
);
const ForwardRef = forwardRef(SvgClose);
export default ForwardRef;
