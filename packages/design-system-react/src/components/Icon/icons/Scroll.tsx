import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScroll = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M337 51H166C91 51 47 96 47 170v172c0 74 44 119 119 119h171c75 0 119-45 119-119V170c0-74-44-119-119-119M213 307c6 6 6 16 0 22-3 3-7 4-11 4s-7-1-10-4l-51-51c-13-12-13-32 0-44l51-51c5-6 15-6 21 0s6 16 0 22l-51 51zm150-29-51 51c-4 3-7 4-11 4s-8-1-11-4c-6-6-6-16 0-22l51-51-51-51c-6-6-6-16 0-22s16-6 22 0l51 51c12 12 12 32 0 44" />
  </svg>
);
const ForwardRef = forwardRef(SvgScroll);
export default ForwardRef;
