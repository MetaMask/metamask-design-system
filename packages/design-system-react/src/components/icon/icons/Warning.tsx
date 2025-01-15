import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWarning = (
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
    <path d="M252 51C139 51 47 143 47 256s92 205 205 205c112 0 204-92 204-205S364 51 252 51m-16 123c0-8 7-15 16-15 8 0 15 7 15 15v102c0 9-7 16-15 16-9 0-16-7-16-16zm34 172c-1 2-2 4-4 6s-4 4-7 5c-2 1-5 1-7 1-3 0-6 0-8-1-3-1-5-3-7-5s-3-4-4-6c-1-3-2-5-2-8s1-5 2-8c1-2 2-5 4-7 2-1 4-3 7-4q7.5-3 15 0c3 1 5 3 7 4 2 2 3 5 4 7 1 3 2 5 2 8s-1 5-2 8" />
  </svg>
);
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;
