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
    <path d="m12 22-2.675-4H4q-.824 0-1.413-.587C1.998 16.826 2 16.55 2 16V4q0-.824.587-1.412C3.174 1.999 3.45 2 4 2h16q.824 0 1.413.588C22.002 3.175 22 3.45 22 4v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587h-5.325zm0-3.6 1.6-2.4H20V4H4v12h6.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTooltip);
export default ForwardRef;
