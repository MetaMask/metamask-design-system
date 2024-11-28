import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="m434 379-98-157V96h7c11 0 20-9 20-20V63c0-11-9-20-20-20H169c-11 0-20 9-20 20v13c0 11 9 20 20 20h7v126L78 379c-24 39 4 90 50 90h256c46 0 74-51 50-90m-250-70 40-64c3-5 5-10 5-16V96h54v133c0 6 1 11 4 16l41 64z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlask);
export default ForwardRef;
