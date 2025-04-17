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
    <path d="M12 17.229q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.712-.43-.288-.713-.288-.52.096-.712.288-.288.429-.288.712.096.52.288.713.429.287.712.287m-1-4h2v-6h-2zm-2.75 8L3 15.979v-7.5l5.25-5.25h7.5L21 8.479v7.5l-5.25 5.25zm.85-2h5.8l4.1-4.1v-5.8l-4.1-4.1H9.1L5 9.329v5.8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgReport);
export default ForwardRef;
