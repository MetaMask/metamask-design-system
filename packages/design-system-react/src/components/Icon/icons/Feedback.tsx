import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFeedback = (
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
    <path d="M12 15.229q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.712-.43-.288-.713-.288-.52.096-.712.288-.288.429-.288.712.096.52.288.713.429.287.712.287m-1-4h2v-6h-2zm-9 11v-18q0-.824.588-1.413A1.93 1.93 0 0 1 4 2.23h16q.824 0 1.413.587Q22 3.404 22 4.23v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587H6zm3.15-6H20v-12H4v13.125z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFeedback);
export default ForwardRef;
