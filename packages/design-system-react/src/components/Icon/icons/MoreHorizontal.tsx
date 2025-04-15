import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoreHorizontal = (
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
    <path d="M107 213c-24 0-43 20-43 43s19 43 43 43c23 0 42-20 42-43s-19-43-42-43m298 0c-23 0-42 20-42 43s19 43 42 43c24 0 43-20 43-43s-19-43-43-43m-149 0c-23 0-43 20-43 43s20 43 43 43 43-20 43-43-20-43-43-43" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoreHorizontal);
export default ForwardRef;
