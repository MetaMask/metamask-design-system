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
    <path d="M12 22.229q-3.476-.874-5.737-3.987C4.002 15.127 4 13.862 4 11.328v-6.1l8-3 8 3v6.1q0 3.8-2.262 6.912c-2.262 3.112-3.421 3.405-5.738 3.988m0-2.1q2.6-.825 4.3-3.3c1.7-2.475 1.7-3.483 1.7-5.5V6.604l-6-2.25-6 2.25v4.725q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3m-2-3.9h4q.424 0 .713-.287c.289-.288.287-.43.287-.713v-3q0-.424-.287-.712c-.287-.289-.43-.288-.713-.288v-1q0-.825-.587-1.412-.588-.588-1.413-.588c-.825 0-1.02.196-1.412.588A1.93 1.93 0 0 0 10 10.229v1q-.424 0-.712.288c-.289.287-.288.429-.288.712v3q0 .424.288.713c.287.288.429.287.712.287m1-5v-1q0-.424.288-.712.287-.288.712-.288c.425 0 .52.096.713.288q.287.287.287.712v1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShieldLock);
export default ForwardRef;
