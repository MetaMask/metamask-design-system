import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTablet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 20.729q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.712-.43-.288-.713-.288-.52.096-.712.288-.288.429-.288.712.096.52.288.713.429.287.712.287m-7 2.5q-.824 0-1.412-.587C2.999 22.055 3 21.779 3 21.229v-18q0-.824.588-1.413A1.93 1.93 0 0 1 5 1.23h14q.824 0 1.413.587Q21 2.404 21 3.23v18q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-5v3h14v-3zm0-2h14v-10H5zm0-12h14v-1H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTablet);
export default ForwardRef;
