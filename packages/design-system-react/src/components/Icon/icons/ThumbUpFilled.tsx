import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgThumbUpFilled = (
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
    <path d="M18 21.229H8v-13l7-7 1.25 1.25q.175.175.288.475c.113.3.112.392.112.575v.35l-1.1 4.35H21q.8 0 1.4.6c.6.6.6.867.6 1.4v2a2 2 0 0 1-.15.75l-3 7.05q-.225.5-.75.85c-.525.35-.717.35-1.1.35m-12-13v13H2v-13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgThumbUpFilled);
export default ForwardRef;
