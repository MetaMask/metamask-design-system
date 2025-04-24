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
    <path d="M11 20v-8.15l-2.6 2.6L7 13l5-5 5 5-1.4 1.45-2.6-2.6V20zM4 9V6q0-.824.588-1.412C5.176 4 5.45 4 6 4h12q.824 0 1.413.588C20.002 5.176 20 5.45 20 6v3h-2V6H6v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPublish);
export default ForwardRef;
