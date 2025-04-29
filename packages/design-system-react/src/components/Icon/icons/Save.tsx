import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 21V5q0-.824.588-1.412C6.176 2.999 6.45 3 7 3h10q.824 0 1.413.588C19.002 4.175 19 4.45 19 5v16l-7-3zm2-3.05 5-2.15 5 2.15V5H7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;
