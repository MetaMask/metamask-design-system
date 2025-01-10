import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M416 150 298 67c-32-22-81-21-112 3L83 150c-20 16-36 49-36 75v141c0 52 42 95 94 95h221c52 0 94-43 94-95V227c0-27-17-61-40-77M267 379c0 8-7 15-15 15-9 0-16-7-16-15v-62c0-8 7-15 16-15 8 0 15 7 15 15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;
