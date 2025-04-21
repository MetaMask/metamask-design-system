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
    <path d="M4 20.229q-.824 0-1.412-.587C1.999 19.055 2 18.779 2 18.229v-12q0-.824.588-1.413A1.93 1.93 0 0 1 4 4.23h6l2 2h8q.824 0 1.413.587Q22 7.405 22 8.23v10q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h16v-10h-8.825l-2-2H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFolder);
export default ForwardRef;
