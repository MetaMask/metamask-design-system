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
    <path d="M5 20.886v-16q0-.825.588-1.413A1.93 1.93 0 0 1 7 2.886h10q.824 0 1.413.587.587.588.587 1.413v16l-7-3zm2-3.05 5-2.15 5 2.15V4.886H7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;
