import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPeople = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M365 169h-5c-31-1-56-27-56-59s26-59 59-59c32 0 59 27 59 59s-25 58-57 59m67 142c-23 16-56 21-85 17 8-16 12-35 12-55s-5-40-13-57c30-4 62 2 85 17 33 22 33 57 1 78M138 169h4c32-1 57-27 57-59s-27-59-59-59c-33 0-59 27-59 59s25 58 57 59m2 104c0 20 4 39 12 56-29 3-59-3-81-17-32-22-32-57 0-79 22-14 53-20 82-17-9 17-13 37-13 57m114 62h-5c-38-1-68-32-68-70 0-39 31-70 71-70 38 0 70 31 70 70 0 38-30 69-68 70m-67 43c-31 20-31 54 0 75 36 23 93 23 129 0 31-21 31-55 0-75-35-24-93-24-129 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgPeople);
export default ForwardRef;