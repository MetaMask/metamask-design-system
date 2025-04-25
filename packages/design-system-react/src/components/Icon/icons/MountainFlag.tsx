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
    <path d="m8.7 12.925 1.375.925L12 12.875l1.925.975 1.325-.875-1-1.975h-4.6zM5.225 20H18.75l-2.6-5.225-2.075 1.375L12 15.125 9.925 16.15 7.8 14.75zM2 22l5.85-11.875q.25-.5.738-.812C9.076 9 9.267 9 9.65 9H11V2h7l-1 2 1 2h-5v3h1.25q.575 0 1.05.3c.475.3.567.467.75.8L22 22z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMountainFlag);
export default ForwardRef;
