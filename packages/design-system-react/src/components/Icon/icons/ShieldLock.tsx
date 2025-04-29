import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgShieldLock = (
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
    <path d="M12 22q-3.476-.874-5.737-3.987C4.002 14.898 4 13.633 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.913C15.476 21.124 14.317 21.417 12 22m0-2.1q2.6-.825 4.3-3.3c1.7-2.475 1.7-3.483 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3M10 16h4q.424 0 .713-.288c.289-.288.287-.429.287-.712v-3q0-.424-.287-.713c-.287-.289-.43-.287-.713-.287v-1q0-.824-.587-1.413C12.825 7.998 12.55 8 12 8s-1.02.196-1.412.587S10 9.45 10 10v1q-.424 0-.712.287c-.289.287-.288.43-.288.713v3q0 .424.288.712C9.575 16 9.717 16 10 16m1-5v-1q0-.424.288-.713C11.575 8.998 11.717 9 12 9s.52.096.713.287.287.43.287.713v1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShieldLock);
export default ForwardRef;
