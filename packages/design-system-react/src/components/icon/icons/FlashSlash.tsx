import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlashSlash = (
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
    <path d="M400 269 239 453c-24 27-43 20-43-16v-57l151-151h35c30 0 38 18 18 40m41-221c7-7 17-7 23 0 7 6 7 16 0 23L71 464c-4 4-8 5-12 5s-8-1-11-4c-7-7-7-17 0-24l148-148v-10h-66c-30 0-38-18-18-40L273 59c24-27 43-20 43 16v98z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlashSlash);
export default ForwardRef;
