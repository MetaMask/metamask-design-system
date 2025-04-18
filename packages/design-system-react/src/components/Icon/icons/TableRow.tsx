import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTableRow = (
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
    <path d="M19 19.229v-3H5v3zm0-5v-4H5v4zm0-6v-3H5v3zm-14 13q-.824 0-1.412-.587C2.999 20.055 3 19.779 3 19.229v-14q0-.824.588-1.413A1.93 1.93 0 0 1 5 3.23h14q.824 0 1.413.587Q21 4.404 21 5.23v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTableRow);
export default ForwardRef;
