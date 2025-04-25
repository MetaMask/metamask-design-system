import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDownload = (
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
    <path d="m12 16-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.824 0-1.412-.587C4 18.826 4 18.55 4 18v-3h2v3h12v-3h2v3q0 .824-.587 1.413c-.587.589-.863.587-1.413.587z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;
