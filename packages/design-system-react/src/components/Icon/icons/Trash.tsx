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
    <path d="M7 20.886q-.824 0-1.412-.588C5 19.71 5 19.436 5 18.886v-13H4v-2h5v-1h6v1h5v2h-1v13q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm10-15H7v13h10zm-8 11h2v-9H9zm4 0h2v-9h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrash);
export default ForwardRef;
