import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgViewInAr = (
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
    <path d="M11 19.475 6 16.6q-.475-.275-.737-.725c-.262-.45-.263-.633-.263-1v-5.75A1.95 1.95 0 0 1 6 7.4l5-2.875q.475-.275 1-.275c.525 0 .683.092 1 .275L18 7.4q.475.275.738.725c.263.45.262.633.262 1v5.75a1.95 1.95 0 0 1-1 1.725l-5 2.875q-.475.275-1 .275c-.525 0-.683-.092-1-.275m0-2.3v-4.6L7 10.25v4.625zm2 0 4-2.3V10.25l-4 2.325zM2 7V4q0-.824.588-1.412C3.175 1.999 3.45 2 4 2h3v2H4v3zm5 15H4q-.824 0-1.412-.587C1.999 20.826 2 20.55 2 20v-3h2v3h3zm10 0v-2h3v-3h2v3q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm3-15V4h-3V2h3q.824 0 1.413.588C22.002 3.175 22 3.45 22 4v3zm-8 3.85 3.95-2.325L12 6.25 8.05 8.525z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewInAr);
export default ForwardRef;
