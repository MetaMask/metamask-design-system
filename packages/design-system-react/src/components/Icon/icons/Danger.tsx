import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDanger = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M1 21 12 2l11 19zm3.45-2h15.1L12 6zM12 18q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.712S12.283 16 12 16s-.52.096-.712.288S11 16.717 11 17s.096.52.288.713.429.287.712.287m-1-3h2v-5h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDanger);
export default ForwardRef;
