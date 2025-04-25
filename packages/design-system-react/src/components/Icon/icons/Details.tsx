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
    <path d="M8 17q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.713S8.283 15 8 15s-.52.096-.712.287S7 15.717 7 16s.096.52.288.712S7.717 17 8 17m0-4q.424 0 .713-.287c.289-.287.287-.43.287-.713s-.096-.52-.287-.712S8.283 11 8 11s-.52.096-.712.288S7 11.717 7 12s.096.52.288.713S7.717 13 8 13m0-4q.424 0 .713-.287C9.002 8.426 9 8.283 9 8s-.096-.52-.287-.712S8.283 7 8 7s-.52.096-.712.288S7 7.717 7 8s.096.52.288.713S7.717 9 8 9m3 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6V7h-6zM5 21q-.824 0-1.412-.587C2.999 19.826 3 19.55 3 19V5q0-.824.588-1.412C4.175 2.999 4.45 3 5 3h14q.824 0 1.413.588C21.002 4.175 21 4.45 21 5v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h14V5H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDetails);
export default ForwardRef;
