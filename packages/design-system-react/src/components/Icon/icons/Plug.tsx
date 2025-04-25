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
    <path d="M11.5 19h1v-1.85l3.5-3.5V9H8v4.65l3.5 3.5zm-2 2v-3L6 14.5V9q0-.825.588-1.412C7.176 7 7.45 7 8 7h1L8 8V3h2v4h4V3h2v5l-1-1h1q.824 0 1.413.588C18.002 8.176 18 8.45 18 9v5.5L14.5 18v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlug);
export default ForwardRef;
