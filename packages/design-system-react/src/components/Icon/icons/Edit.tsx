import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M436 461H67c-8 0-15-7-15-16 0-8 7-15 15-15h369c8 0 15 7 15 15 0 9-7 16-15 16M395 82c-39-40-78-41-119 0l-25 24c-2 2-3 6-2 8 16 55 59 98 113 114h3c2 0 4-1 6-2l24-25c21-20 30-40 30-59 1-21-9-40-30-60m-70 164c-5-2-11-5-17-9-4-2-9-5-13-8-3-2-7-6-11-9-1 0-2-1-4-3q-10.5-9-21-21c-1-1-2-2-3-4-2-3-6-7-9-11-2-3-5-8-8-12-3-6-6-12-9-17 0-1 0-2-1-3-3-7-12-9-17-4L95 263c-3 2-5 8-6 11l-11 78c-2 14 2 27 10 36 8 7 18 11 29 11h7l79-11c4-1 9-3 11-6l117-117c6-6 4-15-3-18-1 0-2 0-3-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
