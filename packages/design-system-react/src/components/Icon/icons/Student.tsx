import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStudent = (
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
    <path d="m12 21-7-3.8v-6L1 9l11-6 11 6v8h-2v-6.9l-2 1.1v6zm0-8.3L18.85 9 12 5.3 5.15 9zm0 6.025 5-2.7V12.25L12 15l-5-2.75v3.775z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStudent);
export default ForwardRef;
