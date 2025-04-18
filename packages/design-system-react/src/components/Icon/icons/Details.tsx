import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDetails = (
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
    <path d="M8 16.886q.424 0 .713-.288c.289-.288.287-.43.287-.712s-.096-.521-.287-.713-.43-.288-.713-.288-.52.096-.712.288-.288.43-.288.712.096.521.288.713.429.288.712.288m0-4q.424 0 .713-.288c.289-.288.287-.43.287-.712s-.096-.521-.287-.713-.43-.287-.713-.287-.52.095-.712.287-.288.43-.288.713.096.52.288.712.429.288.712.288m0-4q.424 0 .713-.288A.97.97 0 0 0 9 7.886a.97.97 0 0 0-.287-.713Q8.425 6.886 8 6.886c-.425 0-.52.095-.712.287A.97.97 0 0 0 7 7.886q0 .424.288.712.287.288.712.288m3 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6v-2h-6zm-6 12q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h14q.824 0 1.413.587.587.588.587 1.413v14q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm0-2h14v-14H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDetails);
export default ForwardRef;
