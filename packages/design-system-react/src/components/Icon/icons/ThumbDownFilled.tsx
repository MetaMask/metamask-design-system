import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgThumbDownFilled = (
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
    <path d="M6 3.229h10v13l-7 7-1.25-1.25q-.175-.175-.287-.475c-.112-.3-.113-.392-.113-.575v-.35l1.1-4.35H3q-.8 0-1.4-.6c-.6-.6-.6-.867-.6-1.4v-2a2 2 0 0 1 .15-.75l3-7.05q.225-.5.75-.85t1.1-.35m12 13v-13h4v13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgThumbDownFilled);
export default ForwardRef;
