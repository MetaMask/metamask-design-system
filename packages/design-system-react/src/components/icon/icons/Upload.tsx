import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M263 65c3 1 6 3 8 5l95 95c8 8 8 22 0 30-8 9-22 9-30 0l-59-58v176c0 12-9 21-21 21s-21-9-21-21V137l-59 58c-8 9-22 9-30 0-8-8-8-22 0-30l95-95 2-2c1 0 2-1 4-2s6-2 9-2m0 0c3 0 5 0 7 1zM85 292c12 0 22 9 22 21v76c0 4 1 8 5 11 3 4 7 5 11 5h266c4 0 8-1 11-5 4-3 5-7 5-11v-76c0-12 10-21 22-21 11 0 21 9 21 21v76c0 15-6 31-17 42s-27 17-42 17H123c-15 0-31-6-42-17s-17-27-17-42v-76c0-12 10-21 21-21" />
  </svg>
);
const ForwardRef = forwardRef(SvgUpload);
export default ForwardRef;
