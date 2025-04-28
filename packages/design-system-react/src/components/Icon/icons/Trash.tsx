import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7 21q-.824 0-1.412-.587C5 19.826 5 19.55 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrash);
export default ForwardRef;
