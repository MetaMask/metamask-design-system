import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDocumentCode = (
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
    <path d="M6 22q-.824 0-1.412-.587C4 20.826 4 20.55 4 20V4q0-.824.588-1.412C5.176 1.999 5.45 2 6 2h8l6 6v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm7-13V4H6v16h12V9z" />
    <path d="m11.12 15.613-1.232 1.253L6.721 13.7l3.167-3.168 1.232 1.254-1.914 1.914zM17.28 13.699l-3.168 3.167-1.232-1.253 1.914-1.914-1.914-1.914 1.232-1.254z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentCode);
export default ForwardRef;
