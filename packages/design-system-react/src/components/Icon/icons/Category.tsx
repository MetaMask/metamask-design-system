import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCategory = (
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
    <path d="M3 10.886v-8h8v8zm0 10v-8h8v8zm10-10v-8h8v8zm0 10v-8h8v8zm-8-12h4v-4H5zm10 0h4v-4h-4zm0 10h4v-4h-4zm-10 0h4v-4H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory);
export default ForwardRef;
