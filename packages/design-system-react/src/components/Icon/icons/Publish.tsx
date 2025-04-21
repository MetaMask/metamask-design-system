import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPublish = (
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
    <path d="M11 20.229v-8.15l-2.6 2.6-1.4-1.45 5-5 5 5-1.4 1.45-2.6-2.6v8.15zm-7-11v-3q0-.824.588-1.413A1.93 1.93 0 0 1 6 4.23h12q.824 0 1.413.587Q20 5.405 20 6.23v3h-2v-3H6v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPublish);
export default ForwardRef;
