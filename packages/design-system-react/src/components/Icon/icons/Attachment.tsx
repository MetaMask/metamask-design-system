import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAttachment = (
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
    <path d="M8.25 18q-2.6 0-4.425-1.825C2 14.35 2 13.483 2 11.75s.608-3.208 1.825-4.425S6.517 5.5 8.25 5.5h9.25q1.875 0 3.188 1.313C22 8.126 22 8.75 22 10s-.437 2.313-1.312 3.188S18.75 14.5 17.5 14.5H8.75q-1.15 0-1.95-.8c-.8-.8-.8-1.183-.8-1.95s.267-1.417.8-1.95A2.65 2.65 0 0 1 8.75 9H18v2H8.75a.73.73 0 0 0-.75.75.73.73 0 0 0 .75.75h8.75q1.05-.025 1.775-.737C20 11.05 20 10.7 20 10s-.242-1.292-.725-1.775S18.2 7.5 17.5 7.5H8.25q-1.774-.025-3.012 1.225C3.999 9.975 4 10.567 4 11.75q0 1.75 1.238 2.975C6.475 15.95 7.067 15.967 8.25 16H18v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
