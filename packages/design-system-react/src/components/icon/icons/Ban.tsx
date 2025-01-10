import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M43 256c0-118 95-213 213-213s213 95 213 213-95 213-213 213S43 374 43 256m77-109c-24 30-39 68-39 109 0 96 79 175 175 175 41 0 79-15 109-39zm27-27 245 245c24-30 39-68 39-109 0-96-79-175-175-175-41 0-79 15-109 39" />
  </svg>
);
const ForwardRef = forwardRef(SvgBan);
export default ForwardRef;
