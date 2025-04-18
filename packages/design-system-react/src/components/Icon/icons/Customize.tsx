import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCustomize = (
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
    <path d="M11 20.886v-6h2v2h8v2h-8v2zm-8-2v-2h6v2zm4-4v-2H3v-2h4v-2h2v6zm4-2v-2h10v2zm4-4v-6h2v2h4v2h-4v2zm-12-2v-2h10v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCustomize);
export default ForwardRef;
