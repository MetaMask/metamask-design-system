import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMessages = (
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
    <path d="M2 22V4q0-.824.588-1.412C3.175 1.999 3.45 2 4 2h16q.824 0 1.413.588C22.002 3.175 22 3.45 22 4v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587H6zm3.15-6H20V4H4v13.125z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMessages);
export default ForwardRef;
