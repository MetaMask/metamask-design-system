import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPrivacyTip = (
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
    <path d="M11 17h2v-6h-2zm1-8q.424 0 .713-.287c.289-.287.287-.43.287-.713s-.096-.52-.287-.712S12.283 7 12 7s-.52.096-.712.288S11 7.717 11 8s.096.52.288.713S11.717 9 12 9m0 13q-3.476-.874-5.737-3.987C4.002 14.898 4 13.633 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.913C15.476 21.124 14.317 21.417 12 22m0-2.1q2.6-.825 4.3-3.3c1.7-2.475 1.7-3.483 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgPrivacyTip);
export default ForwardRef;
