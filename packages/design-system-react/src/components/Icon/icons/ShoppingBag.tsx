import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgShoppingBag = (
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
    <path d="M6 22q-.824 0-1.412-.587C4 20.826 4 20.55 4 20V8q0-.824.588-1.412C5.176 6 5.45 6 6 6h2q0-1.65 1.175-2.825C10.35 2 10.9 2 12 2s2.042.392 2.825 1.175S16 4.9 16 6h2q.824 0 1.413.588C20.002 7.176 20 7.45 20 8v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h12V8h-2v2q0 .424-.287.713c-.287.289-.43.287-.713.287s-.52-.096-.712-.287S14 10.283 14 10V8h-4v2q0 .424-.287.713c-.287.289-.43.287-.713.287s-.52-.096-.712-.287S8 10.283 8 10V8H6zm4-14h4q0-.824-.587-1.412C12.825 4 12.55 4 12 4s-1.02.196-1.412.588S10 5.45 10 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgShoppingBag);
export default ForwardRef;
