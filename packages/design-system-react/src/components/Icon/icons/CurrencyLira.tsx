import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCurrencyLira = (
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
    <path d="M9 21.229v-5.15l-3 1.875v-2.375l3-1.875v-2.35l-3 1.875v-2.35l3-1.9v-5.75h2v4.5l4-2.5v2.35l-4 2.525v2.35l4-2.5v2.35l-4 2.525v4.4q2.075 0 3.538-1.462C16 16.305 16 15.612 16 14.229h2q0 2.925-2.037 4.963C13.926 21.23 12.95 21.229 11 21.229z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyLira);
export default ForwardRef;
