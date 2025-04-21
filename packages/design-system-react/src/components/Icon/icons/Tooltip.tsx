import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTooltip = (
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
    <path d="m12 22.229-2.675-4H4q-.824 0-1.413-.587C1.998 17.055 2 16.779 2 16.229v-12q0-.824.587-1.413A1.93 1.93 0 0 1 4 2.23h16q.824 0 1.413.587Q22 3.404 22 4.23v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587h-5.325zm0-3.6 1.6-2.4H20v-12H4v12h6.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTooltip);
export default ForwardRef;
