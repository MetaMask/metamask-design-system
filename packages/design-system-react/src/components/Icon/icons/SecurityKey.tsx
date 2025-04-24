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
    <path d="M10.5 15h3l-.575-3.225q.5-.25.788-.725C14 10.575 14 10.383 14 10q0-.825-.587-1.412C12.825 8 12.55 8 12 8s-1.02.196-1.412.588S10 9.45 10 10q0 .574.288 1.05c.287.476.454.558.787.725zm1.5 7q-3.476-.874-5.737-3.987C4.002 14.898 4 13.633 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.913C15.476 21.124 14.317 21.417 12 22m0-2.1q2.6-.825 4.3-3.3c1.7-2.475 1.7-3.483 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5c1.7 2.475 2.567 2.75 4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurityKey);
export default ForwardRef;
