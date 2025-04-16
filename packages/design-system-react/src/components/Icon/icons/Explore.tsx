import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgExplore = (
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
    <path d="M262 469c118 0 213-95 213-213S380 43 262 43 49 138 49 256s95 213 213 213m85-361c18-4 36 1 49 14s18 31 14 49l-37 146c-6 25-25 44-50 50l-146 37c-4 1-9 1-13 1-13 0-26-5-36-15-13-13-18-31-14-49l37-146c6-25 25-44 50-50zM204 256c0 32 26 58 58 58s58-26 58-58-26-58-58-58-58 26-58 58" />
  </svg>
);
const ForwardRef = forwardRef(SvgExplore);
export default ForwardRef;
