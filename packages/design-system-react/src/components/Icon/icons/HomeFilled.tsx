import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHomeFilled = (
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
    <path d="M4 20.886v-12l8-6 8 6v12h-6v-7h-4v7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeFilled);
export default ForwardRef;
