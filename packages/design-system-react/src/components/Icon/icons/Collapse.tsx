import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCollapse = (
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
    <path d="M11 12.886v6H9v-4H5v-2zm4-8v4h4v2h-6v-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCollapse);
export default ForwardRef;
