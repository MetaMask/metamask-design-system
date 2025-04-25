import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWidgets = (
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
    <path d="M16.65 13 11 7.35l5.65-5.65 5.65 5.65zM3 11V3h8v8zm10 10v-8h8v8zM3 21v-8h8v8zM5 9h4V5H5zm11.675 1.2L19.5 7.375 16.675 4.55 13.85 7.375zM15 19h4v-4h-4zM5 19h4v-4H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWidgets);
export default ForwardRef;
