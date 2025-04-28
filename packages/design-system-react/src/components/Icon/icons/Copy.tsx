import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M9 18q-.825 0-1.412-.587C7 16.826 7 16.55 7 16V4q0-.824.588-1.412C8.176 1.999 8.45 2 9 2h9q.824 0 1.413.588C20.002 3.175 20 3.45 20 4v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h9V4H9zm-4 6q-.824 0-1.412-.587C2.999 20.826 3 20.55 3 20V6h2v14h11v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;
