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
    <path d="m11.9 13.729 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1-1.4-1.4-2.1 2.1-2.1-2.1-1.4 1.4 2.1 2.1-2.1 2.1zm-3.9 4.5q-.824 0-1.412-.587C6 17.055 6 16.779 6 16.229v-12q0-.824.588-1.413A1.93 1.93 0 0 1 8 2.23h12q.824 0 1.413.587Q22 3.404 22 4.23v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h12v-12H8zm-4 6q-.824 0-1.412-.587C1.999 21.055 2 20.779 2 20.229v-14h2v14h14v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTabClose);
export default ForwardRef;
