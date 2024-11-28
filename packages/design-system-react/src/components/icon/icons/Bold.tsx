import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M107 85c0-11 9-21 21-21h171c28 0 55 11 75 31s31 47 31 76c0 28-11 55-31 75l-2 2c8 5 16 11 23 18 20 20 32 47 32 75 0 29-12 56-32 76s-47 31-75 31H128c-12 0-21-10-21-21zm42 150h150c17 0 33-7 45-19s19-28 19-45-7-34-19-46-28-18-45-18H149zm0 42v128h171c17 0 33-6 45-18s19-29 19-46-7-33-19-45-28-19-45-19z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
