import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUnpin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M141 166c-20 2-44 10-69 29-3 3-6 6-8 10q-3 6-3 12c0 4 0 8 2 12 1 4 4 8 7 11l90 90-80 80c-3 3-4 7-4 11s1 8 4 11c3 2 7 4 11 4s8-2 11-4l79-80 91 90c3 3 6 5 10 7 3 1 7 2 11 2h2c5 0 9-1 13-4 3-2 7-4 9-8 19-25 27-48 30-67zm203 158 98-98q9-9 9-21c0-8-3-16-9-21L328 70c-2-3-6-5-9-7-4-1-8-2-12-2s-8 1-11 2c-4 2-7 4-10 7l-98 98zM5 2l12 13" />
  </svg>
);
const ForwardRef = forwardRef(SvgUnpin);
export default ForwardRef;
