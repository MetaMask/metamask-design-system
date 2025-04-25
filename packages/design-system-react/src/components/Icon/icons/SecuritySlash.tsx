import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecuritySlash = (
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
    <path d="m18.85 16.05-1.5-1.55q.3-.8.475-1.662C18 11.976 18 11.683 18 11.1V6.375l-6-2.25L8.35 5.5 6.8 3.95 12 2l8 3v6.1a11.2 11.2 0 0 1-1.15 4.95m.95 6.55-3.25-3.25q-.95.975-2.113 1.638C13.274 21.65 12.85 21.767 12 22q-3.476-.874-5.738-3.987T4 11.1V6.8L1.4 4.2l1.4-1.4 18.4 18.4zM12 19.9q.875-.275 1.675-.775c.8-.5 1.025-.725 1.475-1.175L6 8.8v2.3q0 3.025 1.7 5.5t4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecuritySlash);
export default ForwardRef;
