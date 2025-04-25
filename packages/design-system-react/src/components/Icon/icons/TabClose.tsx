import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTabClose = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m11.9 13.5 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1-1.4-1.4L14 8.6l-2.1-2.1-1.4 1.4 2.1 2.1-2.1 2.1zM8 18q-.824 0-1.412-.587C6 16.826 6 16.55 6 16V4q0-.824.588-1.412C7.176 1.999 7.45 2 8 2h12q.824 0 1.413.588C22.002 3.175 22 3.45 22 4v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h12V4H8zm-4 6q-.824 0-1.412-.587C1.999 20.826 2 20.55 2 20V6h2v14h14v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTabClose);
export default ForwardRef;
