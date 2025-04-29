import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgReport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 17q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.713S12.283 15 12 15s-.52.096-.712.287S11 15.717 11 16s.096.52.288.712.429.288.712.288m-1-4h2V7h-2zm-2.75 8L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21zm.85-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgReport);
export default ForwardRef;
