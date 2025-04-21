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
    <path d="m11 19.704-5-2.875q-.475-.275-.737-.725c-.262-.45-.263-.633-.263-1v-5.75a1.95 1.95 0 0 1 1-1.725l5-2.875q.475-.275 1-.275c.525 0 .683.092 1 .275l5 2.875q.475.275.738.725c.263.45.262.633.262 1v5.75a1.95 1.95 0 0 1-1 1.725l-5 2.875q-.475.275-1 .275c-.525 0-.683-.092-1-.275m0-2.3v-4.6l-4-2.325v4.625zm2 0 4-2.3v-4.625l-4 2.325zM2 7.229v-3q0-.824.588-1.413A1.93 1.93 0 0 1 4 2.23h3v2H4v3zm5 15H4q-.824 0-1.412-.587C1.999 21.055 2 20.779 2 20.229v-3h2v3h3zm10 0v-2h3v-3h2v3q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm3-15v-3h-3v-2h3q.824 0 1.413.587Q22 3.404 22 4.23v3zm-8 3.85 3.95-2.325L12 6.479 8.05 8.754z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewInAr);
export default ForwardRef;
