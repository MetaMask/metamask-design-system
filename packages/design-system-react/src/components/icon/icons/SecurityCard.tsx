import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecurityCard = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M282 284h-51c-6 0-11 5-11 11s5 11 11 11h51c6 0 11-5 11-11s-5-11-11-11m-83 0h-26c-6 0-11 5-11 11s5 11 11 11h26c6 0 11-5 11-11s-5-11-11-11M385 97 273 54c-12-4-31-4-43 0L118 97c-22 8-40 33-40 56v166c0 17 11 39 25 49l112 84c20 15 53 15 73 0l112-84c14-10 24-32 24-49V153c1-23-17-48-39-56m-7 193c-1 42-12 53-56 53H181c-44 0-56-11-56-56v-47c0-6 5-11 11-11h232c5 0 10 5 10 11zm0-93c0 6-5 10-10 10H136c-6 0-11-4-11-10v-13c0-40 10-53 45-56h152c45 0 56 11 56 56z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurityCard);
export default ForwardRef;