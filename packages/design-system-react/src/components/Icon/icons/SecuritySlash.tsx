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
    <path d="m18.85 15.936-1.5-1.55q.3-.8.475-1.663C18 11.86 18 11.569 18 10.985V6.26l-6-2.25-3.65 1.375-1.55-1.55 5.2-1.95 8 3v6.1a11.2 11.2 0 0 1-1.15 4.95m.95 6.55-3.25-3.25q-.95.974-2.113 1.637c-1.163.663-1.587.78-2.437 1.012q-3.476-.874-5.738-3.987T4 10.985v-4.3l-2.6-2.6 1.4-1.4 18.4 18.4zm-7.8-2.7q.875-.276 1.675-.776c.8-.5 1.025-.725 1.475-1.175L6 8.686v2.3q0 3.025 1.7 5.5t4.3 3.3" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecuritySlash);
export default ForwardRef;
