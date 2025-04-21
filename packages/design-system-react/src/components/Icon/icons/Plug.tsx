import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPlug = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11.5 18.886h1v-1.85l3.5-3.5v-4.65H8v4.65l3.5 3.5zm-2 2v-3l-3.5-3.5v-5.5q0-.825.588-1.413A1.93 1.93 0 0 1 8 6.886h1l-1 1v-5h2v4h4v-4h2v5l-1-1h1q.824 0 1.413.587.587.588.587 1.413v5.5l-3.5 3.5v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlug);
export default ForwardRef;
