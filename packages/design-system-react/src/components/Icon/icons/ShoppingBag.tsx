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
    <path d="M6 22.229q-.824 0-1.412-.587C4 21.055 4 20.779 4 20.229v-12q0-.824.588-1.412A1.93 1.93 0 0 1 6 6.228h2q0-1.65 1.175-2.825T12 2.229c1.65 0 2.042.392 2.825 1.175Q16 4.579 16 6.229h2q.824 0 1.413.587Q20 7.405 20 8.23v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h12v-12h-2v2q0 .424-.287.713c-.287.288-.43.287-.713.287s-.52-.096-.712-.287-.288-.43-.288-.713v-2h-4v2q0 .424-.287.713c-.287.288-.43.287-.713.287s-.52-.096-.712-.287S8 10.512 8 10.229v-2H6zm4-14h4q0-.824-.587-1.413Q12.825 4.23 12 4.23c-.825 0-1.02.196-1.412.587A1.93 1.93 0 0 0 10 6.23" />
  </svg>
);
const ForwardRef = forwardRef(SvgShoppingBag);
export default ForwardRef;
