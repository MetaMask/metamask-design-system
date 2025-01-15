import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCodeCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M252 51C138 51 47 143 47 256s91 205 205 205c113 0 204-92 204-205S365 51 252 51m-72 235c6 6 6 16 0 22-3 3-7 4-10 4-4 0-8-1-11-4l-41-41c-6-6-6-16 0-22l41-41c6-6 16-6 21 0 6 6 6 16 0 22l-30 30zm106-72-41 96c-2 6-8 9-14 9-2 0-4 0-6-1-8-3-11-12-8-20l41-96c3-8 12-12 20-8 8 3 11 12 8 20m99 53-41 41c-3 3-7 4-11 4-3 0-7-1-10-4-6-6-6-16 0-22l30-30-30-30c-6-6-6-16 0-22s15-6 21 0l41 41c6 6 6 16 0 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeCircle);
export default ForwardRef;
