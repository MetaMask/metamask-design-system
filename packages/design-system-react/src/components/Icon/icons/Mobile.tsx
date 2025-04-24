import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7 23q-.824 0-1.412-.587C5 21.826 5 21.55 5 21V3q0-.824.588-1.412C6.176.999 6.45 1 7 1h10q.824 0 1.413.587C19.002 2.175 19 2.45 19 3v18q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-3v1h10v-1zm0-2h10V6H7zM7 4h10V3H7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;
