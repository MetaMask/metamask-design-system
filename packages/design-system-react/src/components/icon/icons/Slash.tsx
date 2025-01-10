import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M469 256c0 117-96 213-213 213-32 0-62-7-90-20-13-6-15-23-5-34l254-254c10-10 28-8 34 5 13 27 20 58 20 90m-426 0c0 53 19 102 52 139l-47 46c-7 7-7 17 0 24 3 3 7 4 11 4s8-1 12-5L464 71c7-7 7-17 0-23-6-7-16-7-23 0l-46 47c-37-33-86-52-139-52-118 0-213 95-213 213" />
  </svg>
);
const ForwardRef = forwardRef(SvgSlash);
export default ForwardRef;
