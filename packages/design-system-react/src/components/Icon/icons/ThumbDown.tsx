import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgThumbDown = (
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
    <path d="M6 3h11v13l-7 7-1.25-1.25q-.175-.175-.287-.475c-.112-.3-.113-.392-.113-.575v-.35L9.45 16H3q-.8 0-1.4-.6C1 14.8 1 14.533 1 14v-2q0-.175.05-.375c.05-.2.067-.258.1-.375l3-7.05q.225-.5.75-.85C5.425 3 5.617 3 6 3m9 2H6l-3 7v2h9l-1.35 5.5L15 15.15zm2 11v-2h3V5h-3V3h5v13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgThumbDown);
export default ForwardRef;
