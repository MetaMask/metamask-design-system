import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoreVertical = (
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
    <path d="M213 405c0 24 20 43 43 43s43-19 43-43c0-23-20-42-43-42s-43 19-43 42m0-298c0 23 20 42 43 42s43-19 43-42c0-24-20-43-43-43s-43 19-43 43m0 149c0 23 20 43 43 43s43-20 43-43-20-43-43-43-43 20-43 43" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;
