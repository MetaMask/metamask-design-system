import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M6 23q-.824 0-1.412-.587C4 21.826 4 21.55 4 21V10q0-.825.588-1.412C5.176 8 5.45 8 6 8h3v2H6v11h12V10h-3V8h3q.824 0 1.413.588c.589.588.587.862.587 1.412v11q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm5-7V4.825l-1.6 1.6L8 5l4-4 4 4-1.4 1.425-1.6-1.6V16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
