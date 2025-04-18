import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUsb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 21.886q-.825 0-1.412-.588C10 20.71 10 20.436 10 19.886q0-.525.275-.975c.275-.45.425-.542.725-.726v-2.3H8q-.824 0-1.412-.587C6 14.711 6 14.435 6 13.885v-2.3q-.45-.225-.725-.675C5 10.46 5 10.27 5 9.885q0-.825.588-1.412.587-.588 1.412-.588c.825 0 1.02.196 1.413.588Q9 9.061 9 9.885q0 .576-.275 1c-.275.424-.425.517-.725.7v2.3h3v-8H9l3-4 3 4h-2v8h3v-2h-1v-4h4v4h-1v2q0 .825-.587 1.413c-.587.588-.863.587-1.413.587h-3v2.3q.476.25.738.7c.262.45.262.634.262 1q0 .825-.587 1.413c-.588.588-.863.587-1.413.587" />
  </svg>
);
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
