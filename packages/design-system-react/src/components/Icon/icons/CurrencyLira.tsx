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
    <path d="M9 21v-5.15l-3 1.875V15.35l3-1.875v-2.35L6 13v-2.35l3-1.9V3h2v4.5L15 5v2.35l-4 2.525v2.35l4-2.5v2.35L11 14.6V19q2.075 0 3.538-1.462C16 16.076 16 15.383 16 14h2q0 2.925-2.037 4.963C13.926 21 12.95 21 11 21z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyLira);
export default ForwardRef;
