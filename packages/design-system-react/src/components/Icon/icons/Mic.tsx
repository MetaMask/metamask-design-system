import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 14.229a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 11.229v-6q0-1.25.875-2.125T12 2.229c1.25 0 1.542.292 2.125.875Q15 3.979 15 5.229v6q0 1.25-.875 2.125c-.875.875-1.292.875-2.125.875m-1 7v-3.075q-2.6-.35-4.3-2.325C5 13.854 5 12.979 5 11.229h2q0 2.075 1.463 3.538c1.463 1.463 2.154 1.462 3.537 1.462s2.563-.487 3.538-1.462S17 12.612 17 11.228h2q0 2.625-1.7 4.6c-1.7 1.975-2.567 2.092-4.3 2.325v3.075zm1-9q.424 0 .713-.287c.289-.288.287-.43.287-.713v-6a.97.97 0 0 0-.287-.713Q12.425 4.23 12 4.23c-.425 0-.52.096-.712.287A.97.97 0 0 0 11 5.23v6q0 .424.288.713c.287.288.429.287.712.287" />
  </svg>
);
const ForwardRef = forwardRef(SvgMic);
export default ForwardRef;
