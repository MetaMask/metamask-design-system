import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 15.886v-8.15l-2.6 2.6L7 8.886l5-5 5 5-1.4 1.45-2.6-2.6v8.15zm-5 4q-.824 0-1.412-.588C4 18.71 4 18.436 4 17.886v-3h2v3h12v-3h2v3q0 .825-.587 1.412c-.587.587-.863.588-1.413.588z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUpload);
export default ForwardRef;
