import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUploadFile = (
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
    <path d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4-4 4 1.425 1.4L11 14.825zm-5 3q-.824 0-1.412-.587C4 20.826 4 20.55 4 20V4q0-.824.588-1.412C5.176 1.999 5.45 2 6 2h8l6 6v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm7-13V4H6v16h12V9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUploadFile);
export default ForwardRef;
