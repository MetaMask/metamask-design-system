import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M252 51c-41 0-81 12-114 35-34 22-60 54-76 92-15 37-19 78-11 118s27 76 56 105c28 28 65 48 105 56 39 8 80 4 118-12 37-15 69-42 92-75 22-34 34-73 34-114 0-54-21-106-60-145-38-38-90-60-144-60m-4 95c4 0 9 1 13 4 4 2 7 6 8 10 2 5 3 9 2 14s-3 9-7 12c-3 3-7 6-12 7-4 0-9 0-13-2-5-2-8-5-11-9-3-3-4-8-4-13 0-6 2-12 7-16 4-5 10-7 17-7m19 220h-15c-5 0-9-1-12-4s-4-7-4-11v-95c-4 0-8-2-11-5s-5-7-5-11 2-8 5-11 7-5 11-5h16c4 0 8 2 11 5s4 7 4 11v95c4 0 8 1 11 4s5 7 5 12c0 4-2 8-5 11s-7 4-11 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgInfo);
export default ForwardRef;
