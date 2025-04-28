import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMinusSquare = (
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
    <path d="M8 13h8q.424 0 .713-.287C17 12.426 17 12.283 17 12s-.096-.52-.287-.712S16.282 11 16 11H8q-.424 0-.713.288C6.998 11.575 7 11.717 7 12s.096.52.287.713S7.717 13 8 13m-3 8q-.824 0-1.412-.587C2.999 19.826 3 19.55 3 19V5q0-.824.588-1.412C4.175 2.999 4.45 3 5 3h14q.824 0 1.413.588C21.002 4.175 21 4.45 21 5v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h14V5H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMinusSquare);
export default ForwardRef;
