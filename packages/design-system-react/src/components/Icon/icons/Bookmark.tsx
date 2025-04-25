import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBookmark = (
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
    <path d="M6 22q-.824 0-1.412-.587C4 20.826 4 20.55 4 20V4q0-.824.588-1.412C5.176 1.999 5.45 2 6 2h12q.824 0 1.413.588C20.002 3.175 20 3.45 20 4v16q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h12V4h-2v7l-2.5-1.5L11 11V4H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
export default ForwardRef;
