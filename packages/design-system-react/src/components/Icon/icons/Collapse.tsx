import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCollapse = (
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
    <path d="M422 64c5 0 9 2 13 5 7 8 7 19 0 26L328 202h66c11 0 19 7 19 18 0 12-8 19-19 19H284c-2 0-6 0-8-2-2 0-3-2-5-4-2-1-4-3-4-5-2-2-2-6-2-8V110c0-11 8-19 19-19s18 8 18 19v66L409 69c4-3 7-5 13-5M228 257H118c-11 0-19 8-19 19s8 18 19 18h66L77 401c-7 7-7 19 0 26 8 7 19 7 26 0l107-107v66c0 11 7 19 18 19s19-8 19-19V276c0-2 0-6-2-8 0-1-2-3-4-5s-3-4-5-4c-2-2-6-2-8-2" />
  </svg>
);
const ForwardRef = forwardRef(SvgCollapse);
export default ForwardRef;
