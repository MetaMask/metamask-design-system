import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M17.25 17.886H22v2h-6.75zm-12.5 2L2.625 17.76q-.575-.576-.588-1.425-.012-.85.563-1.45l11-11.4q.575-.6 1.412-.6.838 0 1.413.574L21.4 8.436q.575.576.575 1.425t-.575 1.426l-8.4 8.6zm7.4-2L20 9.836l-4.95-4.95L4 16.285l1.6 1.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEraser);
export default ForwardRef;
