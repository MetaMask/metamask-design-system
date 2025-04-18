import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecurityKey = (
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
    <path d="M10.5 14.886h3l-.575-3.225q.5-.25.788-.725c.288-.475.287-.667.287-1.05q0-.825-.587-1.413-.588-.588-1.413-.587c-.825 0-1.02.195-1.412.587A1.93 1.93 0 0 0 10 9.886q0 .575.288 1.05c.287.475.454.558.787.725zm1.5 7q-3.476-.876-5.737-3.988C4.002 14.786 4 13.518 4 10.986v-6.1l8-3 8 3v6.1q0 3.8-2.262 6.912c-2.262 3.112-3.421 3.404-5.738 3.988m0-2.1q2.6-.825 4.3-3.3c1.7-2.476 1.7-3.484 1.7-5.5V6.26l-6-2.25-6 2.25v4.725q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurityKey);
export default ForwardRef;
