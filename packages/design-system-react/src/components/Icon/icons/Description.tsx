import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDescription = (
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
    <path d="M8 18.229h8v-2H8zm0-4h8v-2H8zm-2 8q-.824 0-1.412-.587C4 21.055 4 20.779 4 20.229v-16q0-.824.588-1.413A1.93 1.93 0 0 1 6 2.23h8l6 6v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm7-13v-5H6v16h12v-11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDescription);
export default ForwardRef;
