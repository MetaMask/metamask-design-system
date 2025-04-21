import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgInventory = (
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
    <path d="M5 22.229q-.824 0-1.412-.587C2.999 21.055 3 20.779 3 20.229V8.954q-.45-.274-.725-.713A1.86 1.86 0 0 1 2 7.23v-3q0-.824.588-1.413A1.93 1.93 0 0 1 4 2.23h16q.824 0 1.413.587Q22 3.404 22 4.23v3q0 .574-.275 1.012T21 8.954v11.275q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-13v11h14v-11zm-1-2h16v-3H4zm5 7h6v-2H9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInventory);
export default ForwardRef;
