import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M447 336c-4-5-13-14-36-10-12 3-25 4-38 3-48-2-91-24-121-58-27-29-43-68-43-110 0-23 4-46 13-67s3-32-2-36c-4-5-15-11-37-2C99 91 47 175 53 265c7 84 66 157 145 184 18 6 38 10 59 11 3 0 6 1 10 1 68 0 133-33 173-88 14-19 10-31 7-37" />
  </svg>
);
const ForwardRef = forwardRef(SvgDark);
export default ForwardRef;
