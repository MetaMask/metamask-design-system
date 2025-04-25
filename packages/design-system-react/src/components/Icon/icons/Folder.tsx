import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M4 20q-.824 0-1.412-.587C1.999 18.826 2 18.55 2 18V6q0-.824.588-1.412C3.175 4 3.45 4 4 4h6l2 2h8q.824 0 1.413.588C22.002 7.176 22 7.45 22 8v10q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h16V8h-8.825l-2-2H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFolder);
export default ForwardRef;
