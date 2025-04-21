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
    <path d="m1 20.886 11-19 11 19zm3.45-2h15.1l-7.55-13zm7.55-1q.424 0 .713-.288c.289-.288.287-.43.287-.712s-.096-.521-.287-.713-.43-.287-.713-.287-.52.095-.712.287-.288.43-.288.713.096.52.288.712.429.288.712.288m-1-3h2v-5h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDanger);
export default ForwardRef;
