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
    <path d="M12 14a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 11V5q0-1.25.875-2.125T12 2c1.25 0 1.542.292 2.125.875S15 4.167 15 5v6q0 1.25-.875 2.125C13.25 14 12.833 14 12 14m-1 7v-3.075q-2.6-.35-4.3-2.325C5 13.625 5 12.75 5 11h2q0 2.075 1.463 3.538C9.926 16 10.617 16 12 16s2.563-.487 3.538-1.462S17 12.383 17 11h2q0 2.625-1.7 4.6c-1.7 1.975-2.567 2.092-4.3 2.325V21zm1-9q.424 0 .713-.287c.289-.287.287-.43.287-.713V5q0-.424-.287-.712C12.426 3.998 12.283 4 12 4s-.52.096-.712.287S11 4.717 11 5v6q0 .424.288.713c.287.289.429.287.712.287" />
  </svg>
);
const ForwardRef = forwardRef(SvgMic);
export default ForwardRef;
