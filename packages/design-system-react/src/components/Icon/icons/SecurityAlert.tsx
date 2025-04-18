import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecurityAlert = (
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
    <path d="M12 16.229q.424 0 .713-.287c.289-.288.287-.43.287-.713s-.096-.52-.287-.712-.43-.288-.713-.288-.52.096-.712.288-.288.429-.288.712.096.52.288.713.429.287.712.287m-1-4h2v-5h-2zm1 10q-3.476-.874-5.737-3.987C4.002 15.127 4 13.862 4 11.328v-6.1l8-3 8 3v6.1q0 3.8-2.262 6.912c-2.262 3.112-3.421 3.405-5.738 3.988m0-2.1q2.6-.825 4.3-3.3c1.7-2.475 1.7-3.483 1.7-5.5V6.604l-6-2.25-6 2.25v4.725q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurityAlert);
export default ForwardRef;
