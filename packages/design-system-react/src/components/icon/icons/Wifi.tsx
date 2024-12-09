import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWifi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M257 232c-42 0-82 15-114 41-9 8-23 7-30-2-8-10-7-23 2-31 40-33 90-51 142-51 51 0 101 18 141 51 9 8 10 21 3 31-8 9-21 10-30 2-32-26-73-41-114-41m-1-91c-66 0-129 24-178 67-9 8-22 7-30-1-8-9-7-23 2-31 57-50 130-77 206-77s149 27 206 77c9 8 10 22 2 31-8 8-21 9-30 1-49-43-113-67-178-67m0 182c-18 0-36 5-51 16-9 7-23 4-29-5-7-10-5-23 5-30 22-16 48-24 75-24s53 8 76 24c9 7 11 20 5 30-7 9-21 12-30 5-15-11-33-16-51-16m-21 69c0-12 9-21 21-21s21 9 21 21-9 21-21 21-21-9-21-21" />
  </svg>
);
const ForwardRef = forwardRef(SvgWifi);
export default ForwardRef;
