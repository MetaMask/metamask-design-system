import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEditSquare = (
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
    <path d="M5 21.229q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19.229v-14q0-.824.588-1.413C4.175 3.227 4.45 3.23 5 3.23h8.925l-2 2H5v14h14v-6.95l2-2v8.95q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm4-6v-4.25l9.175-9.175q.3-.3.675-.45c.375-.15.5-.15.75-.15a1.98 1.98 0 0 1 1.425.6l1.4 1.425q.275.3.425.662c.15.362.15.488.15.738s-.046.496-.137.737-.238.463-.438.663l-9.175 9.2zm2-2h1.4l5.8-5.8-.7-.7-.725-.7L11 11.804z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEditSquare);
export default ForwardRef;
