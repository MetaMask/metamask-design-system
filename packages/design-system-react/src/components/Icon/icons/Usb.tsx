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
    <path d="M12 22q-.825 0-1.412-.587C10 20.826 10 20.55 10 20q0-.525.275-.975c.275-.45.425-.542.725-.725V16H8q-.824 0-1.412-.588C6 14.824 6 14.55 6 14v-2.3q-.45-.225-.725-.675C5 10.575 5 10.383 5 10q0-.824.588-1.413C6.176 7.998 6.45 8 7 8s1.02.196 1.413.587S9 9.45 9 10q0 .575-.275 1c-.275.425-.425.517-.725.7V14h3V6H9l3-4 3 4h-2v8h3v-2h-1V8h4v4h-1v2q0 .824-.587 1.412C16.826 16 16.55 16 16 16h-3v2.3q.476.25.738.7c.262.45.262.633.262 1q0 .825-.587 1.412C12.825 22 12.55 22 12 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
