import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBridge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M74 284c-21 7-36 26-36 49 0 28 23 51 52 51 28 0 51-23 51-51 0-20-12-38-28-46 14-65 73-114 143-114 47 0 89 22 116 56 12-6 25-10 39-11-33-50-90-84-155-84-90 0-165 65-182 150m400 49c0 28-23 51-52 51-28 0-51-23-51-51s23-51 51-51c29 0 52 23 52 51" />
  </svg>
);
const ForwardRef = forwardRef(SvgBridge);
export default ForwardRef;
