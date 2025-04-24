import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBuySell = (
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
    <path
      fillRule="evenodd"
      d="M7 4.252H5v3H2v2h3v3h2v-3h3v-2H7zm11 1 1.06 1.06L5.627 19.749l-1.061-1.06zm4 11v-2h-8v2z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBuySell);
export default ForwardRef;
