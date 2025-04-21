import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m15 21.229-6-2.1-4.65 1.8q-.5.2-.925-.112C3 20.504 3 20.329 3 19.978v-14q0-.325.188-.575a1.13 1.13 0 0 1 .512-.375l5.3-1.8 6 2.1 4.65-1.8a.9.9 0 0 1 .925.112.99.99 0 0 1 .425.838v14q0 .325-.187.575c-.187.25-.296.292-.513.375zm-1-2.45v-11.7l-4-1.4v11.7zm2 0 3-1V5.929l-3 1.15zm-11-.25 3-1.15v-11.7l-3 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMap);
export default ForwardRef;
