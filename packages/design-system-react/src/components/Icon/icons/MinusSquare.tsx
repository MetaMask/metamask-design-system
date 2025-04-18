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
    <path d="M8 12.886h8q.424 0 .713-.288c.288-.288.287-.43.287-.712s-.096-.521-.287-.713-.43-.287-.713-.287H8q-.424 0-.713.287c-.289.287-.287.43-.287.713s.096.52.287.712.43.288.713.288m-3 8q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h14q.824 0 1.413.587.587.588.587 1.413v14q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm0-2h14v-14H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMinusSquare);
export default ForwardRef;
