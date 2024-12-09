import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M342 74c-37 0-70 18-90 45-21-27-54-45-91-45-63 0-114 51-114 114 0 25 4 47 10 68 33 102 132 164 182 180 7 3 18 3 25 0 50-16 149-78 182-180 6-21 10-43 10-68 0-63-51-114-114-114" />
  </svg>
);
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;
