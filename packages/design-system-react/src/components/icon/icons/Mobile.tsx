import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M338 51H165c-57 0-77 21-77 78v254c0 57 20 78 77 78h173c57 0 77-21 77-78V129c0-57-20-78-77-78m-86 355c-20 0-36-17-36-36 0-20 16-36 36-36 19 0 35 16 35 36 0 19-16 36-35 36m40-268h-81c-9 0-16-7-16-15 0-9 7-15 16-15h81c9 0 16 6 16 15 0 8-7 15-16 15" />
  </svg>
);
const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;
