import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M437 117c-33-3-66-5-99-7l-4-27c-3-19-8-47-56-47h-54c-47 0-52 27-55 47l-4 26c-19 1-38 2-57 4l-42 4c-9 1-15 9-14 17 1 9 8 15 17 14l41-4c108-11 216-7 324 4h2c8 0 15-6 15-14 1-8-5-16-14-17m-37 60c-5-5-12-8-19-8H122c-7 0-14 3-19 8-4 5-7 12-7 19l13 210c2 31 5 70 77 70h131c72 0 75-38 77-70l13-210c0-7-3-14-7-19M286 374h-69c-8 0-15-7-15-16 0-8 7-15 15-15h69c8 0 15 7 15 15 0 9-7 16-15 16m17-82H200c-8 0-15-7-15-16 0-8 7-15 15-15h103c8 0 15 7 15 15 0 9-7 16-15 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrash);
export default ForwardRef;
