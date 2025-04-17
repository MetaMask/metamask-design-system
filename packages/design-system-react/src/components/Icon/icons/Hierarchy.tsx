import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHierarchy = (
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
    <path d="M7 21.886q-1.25 0-2.125-.875C4 20.136 4 19.719 4 18.886q0-.976.563-1.75c.563-.774.854-.875 1.437-1.075V7.71a2.9 2.9 0 0 1-1.437-1.075A2.9 2.9 0 0 1 4 4.886q0-1.25.875-2.125T7 1.886c1.25 0 1.542.291 2.125.875Q10 3.635 10 4.886q0 .975-.562 1.75A2.9 2.9 0 0 1 8 7.71v.175q0 1.25.875 2.125a2.9 2.9 0 0 0 2.125.875h2q2.075 0 3.538 1.462C18 13.81 18 14.502 18 15.886v.175q.875.3 1.438 1.075c.563.775.562 1.1.562 1.75q0 1.25-.875 2.125c-.875.875-1.292.875-2.125.875s-1.542-.292-2.125-.875S14 19.719 14 18.886q0-.976.563-1.75c.562-.774.854-.875 1.437-1.075v-.175q0-1.25-.875-2.125c-.875-.875-1.292-.875-2.125-.875h-2a4.92 4.92 0 0 1-3-1v4.175q.875.3 1.437 1.075c.563.775.563 1.1.563 1.75q0 1.25-.875 2.125c-.875.875-1.292.875-2.125.875m0-2q.424 0 .713-.288c.289-.288.287-.43.287-.712s-.096-.521-.287-.713-.43-.287-.713-.287-.52.095-.712.287-.288.43-.288.713.096.52.288.712.429.288.712.288m10 0q.424 0 .713-.288c.288-.288.287-.43.287-.712s-.096-.521-.287-.713-.43-.287-.713-.287-.52.095-.712.287-.288.43-.288.713.096.52.288.712.429.288.712.288m-10-14q.424 0 .713-.288A.97.97 0 0 0 8 4.886a.97.97 0 0 0-.287-.713Q7.425 3.886 7 3.886c-.425 0-.52.095-.712.287A.97.97 0 0 0 6 4.886q0 .424.288.712.287.288.712.288" />
  </svg>
);
const ForwardRef = forwardRef(SvgHierarchy);
export default ForwardRef;
