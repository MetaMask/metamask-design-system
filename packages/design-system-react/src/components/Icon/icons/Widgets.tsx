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
    <path d="M16.65 13.229 11 7.579l5.65-5.65 5.65 5.65zm-13.65-2v-8h8v8zm10 10v-8h8v8zm-10 0v-8h8v8zm2-12h4v-4H5zm11.675 1.2L19.5 7.604l-2.825-2.825-2.825 2.825zM15 19.229h4v-4h-4zm-10 0h4v-4H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWidgets);
export default ForwardRef;
