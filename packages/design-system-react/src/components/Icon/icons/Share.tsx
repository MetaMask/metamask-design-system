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
    <path d="M6 22.886q-.824 0-1.412-.588C4 21.71 4 21.436 4 20.886v-11q0-.825.588-1.413A1.93 1.93 0 0 1 6 7.886h3v2H6v11h12v-11h-3v-2h3q.824 0 1.413.587.587.588.587 1.413v11q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm5-7V4.71l-1.6 1.6L8 4.884l4-4 4 4-1.4 1.425-1.6-1.6v11.176z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
