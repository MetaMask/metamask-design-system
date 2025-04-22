import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M22 5.886v12q0 .825-.587 1.412c-.587.587-.863.588-1.413.588H4q-.824 0-1.412-.588C1.999 18.71 2 18.436 2 17.886v-12q0-.825.588-1.413A1.93 1.93 0 0 1 4 3.886h16q.824 0 1.413.587.587.588.587 1.413m-18 2h16v-2H4zm0 4v6h16v-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCard);
export default ForwardRef;
