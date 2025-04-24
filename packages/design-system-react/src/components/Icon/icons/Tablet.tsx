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
    <path d="M12 20.5q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.712-.43-.288-.713-.288-.52.096-.712.288-.288.429-.288.712.096.52.288.713.429.287.712.287M5 23q-.824 0-1.412-.587C2.999 21.826 3 21.55 3 21V3q0-.824.588-1.412C4.175.999 4.45 1 5 1h14q.824 0 1.413.587C21.002 2.175 21 2.45 21 3v18q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-5v3h14v-3zm0-2h14V6H5zM5 4h14V3H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTablet);
export default ForwardRef;
