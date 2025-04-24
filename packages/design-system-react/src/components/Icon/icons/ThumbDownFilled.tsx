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
    <path d="M6 3h10v13l-7 7-1.25-1.25q-.175-.175-.287-.475c-.112-.3-.113-.392-.113-.575v-.35L8.45 16H3q-.8 0-1.4-.6C1 14.8 1 14.533 1 14v-2a2 2 0 0 1 .15-.75l3-7.05q.225-.5.75-.85C5.425 3 5.617 3 6 3m12 13V3h4v13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgThumbDownFilled);
export default ForwardRef;
