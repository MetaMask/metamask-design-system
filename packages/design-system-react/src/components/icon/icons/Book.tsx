import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M469 111v256c0 21-17 40-37 42l-7 1c-35 5-84 20-124 36-14 6-29-4-29-20V127c0-8 5-15 12-19 39-22 98-41 138-44h1c26 0 46 21 46 47m-240-3c-39-22-98-41-139-44h-1c-26 0-46 21-46 47v256c0 21 17 40 37 42l7 1c35 5 84 20 124 36 14 6 29-4 29-20V127c0-8-4-15-11-19m-122 65h48c9 0 16 7 16 16s-7 16-16 16h-48c-9 0-16-7-16-16s7-16 16-16m64 97h-64c-9 0-16-7-16-16s7-16 16-16h64c9 0 16 7 16 16s-7 16-16 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgBook);
export default ForwardRef;
