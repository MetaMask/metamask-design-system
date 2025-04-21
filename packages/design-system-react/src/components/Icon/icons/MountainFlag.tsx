import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMountainFlag = (
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
    <path d="m8.7 13.154 1.375.925L12 13.104l1.925.975 1.325-.875-1-1.975h-4.6zm-3.475 7.075H18.75l-2.6-5.225-2.075 1.375L12 15.354l-2.075 1.025-2.125-1.4zm-3.225 2 5.85-11.875q.25-.5.738-.812a1.93 1.93 0 0 1 1.062-.313H11v-7h7l-1 2 1 2h-5v3h1.25q.575 0 1.05.3c.475.3.567.467.75.8l5.95 11.9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMountainFlag);
export default ForwardRef;
