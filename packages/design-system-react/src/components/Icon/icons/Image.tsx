import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 21.229q-.824 0-1.412-.587C2.999 20.055 3 19.779 3 19.229v-14q0-.824.588-1.413A1.93 1.93 0 0 1 5 3.23h14q.824 0 1.413.587Q21 4.404 21 5.23v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h14v-14H5zm1-2h12l-3.75-5-3 4-2.25-3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
